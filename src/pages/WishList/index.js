import React, {useEffect, useState, useCallback} from 'react';
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
import HTML from 'react-native-render-html';
import {fonts} from '../../utils';
import {Icon} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import {Alert} from 'react-native';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function WishList({navigation, route}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const [user, setUsers] = useState({});

  const isFocused = useIsFocused();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    if (isFocused) {
      getData('users').then((res) => {
        console.log(res);

        if (!res) {
          alert('Anda Harus Login Terlebih dahulu !');
          navigation.goBack();
        } else {
          setUsers(res);
          __getData(res.id);
        }
      });
    }
  }, [isFocused]);

  const __getData = (id) => {
    axios
      .get(
        'https://ayokulakan.com/api/like?user_id=' +
          id +
          '&includes=creator,form,form.attachments',
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  };

  const hapusFav = (id) => {
    console.log('https://ayokulakan.com/api/like/' + id);
    axios.delete('https://ayokulakan.com/api/like/' + id).then((res) => {
      console.log(res);
      __getData(user.id);
      showMessage({
        message: res.data.message,
        type: 'success',
      });
    });
  };

  const addToCart = (id) => {
    const kirimData = {
      user_id: user.id,
      id_barang: id,
      created_by: user.id,
      jumlah_barang: 1,
      form_id: id,
      form_type: 'img_barang',
    };

    try {
      axios
        .post('https://ayokulakan.com/api/favorit-barang', kirimData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res);
        });

      showMessage({
        type: 'success',
        message: 'berhasil ditambahkan ke keranjang',
      });
      navigation.navigate('Cart');
      // dispatch(setLoading(false));
    } catch (error) {
      alert('Anda Harus Login Terlebih Dahulu !');
      navigation.navigate('Account');
    }
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
          flex: 1,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#EEEEEE',
          backgroundColor: colors.white,
          marginVertical: 5,
          elevation: 1,
        }}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: uri}}
            style={{
              flex: 1,
              width: '100%',
              // resizeMode: 'contain',
              aspectRatio: 1,
            }}
          />
        </View>
        <View style={{flex: 2, padding: 10}}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 20,
              color: colors.secondary,
            }}>
            Rp. {new Intl.NumberFormat().format(item.form.harga_barang)}
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[400],
              color: colors.black,
            }}>
            {item.form.nama_barang}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => hapusFav(item.id)}
              style={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: colors.secondary,
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon type="ionicon" name="trash" color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                addToCart(item.id);
              }}
              style={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: colors.primary,
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon type="ionicon" name="cart" color={colors.white} />
            </TouchableOpacity>
          </View>
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
