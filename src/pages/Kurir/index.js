import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Slider,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

export default function Kurir() {
  let _map = null;
  let _carousel = null;
  const [currentLocation, setcurrentLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [radius, setRadius] = useState(1000);
  const [markers, setMarker] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    locateCurrentPosition();
    axios.get('https://ayokulakan.com/api/kurir?lat!=null').then((res) => {
      setCoordinates(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition((position) => {
      console.log(JSON.stringify(position));

      setcurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      });

      setLoading(false);
    });
  };

  const onMarkerPressed = (location, index) => {
    console.log(location, index);
    _map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });
    // _carousel.snapToItem(index);
  };

  const onCarouselItemChange = (index) => {
    let location = coordinates[index];

    _map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    markers[index].showCallout();
  };

  const renderCarouselItem = ({item}) => (
    <>
      <View style={styles.cardContainer} key={item.id}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubTitle}>{item.keterangan}</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.secondary,
          paddingHorizontal: 20,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={styles.cardType}>{item.usaha}</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={(ref) => (_map = ref)}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={currentLocation}>
        {/* <Marker
          coordinate={{
            latitude: -6.9283452,
            longitude: 107.6377337,
          }}>
          <Image
            source={require('../../assets/kurir.png')}
            style={{height: 35, width: 35}}
          />
        </Marker> */}
        {coordinates.map((marker, index) => (
          <Marker
            key={marker.id}
            ref={(ref) => (markers[index] = ref)}
            onPress={() => onMarkerPressed(marker, index)}
            coordinate={{
              latitude: parseFloat(marker.lat),
              longitude: parseFloat(marker.lng),
            }}>
            <Image
              source={require('../../assets/kurir.png')}
              style={{height: 35, width: 35}}
            />
            <Callout
              style={{flex: 1, position: 'absolute', width: 150, height: 80}}>
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 14,
                    }}>
                    {marker.namadepan}
                  </Text>
                  <Text
                    style={
                      {
                        // fontWeight: 'bold',
                      }
                    }>
                    {marker.email}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 14,
                    }}>
                    {marker.NomorPolisiKendaraan}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            width: '100%',
            top: 0,
            opacity: 0.7,
            height: '100%',
          }}>
          <ActivityIndicator color="#16A858" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#16A858',
    // opacity: 0.8,
    height: 80,
    width: '100%',
    // padding: 24,
    padding: 10,
    borderRadius: 10,
  },
  cardTitle: {
    color: 'white',
    fontFamily: fonts.primary[700],
    fontSize: 14,
  },
  cardSubTitle: {
    color: 'white',
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
  cardType: {
    color: 'white',
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
});
