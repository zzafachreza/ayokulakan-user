import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Share,
  View,
  Dimensions,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  Home,
  Account,
  Category,
  Cart,
  WishList,
  Notifikasi,
  Location,
  Promo,
  Search,
  Product,
  Masjid,
  Jadwal,
  Kiblat,
  Lapak,
  SubCategory,
  CategoryProduct,
  Pesan,
  Sewa,
  SewaCategory,
  SewaProduct,
  EditProfile,
  Pembayaran,
  SewaDetail,
  Berita,
  BeritaTerbaru,
  Zakat,
  Hijrah,
  Quran,
  QuranDetail,
  Pulsa,
  PulsaDetail,
  Hadits,
  HajiTentang,
  HajiDaftar,
  HajiGallery,
  Tentang,
  TentangAyo,
  TentangKurir,
  TentangKaki,
  TentangAturan,
  TentangPerjanjian,
  TentangSyarat,
  TentangKebijakan,
  TentangKontak,
  EditTambahAlamat,
  PpobData,
  PpobDataDetail,
  PpobGame,
  PpobGameDetail,
  PpobPlnToken,
  PpobPlnTokenDetail,
  PpobPlnMeteran,
  PpobPlnMeteranDetail,
  Fitur,
  KakiLima,
  Kurir,
  Kurs,
  Cuaca,
  PpobPdam,
  PpobTv,
  PpobInternet,
  PpobTelepon,
  PpobBpjs,
  CategoryProductUtama,
  PulsaPayment,
  PpobDataPayment,
  PpobBpjsDetail,
  PpobTvDetail,
  Checkout,
  Travel,
  TravelDetail,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {colors} from '../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {fonts} from '../utils/fonts';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Alamat from '../pages/Alamat';

const TabTop = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyTabs" component={MyTabs} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Notifikasi" component={Notifikasi} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const MyTabs = () => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);

  const tabBarOptions = {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    style: {backgroundColor: colors.primary},
    indicatorStyle: {backgroundColor: colors.secondary},
    pressOpacity: 1,
  };

  return (
    <TabTop.Navigator tabBarOptions={tabBarOptions}>
      <TabTop.Screen
        name="Category"
        component={Category}
        options={{
          title: 'BELI',
        }}
      />
      <TabTop.Screen name="Sewa" component={Sewa} />
    </TabTop.Navigator>
  );
};

