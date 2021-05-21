import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  RefreshControl,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  FlatList,
  TouchableWithoutFeedbackComponent,
} from 'react-native';
import {Icon, ListItem, Button} from 'react-native-elements';
import {storeData, getData} from '../../utils/localStorage';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CountDown from 'react-native-countdown-component';
import Modal from 'react-native-modal';
import {SliderBox} from 'react-native-image-slider-box';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {fonts} from '../../utils/fonts';
import {
  MyHeader,
  MyCarouser,
  MyCarouser2,
  MyLapak,
  MyProductDiscount,
} from '../../components';
import ImageViewer from 'react-native-image-zoom-viewer';
import Draggable from 'react-native-draggable';
import {colors} from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers} from '../../redux';
import reducer from '../../redux/reducer';
import {Category} from '..';
import MyProductMew from '../../components/MyProductNew';
import MyRentalNew from '../../components/MyRentalNew';
import MyPilihan from '../../components/MyPilihan';
import MyPembayaranOnline from '../../components/MyPembayaranOnline';
import MyKategoriUtama from '../../components/MyKategoriUtama';
import MyHijrah from '../../components/MyHijrah';
import MyOfficialStore from '../../components/MyOfficialStore';
import MyPertanian from '../../components/MyPertanian';
import MyPerikanan from '../../components/MyPerikanan';
import MyUkm from '../../components/MyUkm';
import MyPerkebunan from '../../components/MyPerkebunan';

const image = [
  {
    url:
      'https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg',
  },
];

