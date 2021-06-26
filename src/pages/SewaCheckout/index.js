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

export default function SewaCheckout({navigation, route}) {
  const item = route.params;
  const [kirim, setKirim] = useState(item);
  const [user, setUser] = useState({});

  const [foto1, setfoto1] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto2, setfoto2] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );

  const options = {
    title: 'Ayokulakan',
    takePhotoButtonTitle: 'Ambil foto dengan kamera',
    chooseFromLibraryButtonTitle: 'Ambil foto dari galeri',
  };

  const getUpload = (xyz) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        let source = {uri: response.uri};

        switch (xyz) {
          case 1:
            setfoto1(`data:${response.type};base64, ${response.data}`);
            setKirim({
              ...kirim,
              ktp: `data:${response.type};base64, ${response.data}`,
            });
            break;
          case 2:
            setfoto2(`data:${response.type};base64, ${response.data}`);
            setKirim({
              ...kirim,
              kk: `data:${response.type};base64, ${response.data}`,
            });
            break;
        }
      }
    });
  };

  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigate('Account');
        exit();
      } else {
        setUser(res);
        setKirim({
          ...kirim,
          total: kirim.unit * kirim.harga,
        });
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
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,

                color: colors.black,
              }}>
              {kirim.judul}
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                backgroundColor: colors.white,

                color: colors.black,
              }}>
              {kirim.harga_sewa} x {kirim.unit}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                backgroundColor: colors.white,
                fontSize: 18,
                padding: 10,
                color: colors.secondary,
              }}>
              Rp. {new Intl.NumberFormat().format(kirim.total)}
            </Text>
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

        {/* <View
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
              Kota
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
              {user.kota.kota} KODE POS {user.kode_pos}
            </Text>
          </View>
        </View> */}

        {/* <View
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
              Provinsi
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
              {user.provinsi.provinsi}, {user.negara.negara}
            </Text>
          </View>
        </View> */}
      </View>
    );
  };

  const PesananUpload = () => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            backgroundColor: colors.secondary,
            padding: 10,
            color: colors.white,
          }}>
          Upload Dokumen
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              padding: 10,
              borderRightWidth: 1,
              borderRightColor: '#EEEEEE',
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                color: colors.black,
              }}>
              Foto KTP
            </Text>
            <TouchableOpacity
              onPress={() => getUpload(1)}
              style={{
                padding: 10,
                backgroundColor: colors.white,
                marginVertical: 10,
                borderColor: 'EEEEEE',
              }}>
              <Image
                source={{
                  uri: foto1,
                }}
                style={{
                  width: '100%',
                  aspectRatio: 1.5,
                }}
                resizeMode="center"
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                color: colors.black,
              }}>
              Foto KK (Kartu Keluarga)
            </Text>
            <TouchableOpacity
              onPress={() => getUpload(2)}
              style={{
                padding: 10,
                backgroundColor: colors.white,
                marginVertical: 10,
                borderColor: 'EEEEEE',
              }}>
              <Image
                source={{
                  uri: foto2,
                }}
                style={{
                  width: '100%',
                  aspectRatio: 1.5,
                }}
                resizeMode="center"
              />
            </TouchableOpacity>
          </View>
        </View>
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
        <PesananUpload />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          console.log('Bayar', kirim);
          navigation.navigate('SewaBayar', kirim);
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
