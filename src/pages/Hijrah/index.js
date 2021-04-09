import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {fonts} from '../../utils';

const IconHijrah = ({images, title, tipe, onPress}) => {
  const windowsWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '20%',
        height: 90,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#16A858',
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,

        // elevation: 2,
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          // backgroundColor: 'red',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image
          resizeMode="contain"
          source={images}
          style={{
            width: '100%',
            // height: 50,
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
            fontSize: windowsWidth / 40,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Hijrah() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={
        {
          // paddingTop: 10,
        }
      }>
      <View
        style={{
          justifyContent: 'center',
          // padding: 10,
          // flex: 1,

          //   borderTopLeftRadius: 30,
          //   borderTopRightRadius: 20,
          // justifyContent: 'center',
          // padding: 5,paddin
          // paddingHorizontal: 10,

          paddingVertical: 20,

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
            justifyContent: 'space-around',
          }}>
          <IconHijrah
            images={{
              uri: 'https://ayokulakan.com/img/pilihan/sosial-agama.png',
            }}
            title="Gallery"
            onPress={() => navigation.navigate('Kiblat')}
          />
          <IconHijrah
            images={{
              uri: 'https://ayokulakan.com/img/pilihan/hijrah-tentang.jpg',
            }}
            title="Tentang Haji & Umroh"
            onPress={() => navigation.navigate('Zakat')}
          />
          <IconHijrah
            images={{
              uri: 'https://ayokulakan.com/img/pilihan/hijrah-daftar.jpg',
            }}
            title="Daftar Haji & Umroh"
            onPress={() => navigation.navigate('Quran')}
          />
          <IconHijrah
            images={{
              uri: 'https://ayokulakan.com/img/pilihan/hijrah-zakat.jpg',
            }}
            title="Zakat dan Infaq"
            onPress={() => navigation.navigate('Zakat')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-around',
          }}>
          <IconHijrah
            images={{uri: 'https://ayokulakan.com/img/pilihan/arah-qiblat.jpg'}}
            title="Arah Qiblat"
            onPress={() => navigation.navigate('Kiblat')}
          />
          <IconHijrah
            images={{
              uri: 'https://ayokulakan.com/img/pilihan/jadwal-sholat.jpeg',
            }}
            title="Jadwal Sholat"
            // onPress={() => navigation.navigate('Masjid')}
            onPress={() => navigation.navigate('Jadwal')}
          />
          <IconHijrah
            images={{uri: 'https://ayokulakan.com/img/pilihan/quran.png'}}
            title="Al - Quran"
            onPress={() => navigation.navigate('Quran')}
          />
          <IconHijrah
            images={{uri: 'https://ayokulakan.com/img/pilihan/hadits.png'}}
            title="Hadits Bukhari"
            onPress={() => navigation.navigate('Hadits')}
          />
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Kitab-Regular',
          }}>
          إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَاجَرُوا وَجَاهَدُوا فِي سَبِيلِ
          اللَّهِ أُولَئِكَ يَرْجُونَ رَحْمَتَ اللَّهِ وَاللَّهُ غَفُورٌ رَحِيمٌ
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            textAlign: 'justify',
            fontFamily: fonts.secondary[400],
          }}>
          "Sesungguhnya orang-orang yang beriman, orang-orang yang berhijrah dan
          berjihad di jalan Allah, mereka itulah yang mengharapkan rahmat Allah.
          Dan Allah Maha Pengampun lagi Maha Penyayang. – (Q.S Al-Baqarah: 218)"{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
}
