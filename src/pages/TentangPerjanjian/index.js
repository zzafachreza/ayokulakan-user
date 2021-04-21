import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {fonts} from '../../utils';

export default function TentangPerjanjian() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Text style={styles.judul}>Perjanjian AYOKULAKAN</Text>
      <Text style={styles.isi}>
        Perjanjian ini adalah kesepakatan antara CV. AYOKULAKAN dan Anda (User).
        Perjanjian ini menetapkan pedoman umum, syarat dan ketentuan penggunaan
        situs ayokulakan.com dan salah satu produk atau layanannya (secara
        kolektif, situs web atau Layanan).
      </Text>
      <Text style={styles.judul}>Representasi</Text>
      <Text style={styles.isi}>
        Setiap pandangan atau pendapat yang diwakili di situs web bersifat
        pribadi dan semata-mata milik CV. AYOKULAKAN dan tidak mewakili orang,
        lembaga atau organisasi yang pemiliknya mungkin atau mungkin tidak
        terkait dalam kapasitas profesional atau pribadi kecuali dinyatakan
        secara eksplisit. Setiap pandangan atau pendapat tidak dimaksudkan untuk
        memfitnah agama apapun, kelompok etnis, klub, organisasi, perusahaan,
        atau individu.
      </Text>
      <Text style={styles.judul}>Konten dan postingan</Text>
      <Text style={styles.isi}>
        Anda tidak diperkenankan mengubah, mencetak, atau menyalin bagian apa
        pun dari situs web. Penyertaan bagian mana pun dari situs web ini dalam
        karya lain, baik dalam bentuk cetak atau elektronik atau formulir lain
        atau penyertaan bagian mana pun dari situs web di situs web lain dengan
        menyematkan, membingkai, atau lainnya tanpa izin CV. AYOKULAKAN
        dilarang.
      </Text>
      <Text style={styles.isi}>
        Anda dapat mengirimkan komentar untuk konten yang tersedia di situs web.
        Dengan mengunggah atau menyediakan informasi apa pun kepada CV.
        AYOKULAKAN, Anda memberikan CV. AYOKULAKAN hak yang tidak terbatas dan
        terus-menerus untuk mendistribusikan, menampilkan, mempublikasikan,
        memperbanyak, menggunakan kembali dan menyalin informasi yang terkandung
        didalamnya. Anda tidak boleh meniru identitas orang lain melalui situs
        web. Anda tidak boleh memposting konten yang memfitnah, menipu, cabul,
        mengancam, invasif hak privasi orang lain atau yang melanggar hukum.
        Anda tidak boleh memposting konten yang melanggar hak kekayaan
        intelektual orang atau entitas lain. Anda tidak boleh memposting konten
        apa pun yang mencakup virus komputer atau kode lain yang dirancang untuk
        mengganggu, merusak, atau membatasi fungsi perangkat lunak atau
        perangkat keras komputer. Dengan mengirimkan atau memposting konten pada
        situs web, Anda memberikan CV. AYOKULAKAN hak untuk mengedit dan, jika
        perlu, menghapus setiap konten setiap saat dan untuk alasan apapun.
      </Text>
      <Text style={styles.judul}>Perjanjian kebugaran dan medis</Text>
      <Text style={styles.isi}>
        Informasi yang tersedia di website adalah untuk informasi kesehatan umum
        saja dan tidak dimaksudkan untuk menjadi pengganti nasihat medis
        profesional, diagnosis atau pengobatan. Anda tidak boleh bergantung
        secara eksklusif pada informasi yang disediakan di situs web untuk
        kebutuhan kesehatan mereka sendiri. Semua pertanyaan medis tertentu
        harus disampaikan kepada penyedia layanan kesehatan Anda sendiri dan
        Anda harus mencari nasihat medis mengenai kesehatan Anda dan sebelum
        memulai apapun gizi, berat badan atau jenis lain dari program latihan.
        Jika Anda memilih untuk menggunakan informasi yang tersedia di situs web
        tanpa konsultasi sebelumnya dengan dan persetujuan dari dokter Anda,
        Anda setuju untuk menerima tanggung jawab penuh atas keputusan Anda dan
        menyetujui untuk membebaskan CV. AYOKULAKAN, agen, karyawan, kontraktor,
        dan perusahaan afiliasi manapun dari segala tanggung jawab sehubungan
        dengan cedera atau penyakit kepada Anda atau properti Anda yang timbul
        dari atau berhubungan dengan penggunaan Anda atas informasi ini. Mungkin
        ada risiko yang terkait dengan berpartisipasi dalam kegiatan yang
        disajikan pada situs web untuk orang dalam kesehatan yang baik atau
        buruk atau dengan pra-ada kondisi kesehatan fisik atau mental. Jika Anda
        memilih untuk berpartisipasi dalam risiko ini, Anda melakukannya dari
        kehendak bebas Anda sendiri dan sesuai, secara sadar dan sukarela dengan
        asumsi semua risiko yang terkait dengan kegiatan tersebut. Hasil yang
        diperoleh dari informasi yang tersedia di situs web dapat bervariasi,
        dan akan didasarkan pada latar belakang individu Anda, kesehatan fisik,
        pengalaman sebelumnya, kapasitas, kemampuan untuk bertindak, motivasi
        dan variabel lainnya. Tidak ada jaminan mengenai tingkat keberhasilan
        yang mungkin Anda alami.
      </Text>

      <Text style={styles.judul}>Bukan nasihat hukum</Text>
      <Text style={styles.isi}>
        Informasi yang disediakan di situs web adalah untuk tujuan informasi
        umum saja dan bukan merupakan alternatif untuk nasihat hukum dari
        pengacara Anda, penyedia layanan profesional lainnya, atau ahli. Hal ini
        tidak dimaksudkan untuk memberikan nasihat hukum atau pendapat apapun.
        Anda tidak boleh bertindak, atau menahan diri dari bertindak, hanya
        berdasarkan informasi yang diberikan di situs web tanpa terlebih dahulu
        mencari nasihat hukum atau profesional yang sesuai. Jika Anda memiliki
        pertanyaan spesifik tentang masalah hukum, Anda harus berkonsultasi
        dengan pengacara Anda, penyedia layanan profesional lainnya, atau ahli.
        Anda tidak boleh menunda mencari nasihat hukum, mengabaikan nasihat
        hukum, atau memulai atau menghentikan tindakan hukum apa pun karena
        informasi di situs web. Informasi di situs web disediakan hanya untuk
        kenyamanan Anda. Informasi ini mungkin tidak memiliki nilai pembuktian
        dan harus diperiksa terhadap sumber resmi sebelum digunakan untuk tujuan
        apapun. Adalah tanggung jawab Anda untuk menentukan apakah informasi ini
        dapat diterima dalam persidangan peradilan atau administratif tertentu
        dan apakah ada persyaratan pembuktian atau pengarsipan lain. Penggunaan
        Anda atas informasi ini adalah risiko Anda sendiri.
      </Text>

      <Text style={styles.judul}>Bukan nasihat keuangan</Text>
      <Text style={styles.isi}>
        Informasi di Situs web disediakan hanya untuk kenyamanan Anda dan tidak
        dimaksudkan untuk diperlakukan sebagai keuangan, investasi, pajak, atau
        saran lainnya. Tidak ada yang terkandung di Situs Web yang merupakan
        ajakan, rekomendasi, dukungan, atau penawaran oleh CV. AYOKULAKAN,
        agennya, karyawan, kontraktor, dan perusahaan afiliasi apa pun untuk
        membeli atau menjual sekuritas atau instrumen keuangan lainnya. Semua
        Konten di situs ini adalah informasi yang bersifat umum dan tidak
        membahas keadaan individu atau entitas tertentu. Tidak ada sesuatu pun
        di Situs Web yang merupakan nasihat profesional dan / atau keuangan, dan
        informasi di Situs Web ini tidak merupakan pernyataan komprehensif atau
        lengkap dari hal-hal yang dibahas atau hukum yang berkaitan dengannya.
        Anda sendiri yang memikul tanggung jawab tunggal untuk mengevaluasi
        manfaat dan risiko yang terkait dengan penggunaan informasi apa pun atau
        konten lain di Situs Web sebelum membuat keputusan apa pun berdasarkan
        informasi tersebut. Anda setuju untuk tidak memiliki CV. AYOKULAKAN,
        agennya, karyawannya, kontraktornya, dan perusahaan terafiliasinya
        bertanggung jawab atas segala klaim kerusakan yang timbul dari keputusan
        apa pun yang Anda buat berdasarkan informasi yang disediakan untuk Anda
        melalui Situs web.
      </Text>

      <Text style={styles.judul}>Bukan saran investasi</Text>
      <Text style={styles.isi}>
        Semua investasi bersifat sangat spekulatif dan melibatkan risiko
        kerugian yang substansial. Kami mendorong semua orang untuk berinvestasi
        dengan sangat hati-hati. Kami juga mendorong investor untuk mendapatkan
        nasihat pribadi dari penasihat investasi profesional Anda dan melakukan
        penyelidikan independen sebelum bertindak berdasarkan informasi yang
        ditemukan di Situs Web. Kami tidak dengan cara apa pun menjamin atau
        menjamin keberhasilan tindakan apa pun yang Anda lakukan dengan
        mengandalkan pernyataan atau informasi yang tersedia di Situs Web.
        Kinerja masa lalu tidak selalu menunjukkan hasil di masa mendatang.
        Semua investasi membawa risiko signifikan dan semua keputusan investasi
        individu tetap menjadi tanggung jawab spesifik individu tersebut. Tidak
        ada jaminan bahwa sistem, indikator, atau sinyal akan menghasilkan
        keuntungan atau bahwa mereka tidak akan menghasilkan kerugian penuh atau
        sebagian. Semua investor disarankan untuk sepenuhnya memahami semua
        risiko yang terkait dengan jenis investasi apa pun yang mereka pilih
        untuk lakukan.Reviews and testimonials Testimoni diterima dalam berbagai
        bentuk melalui berbagai metode pengiriman. Mereka adalah pengalaman
        individu, yang mencerminkan pengalaman mereka yang telah menggunakan
        produk atau layanan di Situs Web dengan cara tertentu. Namun, mereka
        adalah hasil individual dan hasilnya sangat bervariasi. Kami tidak
        mengklaim bahwa itu adalah hasil khas yang umumnya dicapai konsumen.
        Kesaksian tidak selalu mewakili semua orang yang akan menggunakan produk
        atau layanan kami. CV. AYOKULAKAN tidak bertanggung jawab atas pendapat
        atau komentar yang diposting di Situs, dan tidak serta-merta
        membagikannya. Orang yang memberikan testimoni di Situs Web mungkin
        telah dikompensasi dengan produk atau diskon gratis untuk penggunaan
        pengalaman mereka. Semua pendapat yang dikemukakan sepenuhnya merupakan
        pandangan dari poster atau pengulas. Kesaksian yang ditampilkan
        diberikan kata demi kata kecuali untuk koreksi kesalahan tata bahasa
        atau pengetikan. Beberapa testimonial mungkin telah diedit untuk
        kejelasan, atau disingkat dalam kasus di mana testimonial asli termasuk
        informasi asing yang tidak ada relevansinya dengan masyarakat umum.
        Testimonial dapat ditinjau keasliannya sebelum diposting untuk dilihat
        publik.
      </Text>

      <Text style={styles.judul}>Ganti rugi dan jaminan</Text>
      <Text style={styles.isi}>
        CV. AYOKULAKAN menjamin keakuratan, keandalan, dan kelengkapan informasi
        dan konten pada, didistribusikan melalui atau ditautkan, diunduh atau
        diakses dari Situs Web ini. Selain itu, informasi yang terkandung di
        Situs Web dan halaman apa pun yang ditautkan ke dan darinya dapat
        berubah sewaktu-waktu dan tanpa peringatan. Kami berhak untuk mengubah
        Perjanjian ini terkait dengan Situs Web, produk atau layanan kapan saja,
        efektif setelah memposting versi terbaru Perjanjian ini di Situs Web.
        Ketika kami melakukannya, kami akan merevisi tanggal yang diperbarui di
        bagian bawah halaman ini. Terus menggunakan Situs Web setelah perubahan
        tersebut merupakan persetujuan Anda untuk perubahan tersebut.
      </Text>

      <Text style={styles.judul}>Penerimaan Perjanjian ini</Text>
      <Text style={styles.isi}>
        Anda mengakui bahwa Anda telah membaca Perjanjian ini dan menyetujui
        semua syarat dan ketentuannya. Dengan mengakses Situs Web Anda setuju
        untuk terikat oleh Perjanjian ini. Jika Anda tidak setuju untuk mematuhi
        ketentuan Perjanjian ini, Anda tidak berwenang untuk menggunakan atau
        mengakses Situs Web.
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
