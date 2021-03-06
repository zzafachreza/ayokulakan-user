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

export default function MyNewRental() {
  useEffect(() => {
    axios
      .get(
        'https://ayokulakan.com/api/rental?limit=4&includes=attachments,kategori,sub_kategori,user',
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, []);

  const navigation = useNavigation();
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
          navigation.navigate('SewaDetail', {
            sewa: item,
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
              Rp. {new Intl.NumberFormat().format(item.harga_sewa)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.subTitle}>{item.judul}</Text>
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

  return (
    <View>
      <View
        style={{
          // marginHorizontal: 10,
          padding: 10,
          backgroundColor: '#F8781D',
          // borderRadius: 50,
          // borderBottomLeftRadius: 10,
          justifyContent: 'center',
          // alignItems: 'center',
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon
            type="ionicon"
            name="shield-checkmark-outline"
            color="#FFF"
            size={16}
          />
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color: '#FFF',
              left: 10,
              fontSize: 16,
            }}>
            Gak perlu beli. SEWA AJA DISINI
          </Text>
        </View>
      </View>
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
