import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {MyInput, MyGap, MyButton} from '../../components';
import {colors} from '../../utils';

export default function EditTambahAlamat() {
  const [alamat, setAlamat] = useState('');

  const _saveData = () => {
    console.log(alamat);
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: 10,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <MyInput
          onChangeText={(value) => setAlamat(value)}
          label="Masukan alamat lain"
          iconname="map"
          multiline
        />
        <MyGap jarak={10} />
        <MyButton onPress={_saveData} title="simpan" warna={colors.secondary} />
      </View>
      <Text>{alamat}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
