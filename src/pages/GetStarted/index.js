import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {MyButton, MyGap} from '../../components';

export default function GetStarted({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const w = new Animated.Value(0);
  const h = new Animated.Value(0);
  const top = new Animated.Value(0);

  Animated.timing(bottom, {
    toValue: 0,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(w, {
    toValue: 200,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(h, {
    toValue: 200,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(top, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.page}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={{
            bottom: bottom,
            height: 55,
            width: 287,
          }}
        />
      </View>

      <MyButton
        title="LOGIN"
        warna="red"
        onPress={() => navigation.navigate('Login')}
      />
      <MyGap jarak={20} />
      <MyButton
        title="REGISTER"
        warna="grey"
        onPress={() => navigation.navigate('Register')}
      />
      <Animated.View style={{height: top}} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
});
