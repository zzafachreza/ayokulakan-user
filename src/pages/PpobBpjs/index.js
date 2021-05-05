import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {MyInput, MyGap, MyButton} from '../../components';
import {colors, fonts} from '../../utils';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function PpobBpjs({navigation}) {
  const [key, setKey] = useState('');
  const [bulan, setBulan] = useState('');
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});

  const _cek = () => {
    // alert(key);
    setLoading(true);
    _getData();
  };

  useEffect(() => {}, []);

  const _getData = () => {
    axios
      .get(
        'https://ayokulakan.com/api/ppob/pasca?ppob_pelanggan=' +
          key +
          '&type=BPJS&month=' +
          bulan,
      )
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setStatus(true);
        setItem(res.data);
      });
  };

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
          label="Masukan Nomor ID Pelanggan"
          iconname="calculator-outline"
          onChangeText={(value) => setKey(value)}
        />
        <MyGap jarak={10} />
        <MyGap jarak={10} />
        <Picker
          selectedValue={bulan}
          onValueChange={(itemValue) => setBulan(itemValue)}>
          <Picker.Item label="Januari" value="Januari" />
          <Picker.Item label="Februari" value="Februari" />
          <Picker.Item label="Maret" value="Maret" />
          <Picker.Item label="April" value="April" />
          <Picker.Item label="Mei" value="Mei" />
          <Picker.Item label="Juni" value="Juni" />
          <Picker.Item label="Juli" value="Juli" />
          <Picker.Item label="Agustus" value="Agustus" />
          <Picker.Item label="September" value="September" />
          <Picker.Item label="Oktober" value="Oktober" />
          <Picker.Item label="November" value="November" />
          <Picker.Item label="Desember" value="Desember" />
        </Picker>
        <MyButton onPress={_cek} warna={colors.secondary} title="CEK" />
        <MyGap jarak={20} />
        {status && (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: colors.primary,
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Nomor :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
              }}>
              {item.hp}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Nama :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
              }}>
              {item.tr_name}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Periode :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
              }}>
              {item.period}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Kewajiban Bayar :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
              }}>
              {new Intl.NumberFormat().format(item.nominal)}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Biaya Admin :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
              }}>
              {new Intl.NumberFormat().format(item.admin)}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Total Bayar :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 30,
                color: colors.secondary,
                marginBottom: 20,
              }}>
              Rp. {new Intl.NumberFormat().format(item.price)}
            </Text>
            {/* <View>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  fontSize: 14,
                  textAlign: 'right',
                  bottom: 10,
                }}>
                {item.desc.tarif} / {item.desc.daya} WATT
              </Text>
            </View> */}
            <MyButton
              title="BELI SEKARANG"
              warna={colors.primary}
              onPress={() => navigation.navigate('PpobBpjsDetail', item)}
            />
          </View>
        )}
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
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
