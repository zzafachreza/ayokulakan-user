import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import {fonts, colors} from '../../utils';
import {ScrollPager} from 'react-native-tab-view';

export default function HajiDaftar() {
  const OrderList = ({no, isi, left}) => {
    return (
      <View
        style={{flexDirection: 'row', paddingLeft: left, marginVertical: 5}}>
        <Text style={{fontSize: 12, fontFamily: fonts.secondary[400]}}>
          {no}
        </Text>
        <View style={{paddingLeft: 5}}>
          <Text style={{fontSize: 12, fontFamily: fonts.secondary[400]}}>
            {isi}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: fonts.secondary[600],
            }}>
            Syarat Daftar haji dan umroh
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.secondary[400],
            }}>
            Silakan lakukan pendaftaran dengan menyertai dokumen sebagai berikut
            :
          </Text>

          <Text style={styles.judul}>Syarat Pendaftaran</Text>
          <OrderList
            no="1."
            isi="Passport (asli dan fotocopy 1 lembar)"
            left={5}
          />
          <OrderList no="2." isi="Buku suntik meningitis asli" left={5} />
          <OrderList
            no="3."
            isi="Foto fokus wajah 80% background putih (2 lembar ukuran 4x6 )"
            left={5}
          />
          <OrderList no="4." isi="Buku menikah (jika sudah menikah)" left={5} />
          <OrderList
            no="5."
            isi="Akte lahir (jika anak di bawah usia 16 tahun)"
            left={5}
          />
          <OrderList no="6." isi="1 lembar fotocopy ktp" left={5} />
          <OrderList no="7." isi="1 lembar fotocopy kk" left={5} />
          <OrderList
            no="8."
            isi="Surat bukti keterangan hamil (jika perempuan sedang mengadung )"
            left={5}
          />

          <Text style={styles.judul}>Biaya sudah termasuk</Text>
          <OrderList no="1." isi="Visa" left={5} />
          <OrderList no="2." isi="Tiket pesawat pp" left={5} />
          <OrderList no="3." isi="Akomondasi hotel" left={5} />
          <OrderList no="4." isi="Transportasi bus" left={5} />
          <OrderList
            no="5."
            isi="Makan 3 kali sehari (menu Indonesia)"
            left={5}
          />
          <OrderList no="6." isi="Ziarah Madinah dan mekah" left={5} />
          <OrderList no="7." isi="Pembimbing (muthowif)" left={5} />
          <OrderList no="8." isi="Air zam-zam 5l" left={5} />
          <OrderList
            no="9."
            isi=" (Pasar ja’fariyah, thaif, jabal magnet)"
            left={5}
          />

          <Text style={styles.judul}>Pembayaran</Text>
          <OrderList no="1." isi="Membayar administrasi 1.250.000,-" left={5} />
          <OrderList
            no="2."
            isi="Membayar uang muka sebesar 50% dari total biaya umroh"
            left={5}
          />
          <OrderList
            no="3."
            isi="Melunasi paling lambat 1 bulan sebelum keberangkatan"
            left={5}
          />
          <OrderList
            no="4."
            isi="Bagi calon jamaah yang membatalkan keberangkatan tetap terkena biaya admistrasi, sesuai dengan aturan yang berlaku"
            left={5}
          />
          <View style={{marginVertical: 5}} />
          <OrderList
            no="*"
            isi="Melayani pengurusan umroh rombongan, keluarga, kantor, Arisan dll."
            left={5}
          />
          <OrderList
            no="*"
            isi="Aturan sewaktu – waktu dapat berubah

"
            left={5}
          />
          <View
            style={{
              marginVertical: 5,
              borderBottomColor: colors.primary,
              borderBottomWidth: 2,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.secondary[600],
            }}>
            Formulir daftar haji dan umroh
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  judul: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    marginVertical: 10,
  },
});