export default function Router() {
  const dataGlobal = useSelector((state) => state.reducerTools);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Masjid"
        component={Masjid}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Berita"
        component={Berita}
        options={{
          headerTitle: 'Berita',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Kurs"
        component={Kurs}
        options={{
          headerTitle: 'Konversi Mata Uang',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Cuaca"
        component={Cuaca}
        options={{
          headerTitle: 'Informasi Cuaca Terkini',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Hijrah"
        component={Hijrah}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Quran"
        component={Quran}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HajiTentang"
        component={HajiTentang}
        options={{
          headerTitle: 'TENTANG HAJI & UMROH',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="HajiDaftar"
        component={HajiDaftar}
        options={{
          headerTitle: 'DAFTAR HAJI & UMROH',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="HajiGallery"
        component={HajiGallery}
        options={{
          headerTitle: 'DOKUMENTASI KEGIATAN',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="QuranDetail"
        component={QuranDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BeritaTerbaru"
        component={BeritaTerbaru}
        options={{
          headerTitle: 'Berita',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Kurir"
        component={Kurir}
        options={{
          headerTitle: 'Peta Kurir',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Zakat"
        component={Zakat}
        options={{
          headerTitle: 'Zakat',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'red',
            elevation: 0, // remove shadow on Android
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: 'Daftar Baru',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="SewaCategory"
        component={SewaCategory}
        options={{
          headerTitle: 'SEWA',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="SewaProduct"
        component={SewaProduct}
        options={{
          headerTitle: 'SEWA',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="Pulsa"
        component={Pulsa}
        options={({route, navigation}) => ({
          title: 'PULSA',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PulsaPayment"
        component={PulsaPayment}
        options={({route, navigation}) => ({
          title: 'PULSA PAYMENT',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobDataPayment"
        component={PpobDataPayment}
        options={({route, navigation}) => ({
          title: 'DATA PAYMENT',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobTvDetail"
        component={PpobTvDetail}
        options={({route, navigation}) => ({
          title: 'TV KABEL',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobPdam"
        component={PpobPdam}
        options={({route, navigation}) => ({
          title: 'PDAM',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobTv"
        component={PpobTv}
        options={({route, navigation}) => ({
          title: 'TV BERLANGGANAN',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobInternet"
        component={PpobInternet}
        options={({route, navigation}) => ({
          title: 'INTERNET',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />
      <Stack.Screen
        name="PpobTelepon"
        component={PpobTelepon}
        options={({route, navigation}) => ({
          title: 'TELEPON RUMAH',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PulsaDetail"
        component={PulsaDetail}
        options={({route, navigation}) => ({
          title: 'PULSA DETAIL',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobDataDetail"
        component={PpobDataDetail}
        options={({route, navigation}) => ({
          title: 'DATA DETAIL',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobData"
        component={PpobData}
        options={({route, navigation}) => ({
          title: 'PAKET DATA',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobGame"
        component={PpobGame}
        options={({route, navigation}) => ({
          title: 'GAME VOUCHER',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobBpjs"
        component={PpobBpjs}
        options={({route, navigation}) => ({
          title: 'BPJS KESEHATAN',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobGameDetail"
        component={PpobGameDetail}
        options={({route, navigation}) => ({
          title: 'GAME VOUCHER',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobPlnToken"
        component={PpobPlnToken}
        options={({route, navigation}) => ({
          title: 'PLN PRABAYAR',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobPlnTokenDetail"
        component={PpobPlnTokenDetail}
        options={({route, navigation}) => ({
          title: 'PLN PRABAYAR',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobPlnMeteran"
        component={PpobPlnMeteran}
        options={({route, navigation}) => ({
          title: 'PLN PASCABAYAR',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobPlnMeteranDetail"
        component={PpobPlnMeteranDetail}
        options={({route, navigation}) => ({
          title: 'PLN PASCABAYAR',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="PpobBpjsDetail"
        component={PpobBpjsDetail}
        options={({route, navigation}) => ({
          title: 'BPJS',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="Hadits"
        component={Hadits}
        options={({route, navigation}) => ({
          title: 'HADITS',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="SubCategory"
        component={SubCategory}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="Kiblat"
        component={Kiblat}
        options={{
          headerTitle: 'Arah Kiblat',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Jadwal"
        component={Jadwal}
        options={{
          headerTitle: 'Jadwal Sholat',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        // options={{
        //   headerTitle: 'Search',

        // }}
        options={({route, navigation}) => ({
          title: 'Keranjang',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={{
                  position: 'relative',
                  padding: 5,
                  marginHorizontal: 5,
                }}>
                <Icon name="cart" type="ionicon" color="white" size={20} />
                {dataGlobal.cart > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: colors.secondary,
                      width: 15,
                      height: 15,
                      // zIndex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 50,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: fonts.primary[400],
                        textAlign: 'center',
                        fontSize: 10,
                      }}>
                      {dataGlobal.cart}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          headerTitle: 'Favorit',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Pesan"
        component={Pesan}
        options={{
          headerTitle: 'Pesan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Fitur"
        component={Fitur}
        options={{
          headerTitle: 'Fitur Ayokulakan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />
      <Stack.Screen
        name="KakiLima"
        component={KakiLima}
        options={{
          headerTitle: 'Kaki Lima Ayokulakan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Tentang"
        component={Tentang}
        options={{
          headerTitle: 'Tentang Ayokulakan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangAyo"
        component={TentangAyo}
        options={{
          headerTitle: 'Tentang Ayokulakan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangKurir"
        component={TentangKurir}
        options={{
          headerTitle: 'Tentang Kurir',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangKaki"
        component={TentangKaki}
        options={{
          headerTitle: 'Tentang Kaki Lima',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangAturan"
        component={TentangAturan}
        options={{
          headerTitle: 'Tentang Aturan Pengguna',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangPerjanjian"
        component={TentangPerjanjian}
        options={{
          headerTitle: 'Perjanjian',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangSyarat"
        component={TentangSyarat}
        options={{
          headerTitle: 'Syarat dan Ketentuan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerTitle: 'CHECKOUT',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Travel"
        component={Travel}
        options={{
          headerTitle: 'Travel',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TravelDetail"
        component={TravelDetail}
        options={{
          headerTitle: 'Travel Detail',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangKebijakan"
        component={TentangKebijakan}
        options={{
          headerTitle: 'Kebijakan Privasi',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="TentangKontak"
        component={TentangKontak}
        options={{
          headerTitle: 'Kontak Kami',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="EditTambahAlamat"
        component={EditTambahAlamat}
        options={{
          headerTitle: 'Tambah Alamat Lain',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Alamat"
        component={Alamat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CategoryProduct"
        component={CategoryProduct}
        // options={{
        //   headerTitle: 'Search',

        // }}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="CategoryProductUtama"
        component={CategoryProductUtama}
        // options={{
        //   headerTitle: 'Search',

        // }}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="Product"
        component={Product}
        // options={{
        //   headerTitle: 'Search',

        // }}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('WishList')}
                style={{
                  position: 'relative',
                  padding: 5,
                  marginHorizontal: 5,
                }}>
                <Icon name="heart" type="ionicon" color="white" size={20} />
              </TouchableOpacity>

              {/* <TouchableOpacity
                onPress={onShare}
                style={{
                  position: 'relative',
                  padding: 5,
                  marginHorizontal: 5,
                }}>
                <Icon
                  name="share-social"
                  type="ionicon"
                  color="white"
                  size={20}
                />
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={{
                  position: 'relative',
                  padding: 5,
                  marginHorizontal: 5,
                }}>
                <Icon name="cart" type="ionicon" color="white" size={20} />
                {dataGlobal.cart > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: colors.secondary,
                      width: 15,
                      height: 15,
                      // zIndex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 50,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: fonts.primary[400],
                        textAlign: 'center',
                        fontSize: 10,
                      }}>
                      {dataGlobal.cart}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      {/* sewa detail */}

      <Stack.Screen
        name="SewaDetail"
        component={SewaDetail}
        options={({route, navigation}) => ({
          title: 'SewaDetail',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
        })}
      />

      <Stack.Screen
        name="Lapak"
        component={Lapak}
        // options={{
        //   headerTitle: 'Search',

        // }}
        options={({route, navigation}) => ({
          headerTitle: 'Detail Lapak',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#16A858',
            elevation: 0, // remove shadow on Android
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                // justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.replace('MainApp')}
                style={{
                  // marginRight: 100,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: 'yellow',
                }}>
                <Icon
                  name="share-social-outline"
                  type="ionicon"
                  color="white"
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.replace('MainApp')}
                style={{
                  // marginRight: 100,

                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: 'yellow',
                }}>
                <Icon name="cart" type="ionicon" color="white" size={20} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      {/* untuk main App */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
