import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const IconPemayaran = ({img, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // flex: 1,
        width: 80,
        height: 90,
        // backgroundColor: '#F8781D',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

        elevation: 2,
      }}>
      <View
        style={{
          flex: 2,
        }}>
        <Image
          resizeMode="contain"
          source={img}
          style={{width: 50, height: 50, aspectRatio: 1}}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            // color: '#F8781D',
            color: '#16A858',
            fontSize: 12,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MyPembayaranOnline() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#16A858',
        // backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name="card-outline" color="#FFF" size={16} />
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#FFF',
            left: 10,
            fontSize: 16,
          }}>
          Pembayaran Online
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: '#16A858',
          }}>
          <TouchableOpacity
            style={{
              // flex: 1,
              width: 80,
              height: 90,
              backgroundColor: '#FFF',
              borderRadius: 10,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,

              elevation: 2,
            }}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/icon/all.png')}
                style={{width: 40, height: 40, aspectRatio: 1}}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  color: '#16A858',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Lihat Semua
              </Text>
            </View>
          </TouchableOpacity>
          <IconPemayaran
            title="Pulsa"
            img={require('../../assets/icon/pulsa.png')}
            onPress={() => navigation.navigate('Pulsa')}
          />
          <IconPemayaran
            title="Paket Data"
            img={require('../../assets/icon/data.png')}
            onPress={() => navigation.navigate('PpobData')}
          />
          <IconPemayaran
            title="Voucher Game"
            img={require('../../assets/icon/game.png')}
            onPress={() => navigation.navigate('PpobGame')}
          />
          <IconPemayaran
            title="BPJS Kesehatan"
            img={require('../../assets/icon/bpjs.png')}
            onPress={() => navigation.navigate('PpobBpjs')}
          />
          <IconPemayaran
            title="PLN Prabayar"
            img={require('../../assets/icon/pln.png')}
            onPress={() => navigation.navigate('PpobPlnToken')}
          />

          <IconPemayaran
            title="PLN Pascabayar"
            img={require('../../assets/icon/pln2.png')}
            onPress={() => navigation.navigate('PpobPlnMeteran')}
          />

          <IconPemayaran
            title="PDAM"
            img={require('../../assets/icon/pdam.png')}
            onPress={() => navigation.navigate('PpobPdam')}
          />
          <IconPemayaran
            title="Tiket Kereta"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Tiket-Kereta.png',
            }}
          />

          <IconPemayaran
            title="Tiket Pesawat"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Tiket-Pesawat.png',
            }}
          />
          <IconPemayaran
            title="Hotel"
            img={require('../../assets/icon/hotel.png')}
          />
          <IconPemayaran
            title="Tiket Kapal"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Tiket-Kapal.png',
            }}
          />
          <IconPemayaran
            title="E - Samsat"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/E-samsat.png',
            }}
          />
          <IconPemayaran
            title="TV"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/TV.png',
            }}
            onPress={() => navigation.navigate('PpobTv')}
          />
          <IconPemayaran
            title="Internet"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Internet.png',
            }}
            onPress={() => navigation.navigate('PpobInternet')}
          />

          <IconPemayaran
            title="Telepon Rumah"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Telepone-Rumah.png',
            }}
            onPress={() => navigation.navigate('PpobTelepon')}
          />

          <IconPemayaran
            title="Tiket Travel"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Tiket-ravel.png',
            }}
          />

          <IconPemayaran
            title="Tiket Bus"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/Tiket-Bus.png',
            }}
          />

          <IconPemayaran
            title="Tour"
            img={{
              uri: 'https://ayokulakan.com/img/Icon-PPOB/rote.png',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
