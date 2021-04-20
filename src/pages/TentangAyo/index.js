import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {fonts, colors} from '../../utils';

export default function TentangAyo() {
  const IconAyo = ({name, image}) => {
    return (
      <View
        style={{
          flex: 1,
          margin: 5,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 10,
          padding: 10,
        }}>
        <Image
          source={{uri: image}}
          style={{
            width: '100%',
            aspectRatio: 2,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 12,
            fontFamily: fonts.secondary[400],
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    );
  };

  const IconAyoVisMi = ({name, image, tipe}) => {
    return (
      <View
        style={{
          flex: 1,
          margin: 5,
          borderWidth: 1,
          borderColor: colors.secondary,
          borderRadius: 10,
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.secondary[600],
            textAlign: 'center',
            color: colors.secondary,
          }}>
          {tipe}
        </Text>
        <Image
          source={{uri: image}}
          style={{
            width: '100%',
            aspectRatio: 2,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 12,
            fontFamily: fonts.secondary[400],
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
      }}>
      <ScrollView>
        <Image
          source={require('../../assets/huruf.png')}
          style={{
            aspectRatio: 1,
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.secondary[400],
              textAlign: 'justify',
            }}>
            Ayokulakan didirikan berdasarkan Akta Pendirian Perseroan Komanditer
            pada tanggal 11 Maret 2019 nomor 5 dan SK.KEMENTERIAN HUKUM dan
            HAM.RI No.AHU-51.AH.02.01-TH.2011 Tanggal 14 Januari 2011, dengan
            tujuan utama untuk dapat membantu para petani maupun peternak dalam
            memasarkan produknya baik itu dalam kondisi mentah maupun matang,
            bukan saja para petani maupun peternak yang diuntungkan, para
            pemilik angkutan barangpun akan ikut diuntungkan dengan adanya
            pemilihan jasa pengiriman yang menggunakan angkutan mereka yang akan
            mempercepat proses pengiriman barang.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 10,
              fontFamily: fonts.secondary[600],
              textAlign: 'center',
            }}>
            Keuntungan Menggunakan Aplikasi AYOKULAKAN
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <IconAyo
              name="Data Penjualan akan lebih rapih dan tertata."
              image="https://ayokulakan.com/img/tentang/Data-penjualan.JPG"
            />
            <IconAyo
              name="Akan muncul data penjualan terbanyak yang akan dijadikan patokan untuk produksi para petani maupun peternak."
              image="https://ayokulakan.com/img/tentang/data-penjualan-terbanyak.JPG"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <IconAyo
              name="Petani dan peternak ikan tidak akan kebingungan menjual hasil pertanian dan peternakan mereka."
              image="https://ayokulakan.com/img/tentang/petani-dan-pertenak.JPG"
            />
            <IconAyo
              name="Pemilik angkutan barang akan lebih mudah mendapatkan pekerjaan."
              image="https://ayokulakan.com/img/tentang/Pemilik-angkutan.JPG"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <IconAyo
              name="Kemudahan dalam melakukakan transaksi."
              image="https://ayokulakan.com/img/tentang/Kemudahan-dalam-transaksi.JPG"
            />
            <IconAyo
              name="Pemilik jasa pengiriman yang beragam."
              image="https://ayokulakan.com/img/tentang/Pemilik-jasa-pengiriman.JPG"
            />
          </View>

          <Text
            style={{
              fontSize: 14,
              marginVertical: 10,
              fontFamily: fonts.secondary[600],
              textAlign: 'center',
            }}>
            VISI DAN MISI
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <IconAyoVisMi
              tipe="VISI"
              name="Meningkatkan martabat manusia, kesejahteraan dan kedamaian dengan bermuamalat (jual-beli) secara syar'i."
              image="https://ayokulakan.com/img/tentang/tentang-visi.JPG"
            />
            <IconAyoVisMi
              tipe="MISI"
              name="Melakuakan dengan jujur, sabar, menepati, berkeseimbangan, dan menghormati hak orang lain karena Allah."
              image="https://ayokulakan.com/img/tentang/tentang-misi.JPG"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
