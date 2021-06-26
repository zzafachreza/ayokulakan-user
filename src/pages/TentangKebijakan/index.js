import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {fonts, colors} from '../../utils';

export default function TentangKebijakan() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Text style={styles.judul}>
        Kebijakan Privasi <Text style={{color: colors.secondary}}>AYO</Text>
        <Text style={{color: colors.primary}}>KULAKAN</Text>
      </Text>
      <Text style={styles.isi}>
        Kebijakan Privasi ini menjelaskan bagaimana CV. AYOKULAKAN mengumpulkan,
        melindungi dan menggunakan informasi pribadi Anda (User) dan dapat
        menyediakan dalam aplikasi mobile ayokulakan dan setiap produk atau jasa
        (secara kolektif, "aplikasi mobile" atau "Layanan"). Hal ini juga
        menjelaskan pilihan yang tersedia bagi Anda mengenai penggunaan
        informasi pribadi Anda dan bagaimana Anda dapat mengakses dan
        memperbarui informasi ini. Kebijakan ini tidak berlaku untuk praktik
        perusahaan yang tidak kami miliki atau kendalikan, atau kepada individu
        yang tidak kami pekerjakan atau kelola.
      </Text>
      <Text style={styles.judul}>Pengumpulan informasi otomatis</Text>
      <Text style={styles.isi}>
        Ketika Anda membuka aplikasi mobile server kami secara otomatis merekam
        informasi yang dikirim perangkat Anda. Data ini dapat mencakup informasi
        seperti alamat IP dan lokasi perangkat Anda, nama dan versi perangkat,
        jenis dan versi sistem operasi, preferensi bahasa, informasi yang Anda
        Cari di aplikasi seluler kami, waktu akses, dan tanggal, serta Statistik
        lainnya. Informasi yang dikumpulkan secara otomatis hanya digunakan
        untuk mengidentifikasi potensi kasus pelecehan dan membuat informasi
        statistik mengenai lalu lintas aplikasi mobile dan penggunaan. Informasi
        statistik ini tidak sebaliknya digabungkan sedemikian rupa yang akan
        mengidentifikasi pengguna tertentu dari sistem.
      </Text>

      <Text style={styles.judul}>Pengumpulan informasi pribadi</Text>
      <Text style={styles.isi}>
        Anda dapat mengunjungi aplikasi mobile tanpa memberitahu kami siapa Anda
        atau mengungkapkan informasi apapun dengan mana seseorang bisa
        mengidentifikasi Anda sebagai spesifik, individu yang dapat
        diidentifikasi. Namun, jika Anda ingin menggunakan beberapa fitur
        aplikasi mobile, Anda akan diminta untuk memberikan informasi pribadi
        tertentu (misalnya, nama dan alamat email Anda). Kami menerima dan
        menyimpan informasi yang Anda berikan kepada kami secara sengaja saat
        Anda membuat akun, melakukan pembelian, atau mengisi formulir online apa
        pun di aplikasi seluler. Bila diperlukan, informasi ini dapat meliputi
        berikut ini :
      </Text>
      <Text style={styles.subJudul}>
        ● Rincian pribadi seperti nama, negara kediaman, dll.
      </Text>
      <Text style={styles.subJudul}>
        ● Informasi kontak seperti alamat email, alamat, dll.
      </Text>
      <Text style={styles.subJudul}>
        ● Rincian akun seperti nama pengguna, user ID unik, password, dll.
      </Text>
      <Text style={styles.subJudul}>
        ● Bukti identitas seperti Fotokopi KTP pemerintah.
      </Text>
      <Text style={styles.subJudul}>
        ● Informasi pembayaran seperti rincian kartu kredit, rincian bank, dll.
      </Text>
      <Text style={styles.subJudul}>
        ● Data geolokasi dari perangkat seluler seperti garis lintang dan garis
        bujur.
      </Text>
      <Text style={styles.subJudul}>
        ● Fitur tertentu pada perangkat mobile seperti kontak, kalender, Galeri,
        dll.
      </Text>

      <Text style={styles.subJudul}>
        Anda dapat memilih untuk tidak memberikan informasi pribadi Anda kepada
        kami, tetapi kemudian Anda mungkin tidak dapat mengambil keuntungan dari
        beberapa fitur aplikasi mobile. Pengguna yang tidak yakin tentang
        informasi apa yang wajib dipersilahkan untuk menghubungi kami.
      </Text>

      <Text style={styles.judul}>Mengelola informasi pribadi</Text>
      <Text style={styles.isi}>
        Anda dapat menghapus informasi pribadi tertentu yang kami miliki tentang
        Anda. Informasi pribadi yang dapat Anda hapus dapat berubah karena
        perubahan aplikasi seluler atau layanan. Namun, bila Anda menghapus
        informasi pribadi, kami dapat menyimpan salinan informasi pribadi yang
        tidak direvisi dalam catatan kami selama durasi yang diperlukan untuk
        mematuhi kewajiban kami kepada afiliasi dan mitra kami, dan untuk tujuan
        yang dijelaskan di bawah ini. Jika Anda ingin menghapus informasi
        pribadi Anda atau menghapus akun Anda secara permanen, Anda dapat
        melakukannya pada halaman pengaturan akun Anda di aplikasi mobile.
      </Text>

      <Text style={styles.judul}>Menyimpan informasi pribadi</Text>
      <Text style={styles.isi}>
        Kami akan menyimpan dan menggunakan informasi pribadi Anda untuk jangka
        waktu yang diperlukan untuk mematuhi kewajiban hukum kami, menyelesaikan
        sengketa, dan menegakkan Perjanjian kami kecuali jika periode retensi
        lebih lama diperlukan atau diizinkan oleh hukum. Kami dapat menggunakan
        data agregat apa pun yang berasal dari atau menggabungkan informasi
        pribadi Anda setelah Anda memperbarui atau menghapusnya, tetapi tidak
        dengan cara yang akan mengidentifikasi Anda secara pribadi. Setelah
        periode retensi berakhir, informasi pribadi akan dihapus. Oleh karena
        itu, hak untuk mengakses, hak untuk menghapus, hak untuk rektifikasi dan
        hak untuk data portabilitas tidak dapat diberlakukan setelah berakhirnya
        periode retensi.
      </Text>

      <Text style={styles.judul}>
        Penggunaan dan pemrosesan informasi yang dikumpulkan
      </Text>
      <Text style={styles.isi}>
        Dalam rangka untuk membuat aplikasi mobile kami dan layanan yang
        tersedia untuk Anda, atau untuk memenuhi kewajiban hukum, kami perlu
        mengumpulkan dan menggunakan informasi pribadi tertentu. Jika Anda tidak
        memberikan informasi yang kami minta, kami mungkin tidak dapat
        menyediakan produk atau layanan yang diminta kepada Anda. Beberapa
        informasi yang kami kumpulkan langsung dari Anda melalui aplikasi mobile
        kami. Namun, kami juga dapat mengumpulkan informasi pribadi tentang Anda
        dari sumber lain seperti media sosial, email, dll. Setiap informasi yang
        kami kumpulkan dari Anda dapat digunakan untuk tujuan berikut :
      </Text>

      <Text style={styles.subJudul}>● Membuat dan mengelola akun pengguna</Text>
      <Text style={styles.subJudul}>● Memenuhi dan kelola pesanan</Text>
      <Text style={styles.subJudul}>● memberikan produk atau layanan</Text>
      <Text style={styles.subJudul}>● Meningkatkan produk dan layanan</Text>
      <Text style={styles.subJudul}>● Kirim informasi administrasi</Text>
      <Text style={styles.subJudul}>
        ● Kirim komunikasi pemasaran dan promosi
      </Text>
      <Text style={styles.subJudul}>
        ● Menanggapi pertanyaan dan menawarkan dukungan
      </Text>

      <Text style={styles.subJudul}>● Minta umpan balik pengguna</Text>
      <Text style={styles.subJudul}>● Tingkatkan pengalaman pengguna</Text>
      <Text style={styles.subJudul}>● Posting testimonial pelanggan</Text>
      <Text style={styles.subJudul}>● Memberikan iklan bertarget</Text>
      <Text style={styles.subJudul}>
        ● Mengelola undian hadiah dan kompetisi
      </Text>
      <Text style={styles.subJudul}>
        ● Menegakkan syarat dan ketentuan dan kebijakan
      </Text>
      <Text style={styles.subJudul}>
        ● Lindungi dari penyalahgunaan dan pengguna jahat
      </Text>
      <Text style={styles.subJudul}>
        ● Menanggapi permintaan hukum dan mencegah bahaya
      </Text>
      <Text style={styles.subJudul}>
        ● Jalankan dan operasikan Aplikasi dan Layanan Seluler kamiProcessing
        your Personal
      </Text>
      <Text style={styles.subJudul}>
        Informasi tergantung pada bagaimana Anda berinteraksi dengan Aplikasi
        Seluler kami, di mana Anda berada di dunia dan jika salah satu dari yang
        berikut ini berlaku:
      </Text>

      <Text style={styles.subJudul}>
        (i) Anda telah memberikan persetujuan Anda untuk satu atau beberapa
        tujuan spesifik. Namun, ini tidak berlaku, kapan pun pemrosesan
        Informasi Pribadi tunduk pada Undang- Undang Privasi Konsumen dan
        Undang-Undang Perlindungan Data.
      </Text>
      <Text style={styles.subJudul}>
        (ii) Penyediaan informasi diperlukan untuk pelaksanaan perjanjian dengan
        Anda dan / atau untuk kewajiban pra-kontraknya.
      </Text>
      <Text style={styles.subJudul}>
        (iii) Pemrosesan diperlukan untuk kepatuhan dengan kewajiban hukum yang
        menjadi subjek Anda.
      </Text>
      <Text style={styles.subJudul}>
        (iv) Pemrosesan terkait dengan tugas yang dilakukan untuk kepentingan
        publik atau dalam menjalankan wewenang resmi yang berada di tangan kami.
      </Text>
      <Text style={styles.subJudul}>
        (v) Pemrosesan diperlukan untuk tujuan kepentingan sah yang dilakukan
        oleh kami atau oleh pihak ketiga.
      </Text>
      <Text style={styles.subJudul}>
        Perhatikan bahwa di bawah beberapa undang-undang kami mungkin diizinkan
        untuk memproses informasi sampai Anda keberatan dengan pemrosesan
        tersebut (dengan memilih tidak), tanpa harus bergantung pada persetujuan
        atau basis hukum berikut di bawah ini. Dalam hal apa pun, kami akan
        dengan senang hati menjelaskan dasar hukum spesifik yang berlaku untuk
        pemrosesan, dan khususnya apakah penyediaan Informasi Pribadi merupakan
        persyaratan hukum atau kontrak, atau persyaratan yang diperlukan untuk
        masuk ke dalam kontrak.
      </Text>

      <Text style={styles.judul}>Transfer dan penyimpanan informasi</Text>
      <Text style={styles.isi}>
        Bergantung pada lokasi Anda, transfer data mungkin melibatkan pemindahan
        dan penyimpanan informasi Anda di negara selain negara Anda. Anda berhak
        mempelajari dasar hukum transfer informasi ke negara lain atau ke
        organisasi internasional yang diatur oleh hukum internasional publik
        atau yang didirikan oleh dua atau lebih negara, seperti PBB, dan tentang
        langkah- langkah keamanan yang diambil oleh kami untuk menjaga informasi
        Anda. Jika ada transfer seperti itu terjadi, Anda dapat mengetahui lebih
        lanjut dengan memeriksa bagian yang relevan dari dokumen ini atau
        bertanya kepada kami menggunakan informasi yang disediakan di bagian
        kontak.
      </Text>

      <Text style={styles.judul}>Hak-hak Pengguna</Text>
      <Text style={styles.isi}>
        Anda dapat menggunakan hak tertentu mengenai informasi Anda yang
        diproses oleh kami. Secara khusus, Anda memiliki hak untuk melakukan
        hal-hal berikut:
      </Text>
      <Text style={styles.subJudul}>
        (i) Anda memiliki hak untuk menarik persetujuan di mana sebelumnya Anda
        telah memberikan izin untuk pemrosesan informasi Anda;
      </Text>
      <Text style={styles.subJudul}>
        (ii) Anda memiliki hak untuk menolak pemrosesan informasi Anda jika
        pemrosesan dilakukan atas dasar hukum selain persetujuan;
      </Text>
      <Text style={styles.subJudul}>
        (iii) Anda memiliki hak untuk mengetahui apakah informasi sedang
        diproses oleh kami, mendapatkan pengungkapan mengenai aspek-aspek
        tertentu dari pemrosesan dan mendapatkan salinan dari informasi yang
        sedang diproses;
      </Text>
      <Text style={styles.subJudul}>
        (iv) Anda memiliki hak untuk memverifikasi keakuratan informasi Anda dan
        memintanya diperbarui atau diperbaiki;
      </Text>
      <Text style={styles.subJudul}>
        (v) Anda memiliki hak, dalam keadaan tertentu, untuk membatasi
        pemrosesan informasi Anda, dalam hal ini, kami tidak akan memproses
        informasi Anda untuk tujuan apa pun selain menyimpannya;
      </Text>
      <Text style={styles.subJudul}>
        (vi) Anda memiliki hak, dalam keadaan tertentu, untuk mendapatkan
        penghapusan Informasi Pribadi Anda dari kami;
      </Text>
      <Text style={styles.subJudul}>
        (vii) Anda memiliki hak untuk menerima informasi Anda dalam format yang
        terstruktur, umum digunakan dan dapat dibaca mesin dan, jika secara
        teknis memungkinkan, untuk mengirimkannya ke pengontrol lain tanpa
        hambatan. Ketentuan ini berlaku dengan ketentuan bahwa informasi Anda
        diproses dengan cara otomatis dan bahwa pemrosesan didasarkan pada
        persetujuan Anda, pada kontrak yang menjadi bagian Anda atau pada
        kewajiban pra-kontraknya. Hak untuk menolak pemrosesan.
      </Text>
      <Text style={styles.subJudul}>
        Jika Informasi Pribadi diproses untuk kepentingan publik, dalam
        pelaksanaan otoritas resmi yang diberikan kepada kami atau untuk tujuan
        kepentingan sah yang kami lakukan, Anda dapat keberatan dengan
        pemrosesan tersebut dengan memberikan landasan terkait dengan situasi
        khusus Anda untuk membenarkan keberatan. Anda harus tahu bahwa, jika
        Informasi Pribadi Anda diproses untuk tujuan pemasaran langsung, Anda
        dapat keberatan dengan pemrosesan itu kapan saja tanpa memberikan alasan
        apa pun. Untuk mengetahui, apakah kami memproses Informasi Pribadi untuk
        tujuan pemasaran langsung, Anda dapat merujuk ke bagian yang relevan
        dari dokumen ini.
      </Text>

      <Text style={styles.judul}>Cara menggunakan hak-hak ini</Text>
      <Text style={styles.isi}>
        Segala permintaan untuk menggunakan hak Pengguna dapat diarahkan ke CV.
        AYOKULAKAN melalui detail kontak yang disediakan dalam dokumen ini.
        Permintaan ini dapat dilakukan secara gratis dan akan ditangani oleh CV.
        AYOKULAKAN sedini mungkin.
      </Text>

      <Text style={styles.judul}>Hak privasi</Text>
      <Text style={styles.isi}>
        Selain hak-hak sebagaimana dijelaskan dalam Kebijakan Privasi ini,
        masyarakat yang memberikan Informasi Pribadi (sebagaimana didefinisikan
        dalam undang-undang) untuk mendapatkan produk atau layanan untuk
        penggunaan pribadi, keluarga, atau rumah tangga berhak meminta dan
        memperoleh dari kami, setelah kalender tahun, informasi tentang
        Informasi Pribadi yang kami bagikan, jika ada, dengan bisnis lain untuk
        penggunaan pemasaran. Jika berlaku, informasi ini akan mencakup kategori
        Informasi Pribadi dan nama dan alamat bisnis yang kami bagikan informasi
        pribadi tersebut untuk tahun kalender segera sebelum (misalnya,
        permintaan yang dibuat pada tahun berjalan akan menerima informasi
        tentang tahun sebelumnya) . Untuk mendapatkan informasi ini, silakan
        hubungi kami.
      </Text>
      <Text style={styles.judul}>Penagihan dan pembayaran</Text>
      <Text style={styles.isi}>
        Kami menggunakan pemroses pembayaran pihak ketiga untuk membantu kami
        memproses informasi pembayaran Anda dengan aman. Penggunaan informasi
        pribadi Anda oleh pihak ketiga tersebut diatur oleh kebijakan privasi
        masing-masing yang mungkin atau mungkin tidak mengandung perlindungan
        privasi yang protektif seperti Kebijakan Privasi ini. Kami menyarankan
        Anda meninjau kebijakan privasi masing-masing.
      </Text>

      <Text style={styles.judul}>Melaporkan Pelanggaran</Text>
      <Text style={styles.isi}>
        Jika Anda telah menemukan dan ingin melaporkan pelanggaran kebijakan
        ini, silahkan hubungi kami segera. Kami akan menyelidiki situasi dan
        memberi Anda bantuan penuh.
      </Text>

      <Text style={styles.judul}>Penyedia produk dan layanan</Text>
      <Text style={styles.isi}>
        Kami dapat membuat kontrak dengan perusahaan lain untuk menyediakan
        produk dan layanan tertentu. Penyedia layanan ini tidak berwenang untuk
        menggunakan atau mengungkapkan informasi kecuali sebagaimana diperlukan
        untuk melakukan layanan atas nama kami atau mematuhi persyaratan hukum.
        Kami dapat membagikan Informasi Pribadi untuk tujuan ini hanya dengan
        pihak ketiga yang kebijakan privasinya konsisten dengan kebijakan kami
        atau yang setuju untuk mematuhi kebijakan kami sehubungan dengan
        Informasi Pribadi Penyedia layanan kami diberikan informasi yang mereka
        butuhkan untuk melakukan fungsi yang telah ditentukan, dan kami jangan
        beri wewenang kepada mereka untuk menggunakan atau mengungkapkan
        Informasi Pribadi untuk tujuan pemasaran mereka sendiri atau lainnya.
      </Text>
      <Text style={styles.judul}>Privasi anak-anak</Text>
      <Text style={styles.isi}>
        Kami tidak secara sadar mengumpulkan Informasi Pribadi apa pun dari
        anak-anak di bawah usia 16 tahun. Jika Anda berusia di bawah 16 tahun,
        jangan mengirimkan Informasi Pribadi apa pun melalui Aplikasi atau
        Layanan Seluler kami. Kami mendorong orang tua dan wali hukum untuk
        memantau penggunaan Internet anak-anak mereka dan untuk membantu
        menegakkan Kebijakan ini dengan menginstruksikan anak-anak mereka untuk
        tidak pernah memberikan Informasi Pribadi melalui Aplikasi atau Layanan
        Seluler kami tanpa izin mereka. Jika Anda memiliki alasan untuk meyakini
        bahwa seorang anak di bawah usia 16 tahun telah memberikan Informasi
        Pribadi kepada kami melalui Aplikasi atau Layanan Seluler kami, silakan
        hubungi kami. Anda juga harus berusia setidaknya 16 tahun untuk
        menyetujui pemrosesan Informasi Pribadi Anda di negara Anda (di beberapa
        negara kami memungkinkan orang tua atau wali Anda melakukannya atas nama
        Anda).
      </Text>

      <Text style={styles.judul}>Nawala</Text>
      <Text style={styles.isi}>
        Kami menawarkan buletin elektronik di mana Anda dapat secara sukarela
        berlangganan kapan saja. Kami berkomitmen untuk menjaga kerahasiaan
        alamat email Anda dan tidak akan mengungkapkan alamat email Anda kepada
        pihak ketiga mana pun kecuali sebagaimana diizinkan dalam bagian
        penggunaan dan pemrosesan informasi atau untuk tujuan memanfaatkan
        penyedia pihak ketiga untuk mengirim email tersebut. Kami akan menjaga
        informasi yang dikirim melalui email sesuai dengan hukum dan peraturan
        yang berlaku. Sesuai dengan CAN-SPAM Act, semua e-mail yang dikirim dari
        kami akan dengan jelas menyatakan dari siapa e-mail itu berasal dan
        memberikan informasi yang jelas tentang cara menghubungi pengirim
      </Text>

      <Text style={styles.judul}>Pemasaran ulang</Text>
      <Text style={styles.isi}>
        Kami juga dapat mengizinkan perusahaan pihak ketiga tertentu untuk
        membantu kami menyesuaikan iklan yang menurut kami mungkin menarik bagi
        pengguna dan untuk mengumpulkan dan menggunakan data lain tentang
        aktivitas pengguna dalam Aplikasi Seluler. Perusahaan-perusahaan ini
        dapat menayangkan iklan yang mungkin menempatkan cookie dan melacak
        perilaku pengguna.
      </Text>

      <Text style={styles.judul}>Tautan ke aplikasi seluler lainnya</Text>
      <Text style={styles.isi}>
        Aplikasi Seluler kami berisi tautan ke aplikasi seluler lain yang tidak
        dimiliki atau dikendalikan oleh kami. Perlu diketahui bahwa kami tidak
        bertanggung jawab atas praktik privasi aplikasi seluler lain atau pihak
        ketiga tersebut. Kami mendorong Anda untuk waspada ketika Anda
        meninggalkan Aplikasi Seluler kami dan membaca pernyataan privasi
        masing-masing dan setiap aplikasi seluler yang dapat mengumpulkan
        Informasi Pribadi.
      </Text>

      <Text style={styles.judul}>Informasi keamanan</Text>
      <Text style={styles.isi}>
        Kami mengamankan informasi yang Anda berikan di server komputer dalam
        lingkungan yang terkendali dan aman, terlindung dari akses, penggunaan,
        atau pengungkapan yang tidak sah. Kami menjaga pengamanan administrasi,
        teknis, dan fisik yang wajar dalam upaya melindungi terhadap akses,
        penggunaan, modifikasi, dan pengungkapan Informasi Pribadi yang tidak
        sah dalam kendali dan pengawasannya. Namun, tidak ada transmisi data
        melalui Internet atau jaringan nirkabel yang dapat dijamin. Karena itu,
        sementara kami berupaya melindungi Informasi Pribadi Anda, Anda mengakui
        bahwa :
      </Text>
      <Text style={styles.subJudul}>
        (i) ada batasan keamanan dan privasi dari Internet yang berada di luar
        kendali kami.
      </Text>
      <Text style={styles.subJudul}>
        (ii) keamanan, integritas, dan privasi dari setiap dan semua informasi
        dan data yang dipertukarkan antara Anda dan Aplikasi Seluler kami tidak
        dapat dijamin. dan
      </Text>
      <Text style={styles.subJudul}>
        (iii) informasi dan data tersebut dapat dilihat atau dirusak dalam
        perjalanan oleh pihak ketiga, meskipun ada upaya terbaik.
      </Text>

      <Text style={styles.judul}>Pelanggaran data</Text>
      <Text style={styles.isi}>
        Jika kami mengetahui bahwa keamanan Aplikasi Seluler telah dikompromikan
        atau informasi Pribadi pengguna telah diungkapkan kepada pihak ketiga
        yang tidak terkait sebagai akibat dari aktivitas eksternal, termasuk,
        tetapi tidak terbatas pada, serangan keamanan atau penipuan, kami berhak
        untuk mengambil langkah-langkah yang pantas secara wajar, termasuk,
        tetapi tidak terbatas pada, penyelidikan dan pelaporan, serta
        pemberitahuan dan kerja sama dengan otoritas penegak hukum. Dalam hal
        terjadi pelanggaran data, kami akan melakukan upaya yang wajar untuk
        memberi tahu orang-orang yang terkena dampak jika kami percaya bahwa ada
        risiko yang wajar akan merugikan pengguna sebagai akibat dari
        pelanggaran atau jika pemberitahuan sebaliknya diharuskan oleh hukum.
        Ketika kami melakukannya, kami akan memposting pemberitahuan di Aplikasi
        Seluler, mengirimi Anda email, menghubungi Anda melalui telepon,
        mengirimkan surat kepada Anda.
      </Text>

      <Text style={styles.judul}>Pengungkapan hukum</Text>
      <Text style={styles.isi}>
        Jika kami mengalami transisi bisnis, seperti merger atau akuisisi oleh
        perusahaan lain, atau penjualan semua atau sebagian asetnya, akun
        pengguna Anda, dan Informasi Pribadi kemungkinan akan berada di antara
        aset yang ditransfer.
      </Text>

      <Text style={styles.judul}>Perubahan dan amandemen</Text>
      <Text style={styles.isi}>
        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu atas
        kebijakan kami dan akan memberi tahu Anda tentang setiap perubahan
        materi dengan cara kami memperlakukan Informasi Pribadi. Ketika
        perubahan dilakukan, kami akan mengirimkan Anda email untuk memberi tahu
        Anda. Kami juga dapat memberikan pemberitahuan kepada Anda dengan cara
        lain dalam kebijaksanaan kami, seperti melalui informasi kontak yang
        Anda berikan. Setiap versi terbaru dari Kebijakan Privasi ini akan
        efektif segera setelah posting Kebijakan Privasi yang direvisi kecuali
        dinyatakan sebaliknya. Kelanjutan penggunaan Aplikasi atau Layanan
        Seluler Anda setelah tanggal efektif Kebijakan Privasi yang direvisi
        (atau tindakan lain yang disebutkan pada waktu itu) akan merupakan
        persetujuan Anda terhadap perubahan tersebut. Namun, kami tidak akan,
        tanpa persetujuan Anda, menggunakan Data Pribadi Anda dengan cara yang
        berbeda dari apa yang dinyatakan pada saat Data Pribadi Anda
        dikumpulkan.
      </Text>
      <Text style={styles.judul}>Penerimaan kebijakan ini</Text>
      <Text style={styles.isi}>
        Anda mengakui bahwa Anda telah membaca Kebijakan ini dan menyetujui
        semua syarat dan ketentuannya. Dengan menggunakan Aplikasi Seluler atau
        Layanannya, Anda setuju untuk terikat oleh Kebijakan ini. Jika Anda
        tidak setuju untuk mematuhi ketentuan Kebijakan ini, Anda tidak
        berwenang untuk menggunakan atau mengakses Aplikasi Seluler dan
        Layanannya.
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
