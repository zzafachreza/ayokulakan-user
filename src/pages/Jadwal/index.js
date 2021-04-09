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
  Button,
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
import moment from 'moment';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

import PushNotification from 'react-native-push-notification';

const ListJadwal = ({waktu, jam}) => {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: fonts.secondary[400],
          color: '#000',
        }}>
        {waktu}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontFamily: fonts.secondary[400],
          color: '#000',
        }}>
        {jam}
      </Text>
    </View>
  );
};

export default function Jadwal() {
  const [currentLocation, setcurrentLocation] = useState({});
  const [jadwal, setJadwal] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // locateCurrentPosition();
    getJadwal();
  }, []);

  const getJadwal = () => {
    // const date = '2021-02-15';
    const date = new Date().toISOString().slice(0, 10);
    // console.log(now);
    setLoading(true);
    axios.get('https://ipapi.co/json/').then((res) => {
      // console.log(res.data);
      // setKota(res.data.city);
      setcurrentLocation({
        ...currentLocation,
        city: res.data.city,
      });

      axios
        .get(
          'https://api.banghasan.com/sholat/format/json/kota/nama/' +
            res.data.city,
        )
        .then((res) => {
          // console.log(res.data.kota[0].id);

          axios
            .get(
              `https://api.banghasan.com/sholat/format/json/jadwal/kota/${res.data.kota[0].id}/tanggal/${date}`,
            )
            .then((res) => {
              setLoading(false);
              console.log(res.data.jadwal.data);
              setJadwal(res.data.jadwal.data);
            });
        });
    });
  };

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

  const pushNot = (waktu) => {
    // alert('haahah');
    PushNotification.checkPermissions((permissions) => {
      console.log('permissions', permissions);

      if (permissions.alert === true) {
        PushNotification.localNotification({
          channelId: 'JadwalSholat',
          title: 'Ayokulakan',
          message: 'Waktunya Shalat ' + waktu,
          playSound: true,
          soundName: require('../../assets/adzan.mp3'),
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon/backjadwal.jpg')}
        style={{
          width: '100%',
          height: 200,
        }}
      />
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primary,
          elevation: 1,
          height: 80,
          marginHorizontal: 10,
          marginTop: -50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: fonts.secondary[600],
            color: 'white',
          }}>
          {currentLocation.city}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.secondary[300],
            color: 'white',
          }}>
          {jadwal.tanggal}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          borderWidth: 1,
          borderColor: colors.primary,
          padding: 10,
          margin: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        {/* <Button title="push" onPress={() => pushNot('dzuhur')} /> */}
        <ListJadwal waktu="Imsak" jam={jadwal.imsak} />
        <ListJadwal waktu="Subuh" jam={jadwal.subuh} />
        <ListJadwal waktu="Terbit" jam={jadwal.terbit} />
        <ListJadwal waktu="Dzuhur" jam={jadwal.dzuhur} />
        <ListJadwal waktu="Ashar" jam={jadwal.ashar} />
        <ListJadwal waktu="Maghrib" jam={jadwal.maghrib} />
        <ListJadwal waktu="Isya" jam={jadwal.isya} />
      </View>
      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#FFF',
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
    // backgroundColor: colors.primary,
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
