import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {colors} from '../../utils';

export default function CategoryProductUtama({navigation, route}) {
  const id_kategori = route.params.id_kategori;
  useEffect(() => {
    axios
      .get(
        'https://ayokulakan.com/api/barang?limit=50&includes=creator,attachments&id_kategori=' +
          id_kategori,
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

  return (
    <View
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
    </View>
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