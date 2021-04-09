import React, {useState} from 'react';
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

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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

  // id: 1,
  // title: 'Gerobah Kuliner',
  // image:
  //   'https://ayokulakan.com/storage/img_rental/pD9zff0e7CrU0m2ZY7sKORZ08LmPygbDUq1MyI6t.jpeg',
  // harga: 'Rp. 500.000',
  // nilai: 4,
  // jml: 10,
  // lokasi: 'Jawa Barat',

  return <>{myBintang}</>;
};

export default function Search({navigation}) {
  const [dataBarangSearch, setdataBarangSearch] = useState([]);
  const [key, setKey] = useState('');
  const [cari, setCari] = useState(false);
  const [loading, setLoading] = useState(false);

  const renderItemSearch = ({item}) => {
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
          {/* <View
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
        </View> */}
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Bintang nilai={item.nilai} />
          </View> */}
            {/* <Text
            style={{
              fontFamily: 'Montserrat-Light',
              fontSize: 12,
              left: 5,
              color: '#000',
            }}>
            ( {item.jml} )
          </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const pencarian = () => {
    setLoading(true);

    axios
      .get(
        'https://ayokulakan.com/api/pencarian/barang?limit=30&includes=lapak&nama_barang=' +
          key,
      )
      .then((res) => {
        console.log(res.data.data);
        setdataBarangSearch(res.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          // flex: 1,
          backgroundColor: '#16A858',
          height: 70,
          flexDirection: 'row',

          padding: 10,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon type="ionicon" name="arrow-back" color="#FFF" size={25} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
            }}>
            <TextInput
              value={key}
              onSubmitEditing={pencarian}
              onChangeText={(value) => setKey(value)}
              selectionColor={'#FFF'}
              autoCapitalize="none"
              autoFocus
              style={{
                paddingLeft: 20,
                borderWidth: 1,
                height: 45,
                borderRadius: 10,
                borderColor: '#FFF',
                color: '#FFF',
                flexDirection: 'row',
                fontSize: 18,
                justifyContent: 'center',
              }}
            />
          </View>
        </View>
      </View>
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
      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#FFF',
            width: '100%',
            top: 0,
            opacity: 0.7,
            height: '100%',
          }}>
          <ActivityIndicator color="#16A858" size="large" />
        </View>
      )}
    </SafeAreaView>
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
