import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {fonts} from '../../utils';

export default function TentangKurir() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Image
        source={require('../../assets/huruf.png')}
        style={{
          aspectRatio: 2,
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <Text style={styles.judul}>TENTANG YOKUYKURIR</Text>
      <Text style={styles.isi}>
        Yokuy Kurir menyediakan informasi ongkos kirim dari berbagai kurir di
        Indonesia seperti POS Indonesia, JNE, TIKI, PCP, ESL, dan RPX dan juga
        kami menyediakan siapa saja yang ingin menjadi kurir di ayokulakan.com,
        anda bisa mendaftar di menu ayokulakan.
      </Text>
      <Text style={styles.judul}>1. Persyaratan menjadi kurir</Text>
      <Text style={styles.subJudul}>a. Memiliki SIM</Text>
      <Text style={styles.isi}>
        Kurir mengantarkan barang dan juga dokumen ke tempat tujuan dengan
        menggunakan kendaraan baik itu roda dua ataupun roda empat. Untuk itu,
        persyaratan utama untuk menjadi kurir adalah memiliki SIM C atau SIM A
        tergantung dari jenis kendaraan yang digunakan.
      </Text>
      <Text style={styles.subJudul}>b. Menguasai jalan</Text>
      <Text style={styles.isi}>
        Menjadi seorang kurir juga membutuhkan pengetahuan tentang banyak jalan
        sehingga sangat wajib bagi seorang kurir untuk mengetahui dan menguasai
        jalan supaya barang atau dokumen yang akan dikirim bisa sampai tepat
        pada waktunya.
      </Text>
      <Text style={styles.subJudul}>c. Memiliki SKCK.</Text>
      <Text style={styles.isi}>
        Surat keterangan catatan kepolisian juga dibutuhkan jika kamu ingin
        menjadi kurir, menjadi seorang kurir membutuhkan tanggung jawab dan
        kejujuran.
      </Text>
      <Text style={styles.subJudul}>d. Memiliki kendaraan.</Text>
      <Text style={styles.isi}>
        Memiliki kendaran, sebagai alat transportasi.
      </Text>
      <Text style={styles.subJudul}>e. Memiliki Smartphone.</Text>
      <Text style={styles.isi}>
        Keuntungan menjadi seorang kurir dan dalam hal ini kurir adalah tidak
        harus selalu bekerja di kantor dan aktivitas yang dilakukan setiap hari
        juga membosankan. Namun, pekerjaan ini juga menuntut calon pelamar
        memiliki sebuah smartphone untuk penggunaan aplikasi. Dengan ini, maka
        perusahaan bisa mengawasi para para karyawan-nya untuk memastikan
        kiriman bisa sampai tepat waktu dengan cara menggunakan GPS.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: 16,
    marginVertical: 10,
  },
  subJudul: {
    fontFamily: fonts.secondary[400],
    fontSize: 14,
    marginVertical: 10,
  },
  isi: {
    fontFamily: fonts.secondary[400],
    fontSize: 12,
  },
});
