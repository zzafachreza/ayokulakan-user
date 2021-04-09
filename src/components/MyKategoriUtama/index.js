import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const IconKategoriUtama = ({images, title, tipe, onPress}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: windowWidth / 5,
        height: windowHeight / 7,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#16A858',
        borderWidth: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,

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
            width: '100%',
            aspectRatio: 0.5,
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
            fontSize: windowWidth / 35,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MyKategoriUtama() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        padding: 10,
        // backgroundColor: '#16A858',
        // backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name="apps-outline" color="#16A858" size={16} />
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#16A858',
            left: 10,
            fontSize: 16,
          }}>
          Kategori Utama
        </Text>
        {/* <ImageViewer imageUrls={image} /> */}
      </View>
      <View
        style={{
          paddingHorizontal: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <IconKategoriUtama
          images={require('../../assets/icon/pertanian.png')}
          title="Pertanian"
        />
        <IconKategoriUtama
          images={require('../../assets/icon/perikanan.png')}
          title="Perikanan"
        />
        <IconKategoriUtama
          images={require('../../assets/icon/perkebunan.png')}
          title="Perkebunan"
        />
        <IconKategoriUtama
          images={require('../../assets/icon/perternakan.png')}
          title="Peternakan"
        />
      </View>
    </View>
  );
}
