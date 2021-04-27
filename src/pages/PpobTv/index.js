import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Picker} from 'react-native';
import {MyInput, MyButton, MyGap} from '../../components';
import {colors, fonts} from '../../utils';
import {Icon} from 'react-native-elements';
import axios from 'axios';

export default function PpobTv() {
  const [key, setKey] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [data, setData] = useState([]);

  const __getData = () => {
    axios.get('https://ayokulakan.com/api/ppob/pdam').then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };
  const _cek = () => {
    alert('Tinggal Integrasi Payment');
  };

  useEffect(() => {
    __getData();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        <MyInput
          value={key}
          autoFocus
          keyboardType="number-pad"
          label="Masukakn Nomor ID Pelanggan"
          iconname="calculator-outline"
          onChangeText={(value) => setKey(value)}
        />
        <MyGap jarak={10} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="map" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            Pilih langganan :
          </Text>
        </View>
        <Picker
          selectedValue={lokasi}
          onValueChange={(itemValue) => setLokasi(itemValue)}>
          <Picker.Item label="BIG TV" value="BIG TV" />
          <Picker.Item label="INDOVISION" value="INDOVISION" />
          <Picker.Item label="NEX MEDIA" value="NEX MEDIA" />
          <Picker.Item label="TELKOMVISION" value="TELKOMVISION" />
        </Picker>
        <MyGap jarak={10} />
        <MyButton onPress={_cek} warna={colors.secondary} title="CEK" />
        <MyGap jarak={20} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
