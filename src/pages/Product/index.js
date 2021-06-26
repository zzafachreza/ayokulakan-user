import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Share,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers, setCart} from '../../redux';
import {showMessage} from 'react-native-flash-message';
import {getData, storeData} from '../../utils/localStorage';
import axios from 'axios';
import {colors, fonts} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {MyInput} from '../../components';
import HTML from 'react-native-render-html';
import RBSheet from 'react-native-raw-bottom-sheet';

const ListProduct = ({icon, title, desc}) => {
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

  const renderItem2 = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Product', {
          product: item,
        })
      }
      activeOpacity={1.0}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.detailsContainer}>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.title}>{item.harga}</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={styles.subTitle}>{item.title}</Text>
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
            {item.lokasi}
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
            <Bintang nilai={item.nilai} />
          </View>
          <Text
            style={{
              fontFamily: 'Montserrat-Light',
              fontSize: 12,
              left: 5,
              color: '#000',
            }}>
            ( {item.jml} )
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
      }}>
      <View style={{backgroundColor: '#FFF', padding: 10}}>
        <Icon type="ionicon" name={icon} color="gray" size={20} />
      </View>
      <View
        style={{
          flex: 2,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#EBE9E9',
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: 'gray',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#EBE9E9',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#16A858',
            textAlign: 'right',
            // fontWeight: 'bold',
            fontSize: 18,
            fontFamily: 'Montserrat-Regular',
          }}>
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default function Produk({navigation, route}) {
  const dataGlobal = useSelector((state) => state.reducerTools);
  const UsersGlobal = useSelector((state) => state.reducerUsers);

  const [kirim, setKirim] = useState({
    user_id: UsersGlobal.data.id,
    id_barang: 0,
    created_by: UsersGlobal.data.id,
    jumlah_barang: 1,
    form_id: 0,
    form_type: 'img_barang',
  });

  const [harga, setHarga] = useState(0);

  const [lapak, setLapak] = useState({});

  const dispatch = useDispatch();
  const product = route.params.product;

  console.log('userGlobal', UsersGlobal);

  let uri = '';

  if (product.attachments[0]) {
    uri = 'https://ayokulakan.com/storage/' + product.attachments[0].url;
  } else {
    uri = 'https://ayokulakan.com/img/no-images.png';
  }

  console.log(product);
  navigation.setOptions({title: 'Detail Produk'});

  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);
      setUser(res);
      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigation('Account');
      }
    });

    axios
      .get(
        'https://ayokulakan.com/api/lapak?id=' +
          product.id_trans_lapak +
          '&includes=creator,attachments,negara,provinsi,kota,kecamatan',
      )
      .then((res) => {
        console.log(res.data.data[0]);

        if (res.data.total > 0) {
          setLapak({
            ...lapak,
            nama_lapak: res.data.data[0].nama_lapak,
            deskripsi_lapak: res.data.data[0].deskripsi_lapak,
            alamat:
              res.data.data[0].kota.kota +
              ', ' +
              res.data.data[0].provinsi.provinsi,
          });

          setHarga(product.harga_barang);
          setKirim({
            ...kirim,
            id_barang: product.id,
            form_id: product.id,
          });
        } else {
          setLapak({
            ...lapak,
            nama_lapak: 'Tidak ada lapak',
            deskripsi_lapak: '-',
            alamat: 'alamat',
          });
        }
      });
  }, []);
  // add to fav

  const addFav = (id) => {
    // alert(id + 'dan' + UsersGlobal.data.id);
    axios
      .post('https://ayokulakan.com/api/like', {
        user_id: UsersGlobal.data.id,
        id_barang: id,
        created_by: UsersGlobal.data.id,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          showMessage({
            message: res.data.message,
            type: 'success',
          });
        } else {
          showMessage({
            message: res.data.message,
            type: 'danger',
          });
        }
      });
  };

  //add to cart

  const addToCart = () => {
    // console.log(user.id);

    refRBSheet.current.close();

    if (dataGlobal.cart > 0) {
      dispatch(setCart(dataGlobal.cart + 1));
    } else {
      dispatch(setCart(1));
    }

    console.log('add cart', dataGlobal.cart);

    try {
      console.log(kirim);
      axios
        .post('https://ayokulakan.com/api/favorit-barang', kirim, {
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
      // dispatch(setLoading(false));
    } catch (error) {
      alert('Anda Harus Login Terlebih Dahulu !');
      navigation.navigate('Account');
    }
  };

  const onShare = async (desc) => {
    try {
      const result = await Share.share({
        message: desc,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const refRBSheet = useRef();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <View
              style={{
                padding: 10,
              }}>
              {/* <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                  color: '#000',
                }}>
                {product.nama_barang}
              </Text> */}
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 14,
                  color: colors.primary,
                }}>
                Masukan Jumlah
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (kirim.jumlah_barang == 1) {
                      alert('pembelian minimal 1');
                    } else {
                      setKirim({
                        ...kirim,
                        jumlah_barang: kirim.jumlah_barang - 1,
                      });
                      setHarga(
                        product.harga_barang * (kirim.jumlah_barang - 1),
                      );
                    }
                  }}
                  style={{
                    padding: 10,
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                    marginHorizontal: 20,
                  }}>
                  <Icon type="ionicon" name="remove" color={colors.white} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 50,
                    color: colors.black,
                  }}>
                  {kirim.jumlah_barang}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setKirim({
                      ...kirim,
                      jumlah_barang: kirim.jumlah_barang + 1,
                    });

                    setHarga(product.harga_barang * (kirim.jumlah_barang + 1));
                  }}
                  style={{
                    padding: 10,
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                    marginHorizontal: 20,
                  }}>
                  <Icon type="ionicon" name="add" color={colors.white} />
                </TouchableOpacity>
              </View>
              {/* <MyInput label="masukan deskripsi" /> */}

              <TouchableOpacity
                onPress={() => {
                  // alert(product.id);
                  addToCart();
                  // dispatch(setCart(0));
                }}
                activeOpacity={1}
                style={{
                  backgroundColor: '#16A858',
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    // left: 20,
                    color: '#FFF',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Tambahkan - Rp. {new Intl.NumberFormat().format(harga)}
                </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          <View>
            <View>
              <FastImage
                source={{uri: uri}}
                style={{
                  flex: 1,
                  width: '100%',
                  resizeMode: 'cover',
                  aspectRatio: 1,
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#FFF',
                marginTop: -30,
                padding: 10,
                shadowColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: -10,
                  height: 2,
                },
                shadowOpacity: 0.44,
                shadowRadius: 5.32,
                elevation: 1,
                margin: 20,
                // height: 600,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    flex: 1,
                    marginBottom: 7,
                    fontFamily: 'Montserrat-ExtraBold',
                    fontSize: 20,
                    color: '#F8781D',
                  }}>
                  Rp. {new Intl.NumberFormat().format(product.harga_barang)}
                  {/* {token} */}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    onShare('https://ayokulakan.com/sc/barang/' + product.id)
                  }
                  style={{
                    // position: 'relative',
                    padding: 5,
                    marginHorizontal: 5,
                  }}>
                  <Icon
                    name="share-social"
                    type="ionicon"
                    color={colors.primary}
                    size={20}
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-ExtraBold',
                  fontSize: 20,
                  color: '#000',
                }}>
                {product.nama_barang}
              </Text>
              <Text
                style={{
                  marginBottom: 7,
                  fontFamily: 'Montserrat-Light',
                  fontSize: 20,
                  color: '#000',
                }}>
                <HTML source={{html: product.deskripsi_barang}} />
              </Text>

              <TouchableOpacity
                style={{
                  // flex: 1,
                  // width: 250,
                  height: 100,
                  backgroundColor: '#FFF',
                  borderRadius: 10,
                  borderColor: '#16A858',
                  borderWidth: 1,
                  padding: 5,
                  flexDirection: 'row',
                  margin: 5,

                  // elevation: 2,
                }}>
                <View
                  style={{
                    // flex: 1,
                    justifyContent: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Image
                    // resizeMode="contain"
                    source={require('../../assets/icon/toko.png')}
                    style={{
                      width: 215 / 3,
                      height: 192 / 3,
                      // aspectRatio: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    // justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingLeft: 5,
                    // padding: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      color: '#16A858',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    {lapak.nama_lapak}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Light',
                      color: '#000',
                      fontSize: 11,
                      // textAlign: 'center',
                    }}>
                    {lapak.deskripsi_lapak}
                  </Text>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      type="font-awesome"
                      name="map-marker"
                      color="#F8781D"
                      size={12}
                    />
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                        color: '#F8781D',
                        // marginTop: 10,ma
                        left: 5,
                        fontSize: 12,
                        // textAlign: 'center',
                      }}>
                      {lapak.alamat}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#FFF',
                marginTop: -10,
                margin: 20,
                // height: 600,
              }}>
              <View
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  backgroundColor: '#16A858',
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#FFF',
                    fontSize: 20,
                    padding: 10,
                  }}>
                  Informasi Produk
                </Text>
              </View>
              <View
                style={{
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: '#FFF',
                  elevation: 1,
                  paddingBottom: 10,
                }}>
                <ListProduct
                  icon="cube"
                  title="kondisi Barang"
                  desc={product.kondisi_barang}
                />
                <ListProduct
                  icon="barbell-outline"
                  title="Berat"
                  desc={product.berat_barang + ' gram'}
                />
                <ListProduct
                  icon="file-tray-full-outline"
                  title="Stok"
                  desc={product.stock_barang}
                />
                {/* 

                <ListProduct
                  icon="grid-outline"
                  title="Kategori"
                  desc={product.kat_nama}
                />
                <ListProduct
                  icon="apps-outline"
                  title="Sub Kategori"
                  desc={product.sub_nama}
                />
               
               */}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          padding: 5,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => addFav(product.id)}
          style={{
            flex: 1,
          }}>
          <Icon
            name="heart"
            type="ionicon"
            size={40}
            color={colors.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // alert(product.id);
            // addToCart(product.id);
            // dispatch(setCart(0));
            refRBSheet.current.open();
          }}
          activeOpacity={1}
          style={{
            flex: 2,
            backgroundColor: '#16A858',
            padding: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              // left: 20,
              color: '#FFF',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Beli
          </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{padding: 10}}> */}
      {/* <TouchableOpacity
          onPress={() =>
            addToCart(product.id_trans, product.harga, product.nama)
          }
          style={{
            //   flex: 1,

            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#F8781D',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Icon
            type="material-community"
            name="cart-plus"
            color="#FFF"
            size={20}
          />
          <Text
            style={{
              fontSize: 20,
              left: 20,
              color: '#FFF',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Masukan Keranjang Keranjang
          </Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
