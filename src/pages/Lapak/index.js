import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Icon} from 'react-native-elements';

export default function Lapak({navigation, route}) {
  const dataBarangLapak = [
    {
      id: 1,
      title: 'Gerobah Kuliner',
      image:
        'https://ayokulakan.com/storage/img_rental/pD9zff0e7CrU0m2ZY7sKORZ08LmPygbDUq1MyI6t.jpeg',
      harga: 'Rp. 500.000',
      nilai: 4,
      jml: 10,
      lokasi: 'Jawa Barat',
    },
    {
      id: 2,
      title: 'Gerobak besi galvalum',
      image:
        'https://ayokulakan.com/storage/img_rental/6cmXsySgNMBjb9W63wkAhi6w8oIUBPyBFxMSLiB6.jpeg',
      harga: 'Rp. 1.000.000',
      lokasi: 'Jawa Timur',
      nilai: 1,
      jml: 22,
    },
    {
      id: 3,
      title: 'Alat Peras Susu Sapi',
      image:
        'https://ayokulakan.com/storage/img_rental/L8QaoZXL4Ed9vJSKy0Rjp3akiWopRblyPWcRFATv.jpeg',
      harga: 'Rp. 250.000',
      lokasi: 'Jakarta barat',
      nilai: 3,
      jml: 1,
    },
    {
      id: 4,
      title: 'Canon 100D Touch Screen',
      image:
        'https://ayokulakan.com/storage/img_rental/5xMQToJfLnOjjO4TuWdvR6FsWJ3XzUYE5oR609kV.jpeg',
      harga: 'Rp. 70.000',
      lokasi: 'Jawa Timur',
      nilai: 5,
      jml: 20,
    },
  ];
  const Bintang = ({nilai}) => {
    var myBintang = [];

    for (let i = 0; i < 5; i++) {
      myBintang.push(
        <View key={i}>
          <Icon
            type="font-awesome"
            name="star"
            color={i < nilai ? '#F8B459' : '#C7C7C7'}
            style={{marginHorizontal: 2}}
            size={12}
          />
        </View>,
      );
    }

    return <>{myBintang}</>;
  };

  const renderItemLapak = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Product', {
          product: item,
        })
      }
      activeOpacity={1.0}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.detailsContainer}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>{item.harga}</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.subTitle}>{item.title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            // backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon type="font-awesome" name="map-marker" color="green" size={12} />
          <Text
            style={{
              fontFamily: 'Nunito-Light',
              fontSize: 12,
              left: 5,
              color: '#000',
            }}>
            {item.lokasi}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* bintang */}
            <Bintang nilai={item.nilai} />
          </View>
          <Text
            style={{
              fontFamily: 'Montserrat-Light',
              fontSize: 12,
              left: 5,
              color: '#000',
            }}>
            ( {item.jml} )
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const lapak = route.params;
  return (
    <>
      <View
        style={{
          // flex: 1,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/icon/toko.png')}
          style={{width: 80, height: 80}}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 25,
            fontFamily: fonts.primary[600],
          }}>
          {lapak.provinsi}
        </Text>
        <View
          style={{
            // flex: 1,
            height: 80,
            margin: 10,
            borderRadius: 10,
            width: '100%',
            justifyContent: 'center',
            // alignItems: 'center',
            padding: 10,
            backgroundColor: colors.primary,
            borderWidth: 1,
            elevation: 1,
            borderColor: colors.secondary,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontFamily: fonts.primary[600],
            }}>
            {lapak.nama}
          </Text>

          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: fonts.primary[400],
            }}>
            {lapak.desc}
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          style={{
            flex: 1,
            padding: 10,
          }}>
          <FlatList
            numColumns={2}
            data={dataBarangLapak}
            renderItem={renderItemLapak}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  card: {
    shadowColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,

    elevation: 5,

    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
  },
  detailsContainerButton: {
    paddingHorizontal: 5,
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    color: '#F8781D',
  },
  subTitle: {
    // flex: 1,
    // backgroundColor: 'red',
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
