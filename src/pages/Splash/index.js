import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Platform,
  Animated,
  ImageBackground,
  Button,
  Dimensions,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers, setCart} from '../../redux';
import {request, PERMISSIONS} from 'react-native-permissions';
import {getData} from '../../utils/localStorage';

export default function Splash({navigation}) {
  const dispatch = useDispatch();

  const top = new Animated.Value(0.5);
  const ukuran = new Animated.Value(0);
  const bawah = new Animated.Value(0);
  const atas = new Animated.Value(0);
  const [loading, setloading] = useState(true);

  const animasi = () => {
    Animated.timing(bawah, {
      toValue: 200,
      duration: 1000,
    }).start();

    Animated.timing(ukuran, {
      toValue: 1,
      duration: 2000,
    }).start();

    Animated.timing(atas, {
      toValue: 100,
      duration: 1000,
    }).start();

    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(top, {
    //       toValue: 0.6,
    //       duration: 800,
    //     }),
    //     Animated.timing(top, {
    //       toValue: 0.5,
    //       duration: 800,
    //     }),
    //   ]),
    //   {
    //     iterations: 10,
    //   },
    // ).start();
  };

  useEffect(() => {
    animasi();
    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        dispatch(setUsers('data', null));
      } else {
        dispatch(setUsers('data', res));
      }
    });

    getData('cart').then((res) => {
      dispatch(setCart(res));
      console.log('cart', res);
    });

    setTimeout(() => {
      requestLocationPermission();
      navigation.replace('MainApp');
    }, 3000);
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/wave1.png')}
        style={{
          // backgroundColor: '#1A3A59',
          height: 150,
          width: '100%',
          top: 0,
          position: 'absolute',
          justifyContent: 'center',
          padding: 30,

          // elevation: 2,

          flexDirection: 'row',
        }}
      />

      <Animated.Image
        source={require('../../assets/huruf.png')}
        style={
          ({
            width: 100,
            height: 100,
          },
          {
            transform: [{scale: top}],
          })
        }
      />
      <Animated.View
        style={{
          // right: 0,
          top: atas,
          // bottom: bawah,
          fontSize: ukuran,
          position: 'absolute',
        }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 200, height: 200}}
        />
      </Animated.View>
      <Animated.Text
        style={{
          maxWidth: Dimensions.get('window').width,
          fontFamily: 'Courgette-Regular',
          color: '#16A858',
          fontSize: 25,
          opacity: ukuran,
          textAlign: 'center',
        }}>
        Tebarkan Kesejahteraan dan Kedamaian Bersama Ayokulakan
      </Animated.Text>
      {/* <Button title="test" onPress={test} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
