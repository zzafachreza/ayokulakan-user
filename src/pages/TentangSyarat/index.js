import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {fonts, colors} from '../../utils';

export default function TentangSyarat() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Text style={styles.judul}>
        Syarat Dan Ketentuan <Text style={{color: colors.secondary}}>AYO</Text>
        <Text style={{color: colors.primary}}>KULAKAN</Text>
      </Text>
      <Text style={styles.isi}>
        Syarat dan ketentuan ini adalah kesepakatan antara CV. AYOKULAKAN dan
        Anda (User). Perjanjian ini menetapkan syarat dan ketentuan umum
        penggunaan situs web ayokulakan.com dan setiap produk atau layanannya
        (secara kolektif disebut, "situs web" atau "Layanan").
      </Text>
      <Text style={styles.judul}>Akun dan keanggotaan</Text>
      <Text style={styles.isi}>
        Anda harus berusia minimal 16 tahun untuk menggunakan situs web ini.
        Dengan menggunakan situs web ini dan dengan menyetujui perjanjian ini,
        Anda menjamin dan menyatakan bahwa Anda sekurang-kurangnya berusia 18
        tahun. Jika Anda membuat akun di situs web, Anda bertanggung jawab untuk
        menjaga keamanan akun Anda dan Anda bertanggung jawab penuh atas semua
        aktivitas yang terjadi di bawah akun dan tindakan lain yang diambil
        sehubungan dengan itu. Kami dapat memantau dan meninjau akun baru
        sebelum Anda dapat masuk dan menggunakan layanan kami. Memberikan
        informasi kontak palsu dalam bentuk apa pun dapat mengakibatkan
        penghentian akun Anda. Anda harus segera memberi tahu kami tentang
        penggunaan akun Anda yang tidak sah atau pelanggaran keamanan lainnya.
        Kami tidak akan bertanggung jawab atas setiap tindakan atau kelalaian
        oleh Anda, termasuk kerusakan apapun yang timbul sebagai akibat dari
        tindakan atau kelalaian tersebut. Kami dapat menangguhkan,
        menonaktifkan, atau menghapus akun Anda (atau bagian daripadanya) jika
        kami menentukan bahwa Anda telah melanggar ketentuan apa pun dari
        Perjanjian ini atau bahwa perilaku atau konten Anda akan cenderung
        merusak reputasi dan niat baik kami. Jika kami menghapus akun Anda untuk
        alasan tersebut di atas, Anda tidak dapat mendaftar ulang untuk layanan
        kami. Kami dapat memblokir alamat email Anda dan alamat Protokol
        Internet untuk mencegah pendaftaran lebih lanjut.
      </Text>
      <Text style={styles.judul}>Penagihan dan pembayaran</Text>
      <Text style={styles.isi}>
        Anda harus membayar semua biaya atau biaya ke akun Anda sesuai dengan
        biaya, biaya, dan ketentuan penagihan yang berlaku pada saat biaya atau
        biaya jatuh tempo dan harus dibayar. Pertukaran data sensitif dan
        Pribadi terjadi melalui saluran komunikasi yang diamankan SSL dan
        dienkripsi dan dilindungi dengan tanda tangan digital, dan situs web
        kami juga sesuai dengan standar kerentanan PCI untuk menciptakan
        keamanan lingkungan yang mungkin bagi pengguna. Pemindaian untuk malware
        dilakukan secara rutin untuk keamanan dan perlindungan tambahan. Jika,
        dalam penilaian kami, pembelian Anda merupakan transaksi berisiko
        tinggi, kami akan mewajibkan Anda untuk memberikan salinan identifikasi
        foto yang dikeluarkan oleh pemerintah yang valid kepada kami, dan
        mungkin juga salinan laporan mutasi Bank terbaru untuk kartu kredit atau
        debit yang digunakan untuk pembelian. Kami berhak untuk mengubah produk
        dan harga produk setiap saat. Kami juga berhak untuk menolak pesanan apa
        pun yang Anda tempatkan dengan kami. Kami dapat, atas kebijakan kami
        sendiri, membatasi atau membatalkan jumlah pembelian per orang, per
        rumah tangga, atau per pesanan. Pembatasan ini dapat mencakup perintah
        yang ditempatkan oleh atau di bawah akun pelanggan yang sama, kartu
        kredit yang sama, dan/atau perintah yang menggunakan alamat penagihan
        dan/atau pengiriman yang sama. Jika kami melakukan perubahan atau
        membatalkan pesanan, kami dapat mencoba memberi tahu Anda dengan
        menghubungi e-mail dan/atau nomor penagihan/telepon yang diberikan pada
        saat pesanan dibuat.
      </Text>

      <Text style={styles.judul}>Keakuratan informasi</Text>
      <Text style={styles.isi}>
        Terkadang mungkin ada informasi di situs web yang berisi kesalahan
        ketik, ketidakakuratan atau kelalaian yang mungkin berhubungan dengan
        promosi dan penawaran. Kami berhak untuk memperbaiki kesalahan,
        ketidakakuratan atau kelalaian, dan untuk mengubah atau memperbarui
        informasi atau membatalkan pesanan jika ada informasi pada situs web
        atau pada setiap layanan yang terkait tidak akurat setiap saat tanpa
        pemberitahuan sebelumnya (termasuk setelah Anda mengirimkan pesanan
        Anda). Kami tidak berkewajiban untuk memperbarui, mengubah atau
        mengklarifikasi informasi di situs web termasuk, tanpa batasan,
        informasi harga, kecuali sebagaimana diharuskan oleh hukum. Tidak ada
        update tertentu atau refresh tanggal yang diterapkan pada website harus
        diambil untuk menunjukkan bahwa semua informasi pada website atau pada
        layanan terkait telah dimodifikasi atau diperbarui.
      </Text>

      <Text style={styles.judul}>Layanan pihak ketiga</Text>
      <Text style={styles.isi}>
        Jika Anda memutuskan untuk mengaktifkan, mengakses, atau menggunakan
        layanan pihak ketiga, disarankan bahwa akses Anda dan penggunaan Layanan
        lainnya tersebut diatur semata-mata oleh syarat dan Ketentuan Layanan
        lainnya, dan kami tidak mendukung, tidak bertanggung jawab atau
        berkewajiban atas, dan tidak membuat pernyataan mengenai aspek apa pun
        dari layanan lain tersebut, termasuk, tanpa batasan, konten mereka atau
        cara mereka menangani data (termasuk data Anda) atau interaksi apa pun
        antara Anda dan penyedia Layanan lain tersebut. Anda tidak dapat ditarik
        kembali melepaskan setiap klaim terhadap CV. AYOKULAKAN sehubungan
        dengan layanan lain tersebut. CV. AYOKULAKAN tidak bertanggung jawab
        atas segala kerusakan atau kerugian yang disebabkan atau diduga
        disebabkan oleh atau berhubungan dengan pemberdayaan Anda, akses atau
        penggunaan Layanan lain tersebut, atau ketergantungan Anda pada praktik
        privasi, proses keamanan data atau kebijakan lain dari layanan lain
        tersebut. Anda mungkin diminta untuk mendaftar atau masuk ke layanan
        lain tersebut di situs web masing-masing. Dengan mengaktifkan layanan
        lain, Anda secara tegas mengizinkan CV. AYOKULAKAN untuk mengungkapkan
        data Anda jika diperlukan untuk memfasilitasi penggunaan atau
        pengaktifan layanan lain tersebut.
      </Text>

      <Text style={styles.judul}>Iklan</Text>
      <Text style={styles.isi}>
        Selama penggunaan situs web, Anda dapat melakukan korespondensi dengan
        atau berpartisipasi dalam promosi pengiklan atau sponsor yang
        menunjukkan barang atau layanan mereka melalui situs web. Setiap
        kegiatan tersebut, dan setiap syarat, ketentuan, jaminan atau
        representasi yang terkait dengan aktivitas tersebut, adalah semata-mata
        antara Anda dan pihak ketiga yang berlaku. Kami tidak memiliki
        kewajiban, kewajiban atau tanggung jawab atas korespondensi, pembelian
        atau promosi antara Anda dan pihak ketiga tersebut.
      </Text>

      <Text style={styles.judul}>Tautan ke situs web lain</Text>
      <Text style={styles.isi}>
        Meskipun situs web ini dapat menautkan ke situs web lain, kami tidak,
        secara langsung atau tidak langsung, menyiratkan persetujuan, Asosiasi,
        sponsor, pengesahan, atau afiliasi dengan situs web yang tertaut,
        kecuali disebutkan secara khusus di sini. Kami tidak bertanggung jawab
        untuk memeriksa atau mengevaluasi, dan kami tidak menjamin persembahan
        dari, setiap bisnis atau individu atau konten situs web mereka. Kami
        tidak bertanggung jawab atau berkewajiban atas tindakan, produk,
        Layanan, dan konten pihak ketiga lainnya. Anda harus meninjau pernyataan
        hukum dan ketentuan lain penggunaan situs web yang Anda akses melalui
        tautan dari situs web ini secara saksama. Anda menghubungkan ke situs
        off-situs lain adalah risiko Anda sendiri.
      </Text>

      <Text style={styles.judul}>Penggunaan yang dilarang</Text>
      <Text style={styles.isi}>
        Selain persyaratan lain sebagaimana tercantum dalam Perjanjian, Anda
        dilarang menggunakan situs web atau kontennya: (a) untuk tujuan yang
        melanggar hukum; (b) untuk meminta orang lain untuk melakukan atau
        berpartisipasi dalam tindakan yang melanggar hukum; (c) untuk melanggar
        setiap internasional, Federal, peraturan provinsi atau negara, aturan,
        hukum, atau tata cara lokal; (d) untuk melanggar atau melanggar hak
        kekayaan intelektual atau hak kekayaan intelektual orang lain; (e) untuk
        melecehkan, menyalahgunakan, menghina, membahayakan, mencemarkan,
        memfitnah, meremehkan, mengintimidasi, atau melakukan diskriminasi
        berdasarkan jenis kelamin, orientasi seksual, agama, etnis, ras, usia,
        asal-usul kebangsaan, atau kecacatan; (f) untuk mengirimkan informasi
        palsu atau menyesatkan; (g) untuk mengunggah atau mentransmisikan virus
        atau jenis kode berbahaya lainnya yang akan atau dapat digunakan dengan
        cara apa pun yang akan memengaruhi fungsi atau pengoperasian layanan
        atau situs web terkait, situs web lain, atau internet; (h) untuk
        mengumpulkan atau melacak informasi pribadi orang lain; (i) untuk spam,
        Phish, Pharm, dalih, spider, merangkak, atau mengikis; (j) untuk tujuan
        cabul atau tidak bermoral; atau (k) mengganggu atau mengakali fitur
        keamanan Layanan atau situs web terkait, situs web lain, atau internet.
        Kami berhak untuk menghentikan penggunaan layanan atau situs web terkait
        untuk melanggar salah satu penggunaan yang dilarang.
      </Text>

      <Text style={styles.judul}>Intelektual</Text>
      <Text style={styles.isi}>
        Perjanjian ini tidak mengalihkan kepada Anda setiap kekayaan intelektual
        yang dimiliki oleh CV. AYOKULAKAN atau pihak ketiga, dan semua hak,
        gelar, dan kepentingan dalam dan ke properti tersebut akan tetap (antara
        para pihak) semata-mata dengan CV. AYOKULAKAN. Semua merek dagang, merek
        layanan, grafis, dan logo yang digunakan dalam kaitannya dengan situs
        web atau layanan kami, adalah merek dagang atau merek dagang terdaftar
        CV. AYOKULAKAN atau CV. AYOKULAKAN pemberi lisensi. Merek dagang, merek
        layanan, grafis, dan logo lain yang digunakan sehubungan dengan situs
        web atau layanan kami mungkin merupakan merek dagang dari pihak ketiga
        lainnya. Penggunaan Anda atas situs web dan layanan kami tidak memberi
        Anda hak atau lisensi untuk mereproduksi atau menggunakan CV. AYOKULAKAN
        atau merek dagang pihak ketiga.
      </Text>

      <Text style={styles.judul}>Disclaimer garansi</Text>
      <Text style={styles.isi}>
        Anda setuju bahwa penggunaan Anda atas situs web atau layanan kami
        semata-mata merupakan risiko Anda sendiri. Anda setuju bahwa layanan
        tersebut disediakan dengan dasar "sebagaimana adanya" dan "sebagaimana
        tersedia". Kami secara tegas menyangkal semua jaminan dalam bentuk apa
        pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada
        jaminan tersirat tentang kelayakan untuk diperdagangkan, kesesuaian
        untuk tujuan tertentu, dan ketiadaan pelanggaran. Kami tidak memberikan
        jaminan bahwa layanan akan memenuhi kebutuhan Anda, atau bahwa layanan
        tidak akan terganggu, tepat waktu, aman, atau bebas dari kesalahan; Kami
        juga tidak membuat jaminan atas hasil yang dapat diperoleh dari
        penggunaan layanan atau untuk akurasi atau keandalan informasi yang
        diperoleh melalui layanan atau bahwa cacat dalam layanan akan
        diperbaiki. Anda memahami dan menyetujui bahwa setiap materi dan/atau
        data yang diunduh atau diperoleh melalui penggunaan Layanan dilakukan
        atas kebijaksanaan dan risiko Anda sendiri dan bahwa Anda akan
        bertanggung jawab sepenuhnya atas kerusakan pada sistem komputer Anda
        atau hilangnya data yang dihasilkan dari pengunduhan materi dan/atau
        data tersebut. Kami tidak membuat jaminan mengenai barang atau layanan
        apa pun yang dibeli atau diperoleh melalui layanan atau transaksi apa
        pun yang dilakukan melalui Layanan. Tidak ada saran atau informasi, baik
        lisan maupun tulisan, yang Anda peroleh dari kami atau melalui Layanan
        akan menciptakan jaminan yang tidak dibuat secara tersurat di sini.
      </Text>

      <Text style={styles.judul}>Batasan tanggung jawab</Text>
      <Text style={styles.isi}>
        Sejauh yang diizinkan oleh hukum yang berlaku, dalam keadaan apa pun CV.
        AYOKULAKAN, para afiliasi, pejabat, Direktur, karyawan, agen, pemasok
        atau pemberi lisensi bertanggung jawab kepada setiap orang untuk (a):
        setiap kerusakan tidak langsung, insidental, khusus, hukuman, penutup
        atau konsekuensial (termasuk, tanpa batasan, kerusakan untuk kehilangan
        keuntungan, pendapatan, penjualan, niat baik, penggunaan konten, dampak
        pada bisnis, gangguan Bisnis, kehilangan tabungan diantisipasi ,
        hilangnya peluang bisnis) namun disebabkan, berdasarkan teori tanggung
        jawab, termasuk, tanpa batasan, kontrak, wanprestasi, jaminan,
        pelanggaran kewajiban hukum, kelalaian atau sebaliknya, bahkan jika CV.
        AYOKULAKAN telah diberitahukan mengenai kemungkinan kerusakan tersebut
        atau dapat meramalkan kerusakan tersebut. Sejauh yang diizinkan oleh
        hukum yang berlaku, kewajiban agregat CV. AYOKULAKAN beserta
        afiliasinya, pejabat, karyawan, agen, pemasok dan pemberi lisensinya,
        yang berkaitan dengan layanan akan terbatas pada jumlah yang lebih besar
        dari satu dolar atau jumlah yang sebenarnya dibayarkan secara tunai oleh
        Anda ke CV. AYOKULAKAN untuk jangka waktu satu bulan sebelum kejadian
        pertama atau kejadian yang menimbulkan kewajiban tersebut. Keterbatasan
        dan pengecualian juga berlaku jika obat ini tidak sepenuhnya
        mengkompensasi Anda untuk setiap kerugian atau gagal dari tujuan
        penting.
      </Text>

      <Text style={styles.judul}>Ganti rugi</Text>
      <Text style={styles.isi}>
        Anda setuju untuk mengganti rugi dan memegang CV. AYOKULAKAN dan
        afiliasinya, Direktur, pejabat, karyawan, dan agen tidak berbahaya dari
        dan terhadap setiap kewajiban, kerugian, kerusakan atau biaya, termasuk
        biaya pengacara yang wajar, yang timbul sehubungan dengan atau yang
        timbul dari dugaan, klaim, tindakan, sengketa, atau tuntutan pihak
        ketiga yang dinyatakan terhadap salah satu dari mereka sebagai akibat
        dari atau terkait dengan konten Anda, penggunaan Anda atas situs web
        atau layanan, atau kesalahan yang disengaja pada bagian Anda.
      </Text>

      <Text style={styles.judul}>Keterpisahan</Text>
      <Text style={styles.isi}>
        Semua hak dan batasan yang terkandung dalam Perjanjian ini dapat
        dilaksanakan dan akan berlaku dan mengikat hanya sejauh mereka tidak
        melanggar hukum yang berlaku dan dimaksudkan untuk dibatasi sejauh yang
        diperlukan sehingga mereka tidak akan membuat Perjanjian ini ilegal,
        tidak valid atau tidak bisa diterapkan. Jika ada ketentuan atau bagian
        dari ketentuan apa pun dari Perjanjian ini akan dianggap ilegal, tidak
        valid atau tidak dapat dilaksanakan oleh pengadilan yang berwenang, itu
        adalah maksud para pihak bahwa ketentuan atau bagian yang tersisa
        daripadanya akan membentuk perjanjian mereka sehubungan dengan subjek
        dari Perjanjian ini, dan semua ketentuan yang tersisa atau bagiannya
        akan tetap berlaku sepenuhnya.
      </Text>

      <Text style={styles.judul}>Penyelesaian sengketa</Text>
      <Text style={styles.isi}>
        Pembentukan, interpretasi, dan kinerja dari Perjanjian ini dan setiap
        perselisihan yang timbul dari itu akan diatur oleh hukum substantif dan
        prosedural Indonesia tanpa memperhatikan aturan tentang konflik atau
        pilihan hukum dan, sejauh yang berlaku, hukum Indonesia. Yurisdiksi
        eksklusif dan tempat untuk tindakan yang berkaitan dengan materi pokok
        di sini adalah pengadilan yang berlokasi di Indonesia, dan dengan ini
        Anda tunduk pada yurisdiksi pribadi pengadilan tersebut. Anda dengan ini
        mengesampingkan hak apa pun atas pengadilan juri dalam proses hukum apa
        pun yang timbul dari atau terkait dengan perjanjian ini. Konvensi PBB
        tentang kontrak untuk penjualan barang internasional tidak berlaku untuk
        Perjanjian ini.
      </Text>

      <Text style={styles.judul}>Tugas</Text>
      <Text style={styles.isi}>
        Anda tidak diperkenankan untuk mengalihkan, menjual kembali,
        mensublisensikan, atau mengalihkan atau mendelegasikan hak atau
        kewajiban Anda berdasarkan Perjanjian ini, secara keseluruhan atau
        sebagian, tanpa persetujuan tertulis sebelumnya dari kami, yang mana
        persetujuan tersebut adalah atas kebijakan kami sendiri dan tanpa
        kewajiban; setiap penugasan atau pengalihan tersebut akan menjadi batal
        demi hukum. Kita bebas untuk menetapkan salah satu hak atau kewajiban
        berdasarkan Perjanjian ini, secara keseluruhan atau sebagian, kepada
        pihak ketiga sebagai bagian dari penjualan semua atau secara substansial
        semua aset atau saham atau sebagai bagian dari merger.
      </Text>

      <Text style={styles.judul}>Perubahan dan Amandemen</Text>
      <Text style={styles.isi}>
        Kami berhak untuk memodifikasi Perjanjian ini atau kebijakannya yang
        berkaitan dengan situs web atau layanan setiap saat, efektif setelah
        memposting versi terbaru dari Perjanjian ini di situs web. Ketika kami
        melakukannya, kami akan merevisi tanggal yang diperbarui di bagian bawah
        halaman ini. Terus menggunakan website setelah perubahan tersebut akan
        merupakan persetujuan Anda terhadap perubahan tersebut.
      </Text>

      <Text style={styles.judul}>Penerimaan persyaratan ini</Text>
      <Text style={styles.isi}>
        Anda mengakui bahwa Anda telah membaca Perjanjian ini dan menyetujui
        semua syarat dan ketentuannya. Dengan menggunakan situs web atau
        layanannya, Anda setuju untuk terikat dengan perjanjian ini. Jika Anda
        tidak setuju untuk mematuhi ketentuan Perjanjian ini, Anda tidak
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