const dataBarang2 = [
  {
    id: 1,
    title: 'Gerobah Kuliner',
    image:
      'https://ayokulakan.com/storage/img_rental/pD9zff0e7CrU0m2ZY7sKORZ08LmPygbDUq1MyI6t.jpeg',
    harga: 'Rp. 500.000',
    nilai: 4,
    jml: 10,
    lokasi: 'Jawa Barat',
  },
  {
    id: 2,
    title: 'Gerobak besi galvalum',
    image:
      'https://ayokulakan.com/storage/img_rental/6cmXsySgNMBjb9W63wkAhi6w8oIUBPyBFxMSLiB6.jpeg',
    harga: 'Rp. 1.000.000',
    lokasi: 'Jawa Timur',
    nilai: 1,
    jml: 22,
  },
  {
    id: 3,
    title: 'Alat Peras Susu Sapi',
    image:
      'https://ayokulakan.com/storage/img_rental/L8QaoZXL4Ed9vJSKy0Rjp3akiWopRblyPWcRFATv.jpeg',
    harga: 'Rp. 250.000',
    lokasi: 'Jakarta barat',
    nilai: 3,
    jml: 1,
  },
  {
    id: 4,
    title: 'Canon 100D Touch Screen',
    image:
      'https://ayokulakan.com/storage/img_rental/5xMQToJfLnOjjO4TuWdvR6FsWJ3XzUYE5oR609kV.jpeg',
    harga: 'Rp. 70.000',
    lokasi: 'Jawa Timur',
    nilai: 5,
    jml: 20,
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const CardList = ({title, image, harga, lokasi, jml}) => {
  return (
    <TouchableWithoutFeedback
      style={{
        width: 130,
        margin: 5,
        height: 220,
        backgroundColor: '#FFF',
        borderRadius: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C7C7C7',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: -10,
          height: 2,
        },
        shadowOpacity: 0.44,
        shadowRadius: 5.32,

        elevation: 5,
      }}>
      <View
        style={{
          flex: 2,
        }}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: '100%',
            height: 100,
            aspectRatio: 1,
          }}
          source={{
            uri: image,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          padding: 5,
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontFamily: 'Nunito-ExtraBold',
              fontSize: 16,
              color: '#F8781D',
            }}>
            {harga}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito-SemiBold',
              fontSize: 12,
            }}>
            {title}
          </Text>
        </View>

        <View
          style={{
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
            {lokasi}
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
            <Icon
              type="font-awesome"
              name="star"
              color="#F8B459"
              style={{marginHorizontal: 2}}
              size={12}
            />
            <Icon
              type="font-awesome"
              name="star"
              color="#F8B459"
              style={{marginHorizontal: 2}}
              size={12}
            />
            <Icon
              type="font-awesome"
              name="star"
              color="#F8B459"
              style={{marginHorizontal: 2}}
              size={12}
            />
            <Icon
              type="font-awesome"
              name="star"
              color="#F8B459"
              style={{marginHorizontal: 2}}
              size={12}
            />
            <Icon type="font-awesome" name="star" color="#F8B459" size={12} />
          </View>
          <Text
            style={{
              fontFamily: 'Montserrat-Light',
              fontSize: 12,
              left: 5,
              color: '#000',
            }}>
            ({jml})
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function Home({navigation, route}) {
  // navigation.setParams({headerTitle: 'Home'});
  // const UsersGlobal = useSelector((state) => state.reducerUsers);
  const UsersGlobal = useSelector((state) => state.reducerUsers);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [data2, setData2] = useState([
    'https://ayokulakan.com/storage/img_gallery_haji/6xLPEjR5xWcBYGwI17gJcba1oLqOpz7mexRmsI2r.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/wiakEu4gARA73qIMhR4qc2Bsdy4vbCjh6kBWAiHm.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/PEjapWps6uolZnweTBd9bmipxzPyjstcZASJBsOO.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/Eahac4v6LlIJ9nvBfy294Kdyq882laOVQze3DHA0.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/NtGxGCBeN9XmqPVkTgslTtdkfa1ltNtkMKjg7mEf.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/Sb16wO20PptkazCzcTnSDFmWEbKqiQ1637qhRGoR.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/KSBtoUkRJIh45FawBIE5t17syPrK9zodsqdw3mJx.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/Wz8GlUJzMWjXmos8N7LQ8ERzgDy25KmqyYkSSzDM.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/t82t8RlIqLR7T1t6fOLq4zSyUXrb8DU34abNv2dP.jpeg',
    'https://ayokulakan.com/storage/img_gallery_haji/tIthKTogwRnp0i1M01JfogXrRK7yKqjqViVJfCJo.jpeg',
  ]);

  const dataGlobal = useSelector((state) => state.reducerTools);
  useEffect(() => {
    console.log('home', dataGlobal);
  }, []);

  const _renderItem2 = ({item, index}) => {
    return (
      <ImageBackground
        key={item.id}
        source={{uri: item.image}}
        style={{
          height: Math.round((windowWidth * 9) / 16),
          borderRadius: 10,
        }}>
        <View
          style={{
            backgroundColor: '#F8781D',
            position: 'absolute',
            // maxWidth: 200,
            bottom: 0,
            right: 0,
            borderTopLeftRadius: 20,
            // borderBottomRightRadius: 20,
            // opacity: 0.9,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Courgette-Regular',
              color: '#FFF',
            }}>
            {item.desc}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <>
      <Draggable
        isCircle
        x={windowWidth - 80}
        y={windowWidth}
        renderSize={100}
        renderColor={colors.primary}
        shouldReverse
        // onReverse={() => alert('balik')}
        onShortPressRelease={() => alert('touched!!')}>
        <View
          style={{
            // top: -20,
            width: 80,
            height: 80,
            elevation: 0,
            borderWidth: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FastImage
            style={{
              height: 80,
              // position: 'absolute',
              width: 80,
              // flex: 1,
            }}
            source={require('../../assets/icon/hadiah.gif')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </Draggable>

      <SafeAreaView
        style={{
          paddingBottom: 50,
        }}>
        <View
          style={{
            backgroundColor: '#16A858',
            height: 50,
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flex: 2,
            }}>
            <Image
              source={require('../../assets/huruf.png')}
              style={{width: 120, height: 25}}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              style={{
                position: 'relative',
                padding: 5,
              }}
              onPress={() => navigation.navigate('WishList')}>
              <Icon type="ionicon" name="heart" color="#FFF" size={23} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: 'relative',
                padding: 5,
              }}
              onPress={() => navigation.navigate('Pesan')}>
              <Icon type="ionicon" name="mail" color="#FFF" size={23} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: 'relative',
                padding: 5,
              }}
              onPress={() => navigation.navigate('Cart')}>
              <Icon type="ionicon" name="cart" color="#FFF" size={23} />

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
        </View>
        <ScrollView style={styles.page}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#16A858',
              padding: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              // alignItems: 'center',
            }}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Search')}>
              <View
                style={{
                  flex: 1,
                  paddingLeft: 20,
                  borderWidth: 1,
                  height: 45,
                  borderRadius: 10,
                  borderColor: '#FFF',
                  color: '#FFF',
                  flexDirection: 'row',
                  fontSize: 18,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Light',
                      fontSize: 18,
                      color: '#FFF',
                    }}>
                    Cari Produk...
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    paddingRight: 20,
                  }}>
                  <Icon
                    type="font-awesome"
                    name="search"
                    color="#FFF"
                    size={18}
                  />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>

          <MyCarouser />

          {/* Pembayaran Online  */}
          <MyPembayaranOnline />

          {/* kategori utama */}
          <MyKategoriUtama />
          {/* Menu Pilihan */}

          <MyPilihan />

          <MyCarouser2 />

          {/* kejar diskon */}
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: '#16A858',
            }}>
            <View
              style={{
                paddingHorizontal: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito-ExtraBold',
                    color: '#FFF',
                  }}>
                  SUPER DISCOUNT
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Nunito-Bold',
                    color: '#FFF',
                  }}>
                  Berakhir Dalam
                </Text>
              </View>
              <CountDown
                size={15}
                until={1000}
                // onFinish={() => alert('Finished')}
                digitStyle={{
                  backgroundColor: '#F8781D',
                }}
                digitTxtStyle={{
                  color: '#FFF',
                  fontFamily: 'Nunito-ExtraBold',
                }}
                timeLabelStyle={{
                  color: '#FFF',
                  fontFamily: 'Nunito-Bold',
                }}
                separatorStyle={{color: '#FFF'}}
                timeToShow={['H', 'M', 'S']}
                disableHoursLimit
                timeLabels={{
                  h: null,
                  m: null,
                  s: null,
                }}
                showSeparator
              />
            </View>

            <MyProductDiscount />

            {/* ayo hijarah */}
          </View>
          {/* ayo hijrah */}
          <MyHijrah />

          <View
            style={{
              backgroundColor: '#16A858',
              paddingBottom: 10,
            }}>
            <SliderBox
              ImageComponent={FastImage}
              images={data2}
              sliderBoxHeight={200}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFF"
              inactiveDotColor="#CDCDCD"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              paginationBoxStyle={{
                position: 'absolute',
                bottom: 0,
                padding: 0,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
              }}
              ImageComponentStyle={{
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                width: '95%',
                margin: 5,
              }}
              imageLoadingColor="#16A858"
            />
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: '#FFF',
                marginHorizontal: 10,
                alignItems: 'center',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: 'Courgette-Regular',
                  color: '#16A858',
                  paddingVertical: 5,
                }}>
                Gallery Sosial Keagamaan
              </Text>
            </View>
          </View>
          {/* Lapak terbaru */}
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: '#16A858',
                fontSize: 16,
              }}>
              Pilihan Lapak Terbaru
            </Text>
          </View>
          {/* lapak */}

          <MyLapak />

          {/* <View
            style={{
              padding: 10,
              backgroundColor: '#16A858',
              justifyContent: 'center',
              elevation: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon type="ionicon" name="cube-outline" color="#FFF" size={16} />
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  color: '#FFF',
                  left: 10,
                  fontSize: 16,
                }}>
                Koleksi Barang Terbaru
              </Text>
            </View>
          </View> */}

          {/* <MyProductMew />

          <MyRentalNew />

          <MyOfficialStore />

          <MyPertanian />
          <MyPerikanan />
          <MyUkm />
          <MyPerkebunan /> */}
        </ScrollView>
      </SafeAreaView>
    </>
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
