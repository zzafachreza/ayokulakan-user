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
  Picker,
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

export default function Checkout({navigation, route}) {
  const [data, setData] = useState([]);
  const [kurir, setKurir] = useState('');
  const dataKurir = [
    {
      code: '',
      nama: '',
    },
    {
      code: 'jne',
      nama: 'JNE',
    },
    {
      code: 'sicepat',
      nama: 'SICEPAT',
    },
    {
      code: 'wahana',
      nama: 'WAHANA',
    },
    {
      code: 'ninja',
      nama: 'NINJA',
    },
    {
      code: 'pos',
      nama: 'Pos Indonesia',
    },
    {
      code: 'tiki',
      nama: 'TIKI',
    },
    {
      code: 'pandu',
      nama: 'Pandu Logistic',
    },
    {
      code: 'pahala',
      nama: 'Pahala',
    },
    {
      code: 'rex',
      nama: 'REX',
    },
  ];
  const [cartLocal, setCartLocal] = useState(0);
  const UsersGlobal = useSelector((state) => state.reducerUsers);
  const dataGlobal = useSelector((state) => state.reducerTools);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const [dataTmp, setDataTmp] = useState([]);
  useEffect(() => {
    setData(route.params.cart);
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

  var sub = 0;
  data.map((item) => {
    sub += item.form.harga_barang * item.jumlah_barang;

    console.log(sub);
  });

  const _renderItem = ({item, index}) => {
    // console.log(item.image);
    let uri = '';

    if (item.form.attachments[0]) {
      uri = 'https://ayokulakan.com/storage/' + item.form.attachments[0].url;
    } else {
      console.log(item.form.attachments[0]);
      uri = 'https://ayokulakan.com/img/no-images.png';
    }

    let jumlah = item.jumlah_barang;

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
              style={
                {
                  // backgroundColor: 'red',
                }
              }>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    fontFamil: fonts.secondary[600],
                    color: colors.primary,
                  }}>
                  Pengiriman
                </Text>
              </View>
              <Picker
                selectedValue={kurir}
                onValueChange={(val) => {
                  setKurir(val);
                  console.log('pembeli', item.creator.id_kecamatan);
                  console.log('penjual', item.form.lapak.id_kecamatan);

                  let url =
                    'https://ayokulakan.com/api/rajaongkir/cost?origin=' +
                    item.form.lapak.id_kecamatan +
                    '&originType=subdistrict&destination=' +
                    item.creator.id_kecamatan +
                    '&destinationType=subdistrict&weight=1000&courier=' +
                    val;
                  console.log('url', url);
                  axios.get(url).then((res) => {
                    console.log(
                      'hasul get kurir',
                      res.data.result.rajaongkir.results[0].costs,
                    );
                    setDataTmp(res.data.result.rajaongkir.results[0].costs);
                  });
                }}>
                {dataKurir.map((item) => {
                  return <Picker.Item label={item.nama} value={item.code} />;
                })}
              </Picker>

              <View>
                {dataTmp.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        sub += item.cost[0].value;
                        // alert(item.cost[0].value);
                      }}
                      style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: colors.primary,
                        padding: 10,
                        marginVertical: 2,
                      }}>
                      <Text
                        style={{
                          fontFamily: fonts.secondary[600],
                        }}>
                        {item.service} ( {item.description} )
                      </Text>
                      <Text
                        style={{
                          fontFamily: fonts.secondary[600],
                          color: colors.secondary,
                        }}>
                        {new Intl.NumberFormat().format(item.cost[0].value)}
                      </Text>
                      <Text
                        style={{
                          fontFamily: fonts.secondary[400],
                          color: colors.primary,
                        }}>
                        {item.cost[0].etd} Hari
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
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
            Rp. {new Intl.NumberFormat().format(sub)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Checkout', {
              cart: data,
              sub: sub,
            });
          }}
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
