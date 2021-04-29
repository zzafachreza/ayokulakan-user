import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {MyInput, MyGap, MyButton} from '../../components';
import {colors, fonts} from '../../utils';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function PpobPlnMeteran({navigation}) {
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);

  const _cek = () => {
    // alert(key);
    setLoading(true);
    _getData();
  };

  useEffect(() => {
    _getTokenPln();
  }, []);

  const _getTokenPln = () => {
    axios
      .get('https://ayokulakan.com/api/ppob/list?pulsa_type=pln&limit=0')
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  };

  const _getData = () => {
    axios
      .get(
        'https://ayokulakan.com/api/ppob/pasca/plnprabayar?hp=' +
          key +
          '&type=pln',
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
              {item.meter_no}
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
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: 16,
              }}>
              Keterangan :
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
              }}>
              {item.segment_power}
            </Text>
            <View>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  fontSize: 14,
                  textAlign: 'right',
                }}>
                Silahkan Pilih Nominal
              </Text>
              {data.map((item) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginVertical: 10,
                      borderWidth: 1,
                      borderColor: colors.primary,
                      borderRadius: 10,
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 18,
                      }}>
                      Rp. {new Intl.NumberFormat().format(item.pulsa_nominal)}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.secondary,
                      }}>
                      Harga : Rp.{' '}
                      {new Intl.NumberFormat().format(item.pulsa_price)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
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
