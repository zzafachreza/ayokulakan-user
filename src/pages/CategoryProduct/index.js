import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Image,
} from 'react-native';
import {MyHeader} from '../../components';
import {Icon, ListItem, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

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

export default function CategoryProduct({navigation, route}) {
  const id_subkategori = route.params.id_subkategori;
  const sub_nama = route.params.sub_nama;
  const [dataBarangSearch, setdataBarangSearch] = useState([]);
  useEffect(() => {
    axios
      .post('https://ayokulakan.com/v1/api/barang', {
        field: 'id_sub_kategori',
        key: id_subkategori,
      })
      .then((res) => {
        console.log(res.data);
        setdataBarangSearch(res.data);
        setTimeout(() => {
          //   setLoading(false);
        }, 500);
      });
  });

  navigation.setOptions({title: sub_nama});

  const renderItemSearch = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Product', {
          product: item,
        })
      }
      activeOpacity={1.0}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.detailsContainer}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>{item.harga_barang}</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.subTitle}>{item.nama}</Text>
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
            {item.provinsi}
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
            <Bintang nilai={5} />
          </View>
          <Text
            style={{
              fontFamily: 'Montserrat-Light',
              fontSize: 12,
              left: 5,
              color: '#000',
            }}>
            ( {item.barang_terjual == null ? 0 : item.barang_terjual} )
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      {/* <Text>{key}</Text> */}

      <ScrollView
        style={{
          flex: 1,
          padding: 10,
        }}>
        <FlatList
          numColumns={2}
          data={dataBarangSearch}
          renderItem={renderItemSearch}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
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
