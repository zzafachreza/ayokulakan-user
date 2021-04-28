import React, {useEffect, useState} from 'react';
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
import axios from 'axios';

export default function Lapak({navigation, route}) {
  useEffect(() => {
    axios
      .get(
        'https://ayokulakan.com/api/barang?includes=creator,attachments&id_trans_lapak=' +
          route.params.id,
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, []);
  const [data, setData] = useState([]);
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

  const renderItem = ({item}) => {
    let uri = '';
    if (item.attachments[0]) {
      uri = 'https://ayokulakan.com/storage/' + item.attachments[0].url;
    } else {
      uri = 'https://ayokulakan.com/img/no-images.png';
    }

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Product', {
            product: item,
          })
        }
        activeOpacity={1.0}>
        <Image style={styles.image} source={{uri: uri}} />
        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.title}>
              Rp. {new Intl.NumberFormat().format(item.harga_barang)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.subTitle}>{item.nama_barang}</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}></View>
        </View>
      </TouchableOpacity>
    );
  };

  const lapak = route.params;
  console.log(lapak);
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
            data={data}
            renderItem={renderItem}
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
