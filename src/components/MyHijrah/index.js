import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const IconHijrah = ({images, title, tipe, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '18%',
        height: 90,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#16A858',
        borderWidth: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,

        // elevation: 2,
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={images}
          style={{
            width: tipe == 'hijrah' ? 35 : 50,
            height: tipe == 'hijrah' ? 35 : 50,
            aspectRatio: 1,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#16A858',
            fontSize: tipe == 'hijrah' ? 11 : 11,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MyHijrah() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        // padding: 10,
        // flex: 1,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,
        // justifyContent: 'center',
        // padding: 5,paddin
        paddingHorizontal: 10,

        // height: 300,
        backgroundColor: '#16A858',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Lobster-Regular',
            color: '#FFF',
          }}>
          Ayo Hijrah
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconHijrah
          images={require('../../assets/icon/kiblat.png')}
          title="Arah Kiblat"
          onPress={() => navigation.navigate('Kiblat')}
        />
        <IconHijrah
          images={require('../../assets/icon/zakat.png')}
          title="Zakat"
          onPress={() => navigation.navigate('Zakat')}
        />
        <IconHijrah
          images={require('../../assets/icon/jadwal.png')}
          title="Jadwal Shalat"
          onPress={() => navigation.navigate('Jadwal')}
        />
        <IconHijrah
          images={require('../../assets/icon/masjid.png')}
          title="Masjid"
          onPress={() => navigation.navigate('Masjid')}
        />
        <IconHijrah
          images={require('../../assets/icon/haji.png')}
          title="Paket Haji & Umroh"
        />
      </View>
    </View>
  );
}
