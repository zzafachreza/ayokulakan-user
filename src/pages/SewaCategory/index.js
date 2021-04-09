import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {MyHeader} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {getData} from '../../utils/localStorage';

export default function SewaCategory({navigation}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://ayokulakan.com/v1/api/sewa').then((res) => {
      setLoading(false);
      console.log(res.data);
      setData(res.data);

      // console.log(tampungan2);
    });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const _renderItem = ({item, index}) => {
    // console.log(item.image);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SewaProduct', {
            id: item.id,
            nama: item.nama,
          })
        }
        keyExtractor={(item) => item.id}
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: colors.primary,
          elevation: 2,
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginVertical: 5,
          borderRadius: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={{uri: item.url}}
        />
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.primary[600],
            }}>
            {item.nama}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      {/* <MyHeader title="Kategori" tipe={false} /> */}

      <View>
        <FlatList data={data} renderItem={_renderItem} />
      </View>

      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            top: 0,
            opacity: 0.7,
            height: '100%',
          }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
