import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Input} from 'react-native-elements';
import {MyInput} from '../../components';

export default function Alamat() {
  const GOOGLE_API_KEY = 'AIzaSyAEwGLRKSdTFlesR57_iurVepdw__eKeK0';
  navigator.geolocation = require('@react-native-community/geolocation');
  const [alamat, setAlamat] = useState('');

  const onChange = (x) => {
    console.log(x);
  };

  const [key, setKey] = useState('');
  const pencarian = () => {
    alert(key);
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <MyInput
        value={key}
        label="Alamat"
        onSubmitEditing={pencarian}
        onChangeText={(value) => setKey(value)}
      />
    </View>
    // <GooglePlacesAutocomplete
    //   placeholder="Masukan Lokasi Kota Anda"
    //   minLength={2}
    //   autoFocus={false}
    //   returnKeyType={'default'}
    //   fetchDetails={true}
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.log(data, details);
    //   }}
    //   query={{
    //     key: GOOGLE_API_KEY,
    //     language: 'en',
    //   }}
    //   keyboardShouldPersistTaps={'handled'}
    //   listUnderlayColor={'transparent'}
    //   textInputProps={{
    //     onChangeText: (text) => onChange(text),
    //   }}
    // />
  );
}

const styles = StyleSheet.create({
  textInputStyle: {},
  viewStyle: {},
});
