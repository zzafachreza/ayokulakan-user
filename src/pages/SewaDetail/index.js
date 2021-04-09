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
import {colors} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function SewaDetail({navigation, route}) {
  const UsersGlobal = useSelector((state) => state.reducerUsers);
  navigation.setOptions({title: 'Detail Sewa'});
  const sewa = route.params.sewa;

  let uri = '';

  if (sewa.attachments[0]) {
    uri = 'https://ayokulakan.com/storage/' + sewa.attachments[0].url;
  } else {
    uri = 'https://ayokulakan.com/img/no-images.png';
  }

  useEffect(() => {
    console.log(sewa);
  }, []);

  const ListProduct = ({icon, title, desc}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <View style={{backgroundColor: '#FFF', padding: 10}}>
          <Icon type="ionicon" name={icon} color="gray" size={20} />
        </View>
        <View
          style={{
            flex: 2,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#EBE9E9',
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              color: 'gray',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#EBE9E9',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#16A858',
              textAlign: 'right',
              // fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'Montserrat-Regular',
            }}>
            {desc}
          </Text>
        </View>
      </View>
    );
  };

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
                source={{uri: uri}}
                style={{
                  flex: 1,
                  width: '100%',
                  resizeMode: 'cover',
                  aspectRatio: 1,
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#FFF',
                marginTop: -30,
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
                Rp. {new Intl.NumberFormat().format(sewa.harga_sewa)}
                {/* {token} */}
              </Text>
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                  color: '#000',
                }}>
                {sewa.judul}
              </Text>
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-Light',
                  fontSize: 20,
                  color: '#000',
                }}>
                {sewa.keterangan}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFF',
                marginTop: -10,
                margin: 20,
                // height: 600,
              }}>
              <View
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  backgroundColor: '#16A858',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#FFF',
                    fontSize: 20,
                    padding: 10,
                  }}>
                  Informasi Produk
                </Text>
              </View>
              <View
                style={{
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: '#FFF',
                  elevation: 1,
                  paddingBottom: 10,
                }}>
                <ListProduct
                  icon="grid-outline"
                  title="Kategori"
                  desc={sewa.kategori.nama}
                />

                <ListProduct
                  icon="file-tray-full-outline"
                  title="Stok"
                  desc={sewa.unit}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          padding: 5,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
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
            Sewa Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
