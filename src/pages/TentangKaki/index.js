import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {fonts} from '../../utils';

export default function TentangKaki() {
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
      <Text style={styles.judul}>TENTANG KAKI LIMA</Text>
      <Text style={styles.isi}>
        merupakan tempat untuk pedagang memberikan informasi barang yang dijual,
        serta informasi lokasi kepada pembeli. Ayokulakan memberikan informasi
        lokasi penjual yang terdekat dan pembeli bisa memesan barang melalui
        aplikasi Ayokulakan.com. Sehingga mempermudah proses jual beli.
      </Text>
      <Text style={styles.judul}>
        1. Berikut adalah syarat dan ketentuannya :
      </Text>
      <Text style={styles.subJudul}>
        A. Semua kaki lima, bisa bergabung dengan menu kaki lima Ayokulakan.com.
        Perlu diingat, produk yang dijual adalah ready stock atau bukan produk
        pre-order.
      </Text>
      <Text style={styles.subJudul}>
        B. Warung makan yang tidak memiliki meja atau tempat untuk makan di
        tempat bisa bergabung dengan Ayokulakan.com, dengan catatan memiliki
        penanda berupa spanduk atau plang yang mempermudah Kurir untuk menemukan
        alamat.
      </Text>
      <Text style={styles.subJudul}>
        C. Anda dapat menjual semua jenis makanan, minuman, produk olahan dll,
        namun harus sesuai dengan peraturan pemerintah.
      </Text>
      <Text style={styles.subJudul}>
        D. Foto tempat usaha atau tempat lokasi.
      </Text>
      <Text style={styles.subJudul}>E. Foto ktp.</Text>
      <Text style={styles.subJudul}>F. Swafoto.</Text>
      <Text style={styles.judul}>
        2. Keuntungan bergabung menjadi kaki lima di Ayokulakan.com
      </Text>
      <Text style={styles.subJudul}>
        A. Anda bisa menggunakan aplikasi ayokulakan.com untuk melihat pesanan
        jika ada orang ingin membeli produk jualan.
      </Text>
      <Text style={styles.subJudul}>
        B. Anda dapat melihat pedagang kaki lima yang ada disekitar lokasi
        tempat anda berada, melalui menu peta maps kaki lima.
      </Text>
      <Text style={styles.subJudul}>C. Traksasi lebih mudah dan aman.</Text>
      <Text style={styles.subJudul}>
        D. Pengiriman barang ke pembeli bisa cepat.
      </Text>
      <Text style={styles.judul}>3. Testimoni dari pembeli ke penjual</Text>
      <Text style={styles.subJudul}>
        A. Memberikan bintang kepada penjual .
      </Text>
      <Text style={styles.subJudul}>
        B. Memberikan komentar tentang produk yang di jualnya.
      </Text>
      <Text style={styles.subJudul}>
        C. Mengupload foto barang yang sudah sampai.
      </Text>
      <Text style={styles.subJudul}>D. Kualitas produk.</Text>
      <Text style={styles.subJudul}>E. Harga produk yang bersaing.</Text>
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
    marginVertical: 2,
  },
  isi: {
    fontFamily: fonts.secondary[400],
    fontSize: 12,
  },
});
