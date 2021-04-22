import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, fonts} from '../../utils';
import axios from 'axios';

export default function PpobGame({navigation}) {
  const [voucher, setVoucher] = useState([
    {
      id: 13,
      code: 'Steam Sea',
      name: 'steam_sea',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:52:21',
      updated_at: '2019-06-27 16:45:54',
      type: 'game',
      deskripsi: null,
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/FAm5Ubm0QDkOIZlqWPolGiAfFCyDb84sYd8iYjnh.png',
    },
    {
      id: 12,
      code: 'PUBG (PC)',
      name: 'pubg',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:51:45',
      updated_at: '2019-06-27 16:46:14',
      type: 'game',
      deskripsi:
        '<span><span><h2 class="u-txt--bold u-mrgn-bottom--2">PUBG (PC)</h2> <p class="u-fg--ash-dark">PlayerUnknown\'s\r\n Battlegrounds (PUBG) adalah game online multiplayer bergenre battle \r\nroyale yang dikembangkan dan diterbitkan oleh PUBG Corporation.</p> <h2 class="u-txt--bold u-mrgn-bottom--2">Daftar Game</h2> <p class="u-fg--ash-dark">PUBG (PC)</p></span></span>',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/JNGCOynxgLyA9pIX7E9OgTsrYyCg7KCWMvBvow1T.png',
    },
    {
      id: 11,
      code: 'Megaxus',
      name: 'megaxus',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:51:09',
      updated_at: '2019-06-27 16:46:31',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/2CNO4h0LfsPZ1Cxa3jLOMf8thU7ru3EwEQGzDxzL.png',
      deskripsi:
        '<span><span><h2 class="u-txt--bold u-mrgn-bottom--2">Megaxus MI-Cash</h2> <p class="u-fg--ash-dark">Megaxus\r\n merupakan salah portal game online Indonesia yang sudah berdiri ditahun\r\n 2006 silam. Game yang diluncurkan oleh Megaxus menyajikan konsep \'life \r\nentertainment\'. Ayo isi ulang  voucher Megaxusmu dan mainkan berbagai \r\ngame online serunya</p> <h2 class="u-txt--bold u-mrgn-bottom--2">Daftar Game</h2> <p class="u-fg--ash-dark">Audition\r\n AyoDance, Counter Strike Online (CSO), AyoOke (Online Karaoke), Heroes \r\nof Atarsia, World in AyoDance, Royal Master dan Closers Online</p></span></span>',
    },
    {
      id: 10,
      code: 'Ituns Gift Card',
      name: 'itunes_gift_card_indonesia',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:50:45',
      updated_at: '2019-06-27 16:46:47',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/3ojI4VZHquZqhwIGLio35rCCsiDyR0mA7WNNJA22.png',
      deskripsi:
        '<span><span>iTunes Gift Card adalah voucher pengisian saldo iTunes \r\nWallet yang digunakan untuk membeli musik, film, TV show, buku, games, \r\naplikasi dan konten-konten menarik lainnya yang tersedia di iTunes \r\nStore, App Store, iBooks Store dan Mac App Store.</span></span>',
    },
    {
      id: 9,
      code: 'Free Fire',
      name: 'free_fire',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:50:14',
      updated_at: '2019-06-27 16:47:09',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/PGqF9rXW28siW44x3ojxZ7ny9se5MZpInH8ownW2.jpeg',
      deskripsi:
        '<span><span>Garena Free Fire adalah game bergenre survival tembak \r\nmenembak yang tersedia di Android dan juga iOS. Kamu akan berada di \r\npulau terpencil di mana kamu akan bertempur dengan 49 pemain lain untuk \r\nmencari kelangsungan hidup. </span></span>',
    },
    {
      id: 8,
      code: 'Wifi ID',
      name: 'wifi_id',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:49:33',
      updated_at: '2019-06-27 16:47:26',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/c3XuXIPEE4rurOcEDlIfEkdtl3eUDpo0bodM938B.png',
      deskripsi: null,
    },
    {
      id: 7,
      code: 'Mobile Legend',
      name: 'mobile_legend',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:48:52',
      updated_at: '2019-06-27 16:47:56',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/plrm3f99vcDm5U9Y3HOpaiZF8jJn29z8k4K0xWOz.png',
      deskripsi:
        '<span><span>Mobile Legends adalah game yang dirancang untuk ponsel.di \r\ndalam permainan kedua tim lawan berjuang untuk mencapai dan \r\nmenghancurkan basis musuh sambil mempertahankan basis mereka sendiri \r\ndengan karakter role hero yang beragam</span></span>',
    },
    {
      id: 6,
      code: 'Point Blank',
      name: 'point_blank',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:47:08',
      updated_at: '2019-06-27 16:48:16',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/b7xCo6RcHLsg0IT9R0NJaEndDNPIjhUx3Z2PsFM5.png',
      deskripsi:
        '<span><span>Point Blank (PB Online) merupakan salah satu online game FPS\r\n paling populer di Indonesia yang menantang dan kompetitif dengan \r\nmembeli voucher Point Blank pemain dapat membeli item aksesoris, senjata\r\n hingga kostumisasi karakter sehingga menambah kemampuan dalam game</span></span>',
    },
    {
      id: 5,
      code: 'Gemschool',
      name: 'gemscool',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:46:47',
      updated_at: '2019-06-27 16:48:36',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/YY4OTy987rSKigZYt33qHnUWwgyr2KiU163BMMsy.png',
      deskripsi:
        '<span><span><p class="u-fg--ash-dark">Voucher G-Cash bisa kamu gunakan \r\nuntuk memainkan berbagai game online seru dan menikmati berbagai konten \r\nmenarik lainnya dari Gemschool.</p> <h2 class="u-txt--bold u-mrgn-bottom--2">Daftar Game</h2> <p class="u-fg--ash-dark">Age\r\n of Wushu, Atlantica Online, Cabal Online, Crazy Shooter, Dizzel Online,\r\n Dragon Nest, Kart Rider Online Indonesia, Lost Saga, Tales Hero, \r\nYulgang Online dan lain-lain</p></span></span>',
    },
    {
      id: 4,
      code: 'Google Play',
      name: 'google_play_indonesia',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:46:23',
      updated_at: '2019-06-27 16:48:56',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/pPH0us9TYAMNDBlZNX3ogKjlmPC2Efji10NazlXt.png',

      deskripsi: null,
    },
    {
      id: 3,
      code: 'Garena',
      name: 'garena',
      status: '-',
      created_by: 71,
      updated_by: 20,
      created_at: '2019-06-23 02:45:50',
      updated_at: '2019-06-27 16:49:14',
      type: 'game',
      image:
        'https://ayokulakan.com/storage/img_ppob_provider/FAm5Ubm0QDkOIZlqWPolGiAfFCyDb84sYd8iYjnh.png',
      deskripsi:
        '<span><span><p class="u-fg--ash-dark">Garena, platform game online milik\r\n Forrest Li, memiliki mata uang online sendiri berupa Garena Shell yang \r\ndapat kamu isi ulang untuk membeli produk game dan/atau in-games dari \r\nGarena.</p> <h2 class="u-txt--bold u-mrgn-bottom--2">Daftar Game</h2> <p class="u-fg--ash-dark">Arena of Valor, Free Fire, Contra Return, FIFA Online 3, League of Legends, dan lain-lain.</p></span></span>',
    },
  ]);

  useEffect(() => {
    // _getData();
  });

  // const _getData = () => {
  //   axios
  //     .get(
  //       'https://ayokulakan.com/api/ppob/provider?type=game&limit=0&includes=attachments',
  //     )
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setVoucher(res.data.data);
  //     });
  // };
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          padding: 10,
        }}>
        {voucher.map((item) => {
          // let uri = '';
          // if (item.attachments[0]) {
          //   uri = 'https://ayokulakan.com/storage/' + item.attachments[0].url;
          // } else {
          //   uri = 'https://ayokulakan.com/img/no-images.png';
          // }

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('PpobGameDetail', item)}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.title}>{item.code}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.primary,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontFamily: fonts.secondary[600],
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 3,
  },
});
