import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {MyHeader} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers, setCart} from '../../redux';
import {showMessage} from 'react-native-flash-message';
import {getData} from '../../utils';
import {Icon} from 'react-native-elements';
import 'intl';
import 'intl/locale-data/jsonp/en';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Cart({navigation}) {
  const [data, setData] = useState([]);
  const [cartLocal, setCartLocal] = useState(0);
  const UsersGlobal = useSelector((state) => state.reducerUsers);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData('users').then((res) => {
      console.log(res);
      setUser(res);
      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigation('Account');
      }
      getCart(res.id);
    });
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);
      setUser(res);
      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigation('Account');
      }
      getCart(res.id);
    });
  }, []);

  const updateCart = (id, id_barang, qty) => {
    const kirim = {
      user_id: user.id,
      id_barang: id_barang,
      created_by: user.id,
      jumlah_barang: qty,
    };
    console.log(kirim);
    console.log('https://ayokulakan.com/api/favorit-barang/' + id);
    axios
      .post('https://ayokulakan.com/api/favorit-barang/' + id, kirim, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
        getCart(user.id);
      });
  };

  const getTotal = () => {};

  const getCart = (id) => {
    // dispatch(setLoading(true));
    const urlCart = `https://ayokulakan.com/api/favorit-barang?includes=creator,form,form.attachments,form.lapak,form.lapak.kota,form.lapak.provinsi&user_id=${id}`;

    console.log('url cart', urlCart);
    axios.get(urlCart).then((res) => {
      console.log('data cart', res.data.data);
      setData(res.data.data);
      // dispatch(setLoading(false));
    });
  };

  const hapus = (id) => {
    console.log('haspu cart');
    dispatch(setCart(-1));
    axios
      .delete('https://ayokulakan.com/api/favorit-barang/' + id)
      .then((res) => {
        console.log(res);
        getCart(user.id);
      });
  };

  var subtotal = 0;

  const _renderItem = ({item, index}) => {
    // console.log(item.image);
    let uri = '';
    subtotal += item.jumlah_barang * item.harga_barang;

    if (item.form.attachments[0]) {
      uri = 'https://ayokulakan.com/storage/' + item.form.attachments[0].url;
    } else {
      console.log(item.form.attachments[0]);
      uri = 'https://ayokulakan.com/img/no-images.png';
    }

    let jumlah = item.jumlah_barang;
    subtotal = +jumlah * item.form.harga_barang;

    return (
      <View
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
        }}>
        {/* area lapak */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.secondary[600],
              }}>
              {item.form.lapak.nama_lapak}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: fonts.secondary[400],
              }}>
              {item.form.lapak.kota.kota}, {item.form.lapak.provinsi.provinsi}
            </Text>
          </View>
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.primary[800],
                color: colors.secondary,
              }}>
              {new Intl.NumberFormat().format(jumlah * item.form.harga_barang)}
            </Text>
          </View>
        </View>

        {/* area product */}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                aspectRatio: 1,
              }}
              source={{
                uri: uri,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.secondary[400],
              }}>
              {item.form.nama_barang}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.primary[600],
                color: colors.secondary,
              }}>
              {new Intl.NumberFormat().format(item.form.harga_barang)}
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: '30%',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  updateCart(item.id, item.id_barang, jumlah - 1);
                }}
                style={{
                  width: 30,
                  height: 30,
                  // borderWidth: 1,
                  backgroundColor: colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30 / 2,
                }}>
                <Icon
                  type="font-awesome"
                  name="minus"
                  color={colors.white}
                  size={14}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  margin: 5,
                  fontFamily: fonts.secondary[600],
                }}>
                {jumlah}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  updateCart(item.id, item.id_barang, jumlah + 1);
                }}
                style={{
                  width: 30,
                  height: 30,
                  // borderWidth: 1,
                  backgroundColor: colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30 / 2,
                }}>
                <Icon
                  type="font-awesome"
                  name="plus"
                  color={colors.white}
                  size={14}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => hapus(item.id)}
              style={{
                padding: 10,
              }}>
              <Icon type="font-awesome" name="trash" color="red" />
            </TouchableOpacity>
          </View>
        </View>
        {/* area qty */}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {/* <Text>{token}</Text> */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#16A858']}
          />
        }
        style={{
          flex: 1,
          // backgroundColor: 'red',
        }}>
        <FlatList data={data} renderItem={_renderItem} />
      </ScrollView>

      <View
        style={{
          // padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: fonts.secondary[600],
              left: 10,
            }}>
            Rp. {new Intl.NumberFormat().format(total)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.secondary,
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: fonts.secondary[600],
              color: 'white',
            }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
