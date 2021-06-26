import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getData, colors, fonts} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';
import ImagePicker from 'react-native-image-picker';

export default function PesawatCheckout({navigation, route}) {
  const item = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigate('Account');
        exit();
      } else {
        setUser(res);
      }
    });
  }, []);

  const Pesanan = () => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            backgroundColor: 'gray',
            padding: 10,
            color: colors.white,
          }}>
          Pesanan Anda
        </Text>
        <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={{uri: item.logo}}
            style={{width: 25, height: 25, margin: 5}}
          />
          <Text
            style={{
              left: 10,
              flex: 1,
              fontFamily: fonts.secondary[600],
              backgroundColor: colors.white,

              color: colors.black,
            }}>
            {item.maskapai}
          </Text>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,
                fontSize: 20,
                padding: 10,
                color: colors.black,
              }}>
              Rp. {new Intl.NumberFormat().format(item.harga)}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,

                  //   borderRadius: 5,
                  borderColor: colors.primary,
                }}>
                <View
                  style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.secondary[600],
                      color: colors.white,
                    }}>
                    Asal
                  </Text>
                </View>
                <View style={{padding: 5}}>
                  <Text style={{fontFamily: fonts.secondary[600]}}>
                    {item.jamOrigin}
                  </Text>
                  <Text>{item.originCode}</Text>
                  <Text>{item.origin}</Text>
                </View>
              </View>
              <View
                style={{
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'center', //   marginHorizontal: 10,
                }}></View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: colors.secondary,
                }}>
                <View
                  style={{
                    backgroundColor: colors.secondary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.secondary[600],
                      color: colors.white,
                    }}>
                    Tujuan
                  </Text>
                </View>
                <View style={{padding: 5}}>
                  <Text style={{fontFamily: fonts.secondary[600]}}>
                    {item.jamDestination}
                  </Text>
                  <Text>{item.destinationCode}</Text>
                  <Text>{item.destination}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const DataPesanan = () => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            backgroundColor: colors.primary,
            padding: 10,
            color: colors.white,
          }}>
          Data Pemesan
        </Text>
        {/* --- */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                backgroundColor: colors.white,

                color: colors.black,
              }}>
              Nama
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              flex: 2,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,
                fontSize: 14,
                padding: 10,
                color: colors.black,
              }}>
              {user.nama}
            </Text>
          </View>
        </View>
        {/* ---- */}
        {/* --- */}
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#EEEEEE',
          }}>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                backgroundColor: colors.white,

                color: colors.black,
              }}>
              Email
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              flex: 2,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,
                fontSize: 14,
                padding: 10,
                color: colors.black,
              }}>
              {user.email}
            </Text>
          </View>
        </View>
        {/* ---- */}
        {/* --- */}
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#EEEEEE',
          }}>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                backgroundColor: colors.white,

                color: colors.black,
              }}>
              No Hp
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              flex: 2,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,
                fontSize: 14,
                padding: 10,
                color: colors.black,
              }}>
              0{user.hp}
            </Text>
          </View>
        </View>
        {/* ---- */}
        {/* --- */}
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#EEEEEE',
          }}>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                backgroundColor: colors.white,

                color: colors.black,
              }}>
              Alamat
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              flex: 2,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,
                fontSize: 14,
                padding: 10,
                color: colors.black,
              }}>
              {user.alamat}
            </Text>
          </View>
        </View>
        {/* ---- */}
      </View>
    );
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 10,
        }}>
        <Pesanan />
        <DataPesanan />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          console.log('Bayar', item);
          navigation.navigate('PesawatBayar', item);
        }}
        style={{
          backgroundColor: colors.primary,
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: 18,
          }}>
          BAYAR SEKARANG
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
