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
import {fonts} from '../../utils';
import {ScrollPager} from 'react-native-tab-view';

export default function HajiTentang() {
  const OrderList = ({no, isi, left}) => {
    return (
      <View style={{flexDirection: 'row', paddingLeft: left}}>
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
        <Image
          source={{
            uri:
              'http://3.bp.blogspot.com/-RkvloTb6gco/VSDwgrcj16I/AAAAAAAAcA4/g5jwa61YPLA/s1600/kaaba.JPG',
          }}
          style={{
            width: '100%',
            aspectRatio: 1.5,
          }}
          // resizeMode="center"
        />
        <View style={{padding: 20}}>
          <Text style={styles.judul}>Program Umroh</Text>
          <Text style={styles.judul}>Umroh Reguler</Text>
          <OrderList
            no="1."
            isi="Perjalanan Umroh ke Madinah - Mekkah - Jedddah dan Langsung Kembali
            ke tanah air"
            left={5}
          />
          <OrderList
            no="2."
            isi="Umroh Plus Islamic Tour Setelah melaksanakan ibadah umroh
            dilanjutkan"
            left={5}
          />
          <OrderList
            no="3."
            isi=" dengan tour ke tempat-tempat wisata bersejarah sebelum kembali ke
            tanah air"
            left={5}
          />
          <Text style={{marginVertical: 10}}>Paket & Layanan</Text>
          <Text style={styles.judul}>Paket 9 dan 12 Hari</Text>
          <OrderList no="*" isi="Regular" left={5} />
          <OrderList no="*" isi="Royal" left={5} />
          <Text style={styles.judul}>
            Ramadhan (Awal dan Akhir Ramadhan + Idul Fitri)
          </Text>
          <Text style={{marginVertical: 2}}>Layanan</Text>
          <OrderList no="*" isi="Quad ( 1 Kamar 4 Orang )" left={5} />
          <OrderList no="*" isi="Triple ( 1 Kamar 3 orang )" left={5} />
          <OrderList no="*" isi="Double ( 1 Kamar 2 orang )" left={5} />
          <Text style={styles.judul}>KEUNGGULAN (InsyaAllah)</Text>
          <OrderList no="1." isi="Pesawat Turun Madinah" left={5} />
          <OrderList
            no="2."
            isi="Jarak Hotel-Masjidil harom 0-350 meter"
            left={5}
          />
          <OrderList
            no="3."
            isi="Sesuai Sunnah Rasulullah Sallallahu 'Alaihi Wasallam"
            left={5}
          />
          <OrderList
            no="4."
            isi="Pesawat menggunakan Qatar, Emirat, Ettihad, atau Saudia"
            left={5}
          />
          <OrderList
            no="5."
            isi="Kepastian Berangkat (Tiket) & Hotel"
            left={5}
          />
          <OrderList
            no="6."
            isi="Pembimbing/Muthowif menangani maksimum 16 jamaah"
            left={5}
          />
          <OrderList
            no="7."
            isi="Mendukung kegiatan InsanTV, Insan Media Group"
            left={5}
          />
          <Text style={styles.judul}>SYARAT PENDAFTARAN</Text>
          <OrderList no="1." isi="Mengisi formulir pendaftaran" left={5} />
          <OrderList no="2." isi="Tahapan Pembayaran :" left={5} />
          <OrderList
            no="a."
            isi="Admin Rp. 1.250.000,- saat mendaftar"
            left={20}
          />
          <OrderList
            no="b."
            isi="Pembayaran 50% (dari harga paket) untuk booking seat"
            left={20}
          />
          <OrderList
            no="c."
            isi="Pelunasan 1 bulan sebelum keberangkatan"
            left={20}
          />
          <OrderList no="3." isi="Menyerakan dokumen umroh :" left={5} />
          <OrderList no="a." isi="Pasport dengan nama 3 kata" left={20} />
          <OrderList no="b." isi="Paspor asli & fotocopy 3 lbr" left={20} />
          <OrderList no="b." isi="Fotocopy buku nikah (Istri)" left={20} />
          <OrderList
            no="d."
            isi="Fotocopy Kartu KK (Keluarga Perempuan)"
            left={20}
          />
          <OrderList
            no="e."
            isi=" Fotocopy Akta lahir (Anak umur <= 17 tahun)"
            left={20}
          />
          <OrderList no="f." isi="Fotocopy KTP 2 lembar" left={20} />
          <OrderList
            no="g."
            isi="Foto fokus wajah 80%, background putih, 4 lbr 4x6 & 3 lbr 3x4"
            left={20}
          />
          <OrderList
            no="h."
            isi="Kartu Kuning bukti suntik meningitis"
            left={20}
          />
          <OrderList no="4." isi="Ketentuan Lain :" left={5} />
          <OrderList
            no="a."
            isi="Pembatalan oleh Travel, dikembalikan 100%"
            left={20}
          />
          <OrderList
            no="b."
            isi="Pembatalan oleh Calon umroh, dikenakan biaya Admin, Pembayaran Tiket dan Visa"
            left={20}
          />
          <OrderList
            no="c."
            isi="Tambahan Biaya Pengelolaan untuk Cabang ditetapkan oleh masing masing Cabang"
            left={20}
          />
          <Text style={styles.judul}>ANJURAN MENTERI AGAMA</Text>
          <OrderList
            no=""
            isi="Menanyakan kepada Travel hal-hal sebagai berikut :"
            left={0}
          />
          <OrderList no="1." isi="Keberadaan izin travel" left={5} />
          <OrderList
            no="2."
            isi="Alamat travel dan penanggung jawab"
            left={5}
          />
          <OrderList
            no="3."
            isi="Tiket keberangkatan (tgl, jam, flight number)"
            left={5}
          />
          <OrderList no="4." isi="Nama Hotel di Madinah dan Mekkah" left={5} />
          <OrderList
            no="5."
            isi="Harga tarif beserta layanan yang diberikan"
            left={5}
          />
          <OrderList no="6." isi="Tersedianya Visa Umroh" left={5} />

          <Text style={styles.judul}>BIAYA SUDAH TERMASUK</Text>
          <OrderList no="1." isi="Tiket pesawat internasional PP" left={5} />
          <OrderList no="2." isi="Air-Pot Tax" left={5} />
          <OrderList no="3." isi="Visa umroh" left={5} />
          <OrderList no="4." isi="Fasilitas hotel bintang 4 dan 5" left={5} />
          <OrderList
            no="5."
            isi="Ustadz pembimbing dan guide (15 jamaah dg 1 muthowif)"
            left={5}
          />
          <OrderList
            no="6."
            isi="Transportasi selama di tanah suci (Bus AC)"
            left={5}
          />
          <OrderList no="7." isi="Handling Bandara" left={5} />
          <OrderList
            no="8."
            isi="Paket ziarah Madinah, Mekkah, dan Jeddah"
            left={5}
          />
          <OrderList
            no="9."
            isi="Bimbingan manasik (pembekalan umroh)"
            left={5}
          />
          <OrderList
            no="10."
            isi="Makan 3 kali sehari prasmanan Indonesia atau fullbox"
            left={5}
          />
          <OrderList
            no="11."
            isi="Air zam-zam sesuai aturan penerbangan"
            left={5}
          />

          <Text style={styles.judul}>BIAYA TIDAK TERMASUK</Text>
          <OrderList
            no="1."
            isi="Hotel, Akomodasi & Transport dari Daerah ke Jakarta"
            left={5}
          />
          <OrderList no="2." isi="Kebutuhan pribadi (Laundry dll)" left={5} />
          <OrderList
            no="3."
            isi="Biaya tambahan karena peraturan di Arab Saudi"
            left={5}
          />
          <OrderList no="4." isi="Kelebihan beban bagasi" left={5} />
          <OrderList
            no="5."
            isi="Pemeriksaan kesehatan dan suntik meningitis"
            left={5}
          />
          <OrderList
            no="6."
            isi="Biaya dan pengobatan bagi jama'ah yang sakit selama perjalanan"
            left={5}
          />
          <OrderList
            no="7."
            isi="Kehilangan barang atau kejadian tak terduga"
            left={5}
          />
          <OrderList
            no="8."
            isi="Biaya pembuatan pasport, kursi roda, dll"
            left={5}
          />

          <Text style={styles.judul}>PERLENGKAPAN UMROH</Text>
          <OrderList no="1." isi="Kain Ihrom (L) atau Mukenah (P)" left={5} />
          <OrderList no="2." isi="Koper Polo Jockey (Fiber)" left={5} />
          <OrderList no="3." isi="Cover Koper Polo Jockey" left={5} />
          <OrderList no="4." isi="Tas Slempang (Paspor, HP, dll)" left={5} />
          <OrderList no="5." isi="Tas Sandal" left={5} />
          <OrderList no="6." isi="Bahan Kain Batik" left={5} />
          <OrderList no="7." isi="Kaos Alharom (L)" left={5} />
          <OrderList no="8." isi="Syal dan Kartu Pengenal" left={5} />
          <OrderList no="9." isi="Buku Manasik, dll" left={5} />

          <Text style={styles.judul}>DIANJURKAN, membawa :</Text>
          <OrderList no="1." isi="GADGET ANDROID" left={5} />
          <OrderList no="2." isi="Obat yg biasa digunakan" left={5} />
          <OrderList no="3." isi="Masker Secukupnya" left={5} />
          <OrderList no="4." isi="Sunblock" left={5} />
          <OrderList no="5." isi="Kacamata Hitam" left={5} />
          <OrderList no="6." isi="Lipgloss (Pelembab Bibir)" left={5} />
          <OrderList no="7." isi="Cream Tumit (Salep Tumit)" left={5} />
          <OrderList no="8." isi="Sandal cadangan" left={5} />
          <OrderList no="9." isi="obat gosok pegal linu" left={5} />
          <OrderList no="10." isi="Ikat Pinggang Ihram" left={5} />
          <OrderList no="11." isi="Salep Gosok Gatal, dll" left={5} />
          <OrderList
            no="12."
            isi="Dalam perjalanan membawa uang secukupnya, selebihnya disimpan dalam bentuk ATM berlogo VISA"
            left={5}
          />

          {/* /aa */}
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
