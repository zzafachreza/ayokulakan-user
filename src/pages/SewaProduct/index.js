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

export default function SewaProduct({route}) {
  const sewa = route.params;
  const getData = () => {
    axios
      .post('https://ayokulakan.com/v1/api/rental', {
        field: 'kategori_id',
        key: sewa.id,
      })
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const renderItem = ({item}) => (
    <TouchableOpacity
      //   onPress={() =>
      //     navigation.navigate('Product', {
      //       product: item,
      //     })
      //   }
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
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: item.url}}
        />

        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.title}>{item.harga_sewa}</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.subTitle}>{item.judul}</Text>
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

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
        }}>
        <FlatList
          //   horizontal
          numColumns={2}
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
    aspectRatio: 1,
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
