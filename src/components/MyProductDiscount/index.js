import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {useSelector} from 'react-redux';

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

export default function MyProductDiscount() {
  const getData = () => {
    axios
      .get(
        'https://ayokulakan.com/api/barang?disc_barang!=null&includes=creator,attachments',
      )
      .then((res) => {
        console.log('data diskon', res.data.data);
        setData(res.data.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const renderItem = ({item}) => {
    let uri = '';

    if (item.attachments[0]) {
      uri = 'https://ayokulakan.com/storage/' + item.attachments[0].url;
    } else {
      uri = 'https://ayokulakan.com/img/no-images.png';
    }

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Product', {
            product: item,
          })
        }
        activeOpacity={1.0}>
        <View
          style={{
            width: windowWidth / 2 - 20,
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
            marginBottom: 10,
            marginTop: 10,
            flex: 1,

            marginHorizontal: 5,
          }}>
          <Image style={styles.image} source={{uri: uri}} />
          <View
            style={{
              backgroundColor: colors.secondary,
              position: 'absolute',
              top: '10%',
              padding: 5,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: fonts.primary[400],
              }}>
              {item.disc_barang}
            </Text>
          </View>
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
                flex: 1,
                marginTop: 10,
                // backgroundColor: 'red',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                type="font-awesome"
                name="map-marker"
                color="green"
                size={12}
              />
              <Text
                style={{
                  fontFamily: 'Nunito-Light',
                  fontSize: 12,
                  left: 5,
                  color: '#000',
                }}>
                {item.creator.alamat}
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
                ( {10} )
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
        }}>
        <Text>test</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
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
