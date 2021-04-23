import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routers';
import Firebase from '@react-native-firebase/app';

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

import {LogBox, StatusBar, View, ActivityIndicator} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import messaging from '@react-native-firebase/messaging';
import {Provider, useSelector} from 'react-redux';
// import {} from 'react-redux';
import {store} from './redux';
import {storeData} from './utils/localStorage';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
    storeData('token', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    const json = JSON.stringify(notification);
    const obj = JSON.parse(json);
    console.log(obj);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    // console.log('ACTION:', notification.action);
    // console.log('NOTIFICATIONzzzz:', notification);
    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const Loading = () => {
  const loading = useSelector((state) => state.reducerTools.loading);
  console.log('loading is ', loading);
  return (
    loading && (
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
    )
  );
};

export default function App() {
  PushNotification.createChannel(
    {
      channelId: 'ayokulakan', // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
  // PushNotification.localNotificationSchedule({
  //   channelId: 'ayokulakan',
  //   message: 'Satu Hari Satu Hadits', // (required)
  //   date: new Date(Date.now()),
  //   repeatType: 'minute',
  // });

  // PushNotification.localNotificationSchedule({
  //   //... You can use all the options from localNotifications
  //   channelId: 'ayokulakan',
  //   message: 'My Notification Message', // (required),
  //   repeatType: 'minute',
  // });

  LogBox.ignoreAllLogs();
  const [routers, setrouters] = useState('Splash');
  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      const json = JSON.stringify(remoteMessage);
      const obj = JSON.parse(json);
      // alert(obj.notification);
      console.log(obj.notification);
      PushNotification.checkPermissions((permissions) => {
        console.log('permissions', permissions);
        if (permissions.alert === true) {
          PushNotification.localNotification({
            channelId: 'ayokulakan-user',
            title: obj.notification.title,
            message: obj.notification.body,
            playSound: true,
          });
        }
      });
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#16A858" barStyle="light-content" />
        <Router />
        <FlashMessage position="top" />
        <Loading />
      </NavigationContainer>
    </Provider>
  );
}
