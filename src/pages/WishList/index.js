import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../utils/localStorage';
import axios from 'axios';
import {colors} from '../../utils/colors';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {MyButton} from '../../components';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers} from '../../redux';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function WishList({navigation, route}) {
  getData('users').then((res) => {
    console.log(res);

    if (!res) {
      alert('Anda Harus Login Terlebih dahulu !');
      navigation.goBack();
    } else {
      const UsersGlobal = useSelector((state) => state.reducerUsers);
      axios
        .get(
          'https://ayokulakan.com/api/like?user_id=' +
            UsersGlobal.data.id +
            '&includes=creator,form,form.attachments',
        )
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        });
    }
  });

  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios
      .get(
        'https://ayokulakan.com/api/like?user_id=' +
          UsersGlobal.data.id +
          '&includes=creator,form,form.attachments',
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {}, []);

  const hapusFav = (id) => {
    console.log('https://ayokulakan.com/api/like/' + id);
    axios.delete('https://ayokulakan.com/api/like/' + id).then((res) => {
      console.log(res);
      getDataFav();
      showMessage({
        message: res.data.message,
        type: 'success',
      });
    });
  };

  const renderItem = ({item, index}) => {
    let uri = '';

    if (item.form.attachments[0]) {
      console.log(item.form.attachments[0].url);
      uri = 'https://ayokulakan.com/storage/' + item.form.attachments[0].url;
    } else {
      console.log(item.form.attachments[0]);
      uri = 'https://ayokulakan.com/img/no-images.png';
    }
    return (
      <View
        style={{
          // padding: 10,
          margin: 10,
          backgroundColor: 'white',
          elevation: 2,
          overflow: 'hidden',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <View>
            <Image
              source={{uri: uri}}
              style={{
                flex: 1,
                width: '100%',
                resizeMode: 'contain',
                aspectRatio: 1,
              }}
            />
          </View>
          <View
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Montserrat-Medium',
                color: 'red',
              }}>
              Rp. {new Intl.NumberFormat().format(item.form.harga_barang)}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Medium',
                color: 'grey',
              }}>
              {item.form.nama_barang}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Montserrat-Medium',
                color: 'black',
              }}>
              {item.form.deskripsi_barang}
            </Text>
          </View>
          <MyButton
            onPress={() => hapusFav(item.id)}
            title="Hapus Dari Favorit"
            warna={colors.danger}
            Icons="trash"
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#16A858']}
        />
      }
      style={{
        padding: 10,
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
