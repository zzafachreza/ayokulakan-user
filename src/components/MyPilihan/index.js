import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const IconPemayaran2 = ({img, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // flex: 1,
        width: 90,
        height: 90,
        // borderWidth: 1,
        // borderColor: '#F8781D',
        // backgroundColor: '#F8781D',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

        elevation: 2,
      }}>
      <View
        style={{
          flex: 2,
        }}>
        <Image
          resizeMode="contain"
          source={img}
          style={{width: 50, height: 50, aspectRatio: 1}}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            // color: '#F8781D',
            color: '#F8781D',
            fontSize: 12,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MyPilihan() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F8781D',
        // backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name="grid" color="#FFF" size={16} />
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#FFF',
            left: 10,
            fontSize: 16,
          }}>
          Pilihan
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: '#16A858',
          }}>
          <IconPemayaran2
            title="Beranda"
            img={require('../../assets/icon/beranda.png')}
          />
          <IconPemayaran2
            onPress={() => navigation.navigate('SewaCategory')}
            title="Sewa"
            img={require('../../assets/icon/sewa.png')}
          />
          <IconPemayaran2
            title="Tentang Ayokulakan"
            img={require('../../assets/icon/tentang.png')}
          />
          <IconPemayaran2
            title="Panduan"
            img={require('../../assets/icon/panduan.png')}
          />
          <IconPemayaran2
            title="Fitur"
            img={require('../../assets/icon/fitur.png')}
          />
          <IconPemayaran2
            title="Kakilima"
            img={require('../../assets/icon/kakilima.png')}
          />
          <IconPemayaran2
            title="Yokuy Kurir"
            img={require('../../assets/icon/kurir.png')}
          />

          <IconPemayaran2
            title="Ayo Hijrah"
            img={require('../../assets/icon/hijrah.png')}
            onPress={() => navigation.navigate('Hijrah')}
          />

          <IconPemayaran2
            title="Kabar Terbaru"
            onPress={() => navigation.navigate('Notifikasi')}
            img={require('../../assets/icon/kabar.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
