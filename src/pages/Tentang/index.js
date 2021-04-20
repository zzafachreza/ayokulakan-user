import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, fonts} from '../../utils';

export default function Tentang({navigation}) {
  const MyTentang = ({name, image, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          borderWidth: 1,
          padding: 5,
          margin: 5,
          borderRadius: 10,
          borderColor: colors.primary,
          backgroundColor: colors.white,
          elevation: 1,
        }}>
        <Image
          source={{uri: image}}
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fontFamily: fonts.secondary[400],
          }}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <MyTentang
            onPress={() => navigation.navigate('TentangAyo')}
            name="Tentang Ayokulakan"
            image="https://ayokulakan.com/img/pilihan/tentang-ayo.jpg"
          />
          <MyTentang
            onPress={() => navigation.navigate('TentangKurir')}
            name="Tentang Kurir"
            image="https://ayokulakan.com/img/pilihan/tentang-kurir.jpg"
          />
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <MyTentang
            onPress={() => navigation.navigate('TentangKaki')}
            name="Tentang Kaki lima"
            image="https://ayokulakan.com/img/pilihan/tentang-kaki.jpg"
          />
          <MyTentang
            onPress={() => navigation.navigate('TentangAturan')}
            name="Aturan Pengguna"
            image="https://ayokulakan.com/img/pilihan/tentang-pengguna.jpg"
          />
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <MyTentang
            onPress={() => navigation.navigate('TentangPerjanjian')}
            name="Perjanjian"
            image="https://ayokulakan.com/img/pilihan/tentang-perjanjian.jpg"
          />
          <MyTentang
            onPress={() => navigation.navigate('TentangSyarat')}
            name="Syarat dan Ketentuan"
            image="https://ayokulakan.com/img/pilihan/tentang-syarat.jpg"
          />
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <MyTentang
            onPress={() => navigation.navigate('TentangKebijakan')}
            name="Kebijakan Privasi"
            image="https://ayokulakan.com/img/pilihan/tentang-kebijakan.jpg"
          />
          <MyTentang
            onPress={() => navigation.navigate('TentangKontak')}
            name="Kontak Kami"
            image="https://ayokulakan.com/img/pilihan/tentang-kontak.jpg"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
