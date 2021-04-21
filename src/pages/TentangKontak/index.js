import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {fonts, colors} from '../../utils';
import {MyInput, MyGap, MyButton} from '../../components';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
  Geojson,
} from 'react-native-maps';

export default function TentangKontak() {
  const [kirim, setKirim] = useState({
    nama: '',
    email: '',
    judul: '',
    tlp: '',
    isi: '',
  });

  const currentLocation = {
    latitude: -8.365469,
    longitude: 114.187938,
    latitudeDelta: 0.09,
    longitudeDelta: 0.035,
  };
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={{
            flex: 1,
            height: 300,
          }}
          initialRegion={currentLocation}>
          <Marker
            coordinate={{
              latitude: -8.365469,
              longitude: 114.187938,
            }}>
            <Image
              source={require('../../assets/logo.png')}
              style={{height: 35, width: 35}}
            />
          </Marker>
          <View
            style={{
              position: 'absolute',
              margin: 10,
              bottom: 50,
            }}>
            <Text
              style={{
                backgroundColor: colors.primary,
                color: 'white',
                padding: 10,
                fontFamily: fonts.secondary[600],
              }}>
              Jl. Raya Kembiritan
            </Text>
            <Text
              style={{
                backgroundColor: colors.secondary,
                color: 'white',
                padding: 10,
              }}>
              Kembiritan, Kec. Genteng, Kabupaten Banyuwangi, Jawa Timur 68465
            </Text>
          </View>
        </MapView>
      </View>
      <View style={{padding: 10}}>
        <MyInput
          value={kirim.nama}
          onChangeText={(value) =>
            setKirim({
              ...kirim,
              nama: value,
            })
          }
          label="Nama"
          iconname="person-outline"
        />
        <MyGap jarak={10} />
        <MyInput
          value={kirim.email}
          onChangeText={(value) =>
            setKirim({
              ...kirim,
              email: value,
            })
          }
          label="Email"
          iconname="mail-outline"
        />
        <MyGap jarak={10} />
        <MyInput
          value={kirim.judul}
          onChangeText={(value) =>
            setKirim({
              ...kirim,
              judul: value,
            })
          }
          label="Subject"
          iconname="apps-outline"
        />
        <MyGap jarak={10} />
        <MyInput
          value={kirim.tlp}
          onChangeText={(value) =>
            setKirim({
              ...kirim,
              tlp: value,
            })
          }
          label="No Tlp"
          iconname="call-outline"
        />
        <MyGap jarak={10} />
        <MyInput
          value={kirim.isi}
          onChangeText={(value) =>
            setKirim({
              ...kirim,
              isi: value,
            })
          }
          label="Pertanyaan atau saran"
          iconname="options-outline"
          multiline
        />
        <MyGap jarak={10} />
        <MyButton title="Kirim" warna={colors.secondary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    marginVertical: 10,
  },
  subJudul: {
    fontFamily: fonts.secondary[400],
    fontSize: 14,
    marginVertical: 2,
  },
  isi: {
    fontFamily: fonts.secondary[400],
    fontSize: 12,
  },
});
