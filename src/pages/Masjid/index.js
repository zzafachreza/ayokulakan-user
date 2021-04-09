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
  Geojson,
} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

export default function Masjid() {
  let _map = null;
  let _carousel = null;
  const [currentLocation, setcurrentLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [radius, setRadius] = useState(1000);
  const [markers, setMarker] = useState([]);
  const [coordinates, setCoordinates] = useState([
    {
      id: 0,
      name: 'Masjid Habiburahman',
      desc: 'Jl. Setiabudhi No 1',
      latitude: -6.8739115,
      longitude: 107.5959483,
      image: {
        uri:
          'https://img.okezone.com/content/2019/11/01/614/2124711/jadi-khatib-salat-jumat-menag-fachrul-razi-pimpin-doa-pakai-bahasa-indonesia-Y9qGq0zkDw.jpg',
      },
    },
    {
      id: 1,
      name: 'Masjid Al Ikhlas',
      desc: 'Jl. Setiabudhi No 2',
      latitude: -6.8825912,
      longitude: 107.6006301,
      image: {
        uri:
          'https://img.okezone.com/content/2019/11/01/614/2124711/jadi-khatib-salat-jumat-menag-fachrul-razi-pimpin-doa-pakai-bahasa-indonesia-Y9qGq0zkDw.jpg',
      },
    },

    {
      id: 2,
      name: 'Masjid Umar Bin Khattab',
      desc: 'Jl. Setiabudhi No 1',
      latitude: -6.875898,
      longitude: 107.5818077,
      image: {
        uri:
          'https://img.okezone.com/content/2019/11/01/614/2124711/jadi-khatib-salat-jumat-menag-fachrul-razi-pimpin-doa-pakai-bahasa-indonesia-Y9qGq0zkDw.jpg',
      },
    },
  ]);

  useEffect(() => {
    locateCurrentPosition();
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
    _carousel.snapToItem(index);
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
    <View style={styles.cardContainer} key={item.id}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={(ref) => (_map = ref)}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={currentLocation}>
        <Circle
          center={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          strokeWidth={1}
          strokeColor={'#274996'}
          radius={radius}
          fillColor={'rgba(0,191,255, 0.5)'}
        />

        {coordinates.map((marker, index) => (
          <Marker
            key={marker.name}
            ref={(ref) => (markers[index] = ref)}
            onPress={() => onMarkerPressed(marker, index)}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}>
            <Image
              source={require('../../assets/icon/masjid.png')}
              style={{height: 35, width: 35}}
            />
            <Callout
              style={{flex: 1, position: 'absolute', width: 150, height: 80}}>
              <View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 20,
                    }}>
                    {marker.name}
                  </Text>
                  <Text
                    style={
                      {
                        // fontWeight: 'bold',
                      }
                    }>
                    {marker.desc}
                  </Text>
                </View>
                <View>
                  <Image
                    source={{
                      uri: 'https://facebook.github.io/react/logo-og.png',
                    }}
                    style={{width: 100, height: 100}}
                  />
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Carousel
        ref={(c) => (_carousel = c)}
        data={coordinates}
        containerCustomStyle={styles.carousel}
        renderItem={renderCarouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        removeClippedSubviews={false}
        onSnapToItem={(index) => onCarouselItemChange(index)}
      />
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
      <View
        style={{
          flex: 1,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#16A858',
          width: '100%',
          top: 0,
          // opacity: 0.7,
          height: 80,
        }}>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>Radius</Text>

          <Slider
            onTouchStart={0}
            step={1000}
            // onTouchMove={() => console.log('onTouchMove')}
            // onTouchEnd={1000}
            // onTouchEndCapture={() => console.log('onTouchEndCapture')}
            // onTouchCancel={() => console.log('onTouchCancel')}
            onValueChange={(value) => setRadius(value)}
            value={radius}
            maximumValue={10000}
            maximumTrackTintColor="gray"
            minimumTrackTintColor="white"
            thumbTintColor="white"
            style={{flex: 1, alignSelf: 'center', marginHorizontal: 5}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#FFF',
            }}>
            {parseFloat(radius / 1000).toFixed(2)} KM
          </Text>
        </View>
      </View>
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
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: '#274996',
    opacity: 0.8,
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24,
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
});
