import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers, setCart} from '../../redux';
import {showMessage} from 'react-native-flash-message';
import {getData, storeData} from '../../utils/localStorage';
import axios from 'axios';
import {colors, fonts} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function SewaDetail({navigation, route}) {
  const UsersGlobal = useSelector((state) => state.reducerUsers);
  navigation.setOptions({title: 'Detail Sewa'});
  const sewa = route.params;

  const [kirim, setKirim] = useState(sewa.product);

  const [unit, setUnit] = useState(1);
  useEffect(() => {
    console.log(sewa);
    setKirim({
      ...kirim,
      harga: kirim.harga_sewa.replace('Rp. ', '').replace(',', ''),
      unit: unit,
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView>
          <View>
            <View>
              <FastImage
                source={{uri: sewa.product.url}}
                style={{
                  flex: 1,

                  resizeMode: 'cover',
                  aspectRatio: 2,
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#FFF',
                padding: 10,
                shadowColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: -10,
                  height: 2,
                },
                shadowOpacity: 0.44,
                shadowRadius: 5.32,
                elevation: 1,
                margin: 20,
                // height: 600,
              }}>
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                  color: '#F8781D',
                }}>
                {sewa.product.harga_sewa}
                {/* {token} */}
              </Text>
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                  color: '#000',
                }}>
                {sewa.product.judul}
              </Text>
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-Light',
                  fontSize: 20,
                  color: '#000',
                }}>
                {sewa.product.keterangan}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (unit == 1) {
              showMessage({
                message: 'Minimal harus sewa 1 barang',
                type: 'danger',
              });
            } else {
              setUnit(unit - 1);
              setKirim({
                ...kirim,
                unit: unit - 1,
              });
            }
          }}
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.secondary,
            borderRadius: 10,
          }}>
          <Icon type="ionicon" name="remove" color={colors.white} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 22,
            }}>
            {unit}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setUnit(unit + 1);
            setKirim({
              ...kirim,
              unit: unit + 1,
            });
          }}
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.secondary,
            borderRadius: 10,
          }}>
          <Icon type="ionicon" name="add" color={colors.white} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 5,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('send data', kirim);
            navigation.navigate('SewaCheckout', kirim);
          }}
          activeOpacity={1}
          style={{
            flex: 2,
            backgroundColor: '#16A858',
            padding: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              // left: 20,
              color: '#FFF',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            SEWA SEKARANG
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
