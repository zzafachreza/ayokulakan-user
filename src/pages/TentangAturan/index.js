import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {fonts} from '../../utils';

export default function TentangAturan() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Text style={styles.judul}>ATURAN PENGGUNA AYOKULAKAN</Text>
      <Text style={styles.isi}>
        Kebijakan penggunaan yang dapat diterima ini adalah perjanjian antara
        Kami (operator situs web) dan Anda (User). Kebijakan ini menetapkan
        Pedoman Umum dan penggunaan situs web ayokulakan.com yang dapat diterima
        dan dilarang, serta setiap produk atau layanannya (secara kolektif
        disebut, "situs web" atau "Layanan").
      </Text>
      <Text style={styles.judul}>Metode Pengiriman</Text>
      <Text style={styles.isi}>
        Metode pengiriman yang di gunakan saat ini, menggunakan permintaan /
        request dari customer dari hasil pemesanan barang, dan memulai dengan
        request permintaan pengiriman barang.
      </Text>
      <Text style={styles.judul}>Biaya pengiriman</Text>
      <Text style={styles.isi}>
        Biaya pengiriman akan di tanggung oleh customer dan masuk ke dalam
        hitungan transaksi / total harga.
      </Text>
      <Text style={styles.judul}>Aktivitas Yang Dilarang dan Menggunakan</Text>
      <Text style={styles.isi}>
        Anda tidak boleh menggunakan layanan untuk mempublikasikan konten atau
        terlibat dalam aktivitas yang ilegal menurut hukum yang berlaku, yang
        berbahaya bagi orang lain, atau yang akan tunduk pada tanggung jawab
        kami, termasuk, tanpa batasan, sehubungan dengan salah satu hal berikut,
        yang masing-masing dilarang berdasarkan kebijakan ini:
      </Text>
      <Text style={styles.subJudul}>
        ● Mendistribusikan malware atau kode berbahaya lainnya.
      </Text>
      <Text style={styles.subJudul}>
        ● Mengungkapkan informasi pribadi yang sensitif tentang orang lain.
      </Text>
      <Text style={styles.subJudul}>
        ● Mengumpulkan, atau mencoba untuk mengumpulkan, informasi pribadi
        tentang pihak ketiga tanpa sepengetahuan atau persetujuan mereka.
      </Text>
      <Text style={styles.subJudul}>
        ● Menyebarkan pornografi atau konten terkait dewasa.
      </Text>
      <Text style={styles.subJudul}>
        ● Mempromosikan atau memfasilitasi prostitusi atau layanan pendamping.
      </Text>
      <Text style={styles.subJudul}>
        ● Menghosting, mendistribusikan, atau menautkan pornografi anak atau
        konten yang berbahaya bagi anak di bawah umur.
      </Text>
      <Text style={styles.subJudul}>
        ● Mempromosikan atau memfasilitasi perjudian, kekerasan, kegiatan
        teroris atau menjual senjata atau amunisi.
      </Text>
      <Text style={styles.subJudul}>
        ● Terlibat dalam distribusi melanggar hukum zat yang dikendalikan, obat
        selundupan atau obat resep.
      </Text>
      <Text style={styles.subJudul}>
        ● Mengelola agregator pembayaran atau fasilitator seperti memproses
        pembayaran atas nama bisnis lain atau badan amal.
      </Text>
      <Text style={styles.subJudul}>
        ● Memfasilitasi skema piramida atau model lain yang dimaksudkan untuk
        mencari pembayaran dari pelaku publik.
      </Text>
      <Text style={styles.subJudul}>
        ● Mengancam membahayakan orang atau properti atau perilaku melecehkan
        lainnya.
      </Text>
      <Text style={styles.subJudul}>
        ● Melanggar kekayaan intelektual atau hak kepemilikan lainnya dari pihak
        lain.
      </Text>
      <Text style={styles.subJudul}>
        ● Memfasilitasi, membantu, atau mendorong salah satu kegiatan di atas
        melalui layanan kami.
      </Text>

      <Text style={styles.judul}>Penyalahgunaan Sistem</Text>
      <Text style={styles.isi}>
        Setiap pengguna yang melanggar keamanan Layanan kami tunduk pada
        tanggung jawab pidana dan perdata, serta penghentian akun segera.
        Contohnya termasuk, namun tidak terbatas pada hal berikut:
      </Text>
      <Text style={styles.subJudul}>
        ● Penggunaan atau distribusi alat yang dirancang untuk mengorbankan
        keamanan Layanan.
      </Text>
      <Text style={styles.subJudul}>
        ● Sengaja atau lalai mentransmisikan file yang berisi virus komputer
        atau data yang rusak.
      </Text>
      <Text style={styles.subJudul}>
        ● Mengakses jaringan lain tanpa izin, termasuk untuk menyelidiki atau
        memindai kerentanan atau pelanggaran keamanan atau tindakan otentikasi.
      </Text>
      <Text style={styles.subJudul}>
        ● Pemindaian yang tidak sah atau pemantauan data pada jaringan atau
        sistem tanpa otorisasi yang tepat dari pemilik sistem atau jaringan.
      </Text>
      <Text style={styles.judul}>Sumber Daya Layanan</Text>
      <Text style={styles.isi}>
        Anda tidak boleh mengonsumsi layanan secara berlebihan atau menggunakan
        layanan dengan cara apa pun yang menghasilkan masalah kinerja atau yang
        mengganggu Layanan bagi pengguna lain. Kegiatan yang dilarang yang
        berkontribusi terhadap penggunaan berlebihan, termasuk tanpa batasan:
      </Text>
      <Text style={styles.subJudul}>
        ● Upaya yang disengaja untuk membebani layanan dan serangan siaran
        (yaitu penolakan serangan layanan).
      </Text>
      <Text style={styles.subJudul}>
        ● Terlibat dalam kegiatan lain yang menurunkan kegunaan dan kinerja
        layanan kami.
      </Text>

      <Text style={styles.judul}>Tidak Ada Kebijakan Spam</Text>
      <Text style={styles.isi}>
        Anda tidak boleh menggunakan layanan kami untuk mengirim spam atau pesan
        yang tidak diminta massal. Kami mempertahankan kebijakan nol toleransi
        untuk penggunaan Layanan kami dengan cara apa pun yang terkait dengan
        transmisi, distribusi, atau pengiriman email massal, termasuk massal
        yang tidak diminta atau e-mail komersial yang tidak diminta, atau
        pengiriman, bantuan, atau commissioning transmisi email komersial yang
        tidak sesuai dengan Undang-Undang yang berlaku. Produk atau layanan Anda
        yang diiklankan melalui SPAM (yaitu Spamvertised) tidak dapat digunakan
        bersamaan dengan layanan kami. Ketentuan ini mencakup, namun tidak
        terbatas pada, SPAM dikirim melalui Faks, telepon, Surat pos, email,
        pesan instan, atau newsgroup.
      </Text>

      <Text style={styles.judul}>
        Pencemaran nama baik dan konten yang tidak pantasm
      </Text>
      <Text style={styles.isi}>
        Kami menghargai kebebasan berekspresi dan mendorong pengguna untuk
        menghormati konten yang mereka posting. Kami bukan penerbit konten
        pengguna dan tidak berada dalam posisi untuk menyelidiki kebenaran klaim
        pencemaran nama baik individu atau untuk menentukan apakah materi
        tertentu, yang dapat kita temukan tidak pantas, harus disensor. Namun,
        kami berhak untuk memoderasi, menonaktifkan, atau menghapus konten apa
        pun untuk mencegah bahaya bagi orang lain atau kepada kami atau layanan
        kami, sebagaimana ditentukan dalam kebijakan kami sendiri.
      </Text>

      <Text style={styles.judul}>Konten berhak cipta</Text>
      <Text style={styles.isi}>
        Materi yang dilindungi hak cipta tidak boleh dipublikasikan melalui
        layanan kami tanpa izin eksplisit dari pemilik hak cipta atau orang yang
        secara eksplisit berwenang untuk memberikan izin tersebut oleh pemilik
        hak cipta. Setelah menerima klaim atas pelanggaran hak cipta, atau
        pemberitahuan pelanggaran tersebut, kami akan segera menjalankan
        investigasi penuh dan, setelah konfirmasi, akan segera menghapus materi
        yang melanggar dari layanan. Kami dapat menghentikan layanan pengguna
        dengan pelanggaran hak cipta berulang. Prosedur lebih lanjut dapat
        dilakukan jika diperlukan. Kami tidak akan bertanggung jawab kepada
        pengguna layanan untuk menghapus materi tersebut. Jika Anda yakin bahwa
        hak cipta Anda dilanggar oleh seseorang atau beberapa orang yang
        menggunakan Layanan kami, silakan kirim laporan pelanggaran hak cipta ke
        detail kontak yang tercantum di bagian akhir Kebijakan ini.
      </Text>

      <Text style={styles.judul}>Keamanan</Text>
      <Text style={styles.isi}>
        Anda bertanggung jawab penuh untuk menjaga keamanan yang masuk akal
        untuk akun Anda. Anda bertanggung jawab untuk melindungi dan memperbarui
        akun login apa pun yang diberikan kepada Anda untuk Layanan kami.
      </Text>
      <Text style={styles.judul}>Pelaksanaan</Text>
      <Text style={styles.isi}>
        Kami berhak untuk menjadi penengah tunggal dalam menentukan keseriusan
        setiap pelanggaran dan untuk segera mengambil tindakan korektif,
        termasuk tetapi tidak terbatas pada:
      </Text>
      <Text style={styles.subJudul}>
        ● Melaporkan pelanggaran penegakan hukum sebagaimana ditentukan oleh
        kami berdasarkan pertimbangan kami sendiri.
      </Text>
      <Text style={styles.subJudul}>
        ● Kegagalan untuk menanggapi email dari tim penyalahgunaan kami dalam
        waktu 2 hari, atau sebagaimana dinyatakan dalam komunikasi kepada Anda,
        dapat mengakibatkan penangguhan atau penghentian layanan Anda.
      </Text>
      <Text style={styles.isi}>
        Ditangguhkan dan diakhiri akun pengguna karena pelanggaran tidak akan
        diaktifkan kembali. Tidak ada yang terkandung dalam kebijakan ini yang
        akan ditafsirkan untuk membatasi tindakan atau upaya hukum kami dengan
        cara apa pun sehubungan dengan aktivitas yang dilarang. Selain itu, kami
        selalu mencadangkan semua hak dan upaya hukum yang tersedia bagi kami
        sehubungan dengan kegiatan yang dilakukan oleh undang-undangan atau
        ekuitas.
      </Text>

      <Text style={styles.judul}>Melaporkan Pelanggaran</Text>
      <Text style={styles.isi}>
        Jika Anda telah menemukan dan ingin melaporkan pelanggaran kebijakan
        ini, silahkan hubungi kami segera. Kami akan menyelidiki situasi dan
        memberi Anda bantuan penuh.
      </Text>

      <Text style={styles.judul}>Perubahan Amandemen</Text>
      <Text style={styles.isi}>
        Kami berhak untuk mengubah kebijakan ini atau persyaratannya yang
        berkaitan dengan situs web atau layanan setiap saat, efektif setelah
        memposting versi terbaru kebijakan ini di situs web. Ketika kami
        melakukannya, kami akan mengirimkan email untuk memberitahu Anda. Terus
        menggunakan website setelah perubahan tersebut akan merupakan
        persetujuan Anda terhadap perubahan tersebut.
      </Text>
      <Text style={styles.judul}>Penerimaan Kebijakan Ini</Text>
      <Text style={styles.isi}>
        Anda mengakui bahwa Anda telah membaca kebijakan ini dan menyetujui
        semua syarat dan ketentuannya. Dengan menggunakan situs web atau
        layanannya, Anda setuju untuk terikat dengan kebijakan ini. Jika Anda
        tidak setuju untuk mematuhi ketentuan kebijakan ini, Anda tidak
        berwenang untuk menggunakan atau mengakses situs web dan layanannya.
      </Text>

      <Text style={styles.judul}>Menghubungi Kami</Text>
      <Text style={styles.isi}>
        Jika Anda ingin menghubungi kami untuk memahami lebih lanjut tentang
        kebijakan ini atau ingin menghubungi kami mengenai masalah apapun yang
        berkaitan dengan hal itu, Anda dapat mengirim email ke
        Ayokulakan01@gmail.com.
      </Text>
      <Text style={styles.isi}>
        Dokumen ini terakhir diperbarui pada tanggal 6 Mei 2020.
      </Text>
      <Text style={styles.judul}>https://ayokulakan.com/</Text>
      <View style={{marginTop: 20}} />
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
