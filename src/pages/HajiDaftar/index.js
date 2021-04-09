import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import {fonts, colors, getData} from '../../utils';
import {MyInput, MyGap, MyButton} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import HTML from 'react-native-render-html';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setMessege, setUsers} from '../../redux';

export default function HajiDaftar({navigation}) {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigate('Account');
      } else {
        setUser(res);
        setDataKirim({
          ...dataKirim,
          user_id: res.id,
        });
      }
    });
    getDataAll();
  }, []);

  const [dataKirim, setDataKirim] = useState({
    user_id: '',
    name: '',
    id_paket: '',
    id_jadwal: '',
    nik: '',
    kk: '',
    keterangan_penyakit: '',
    passport: '',
  });

  const daftar = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      console.log(dataKirim);
      dispatch(setLoading(false));
      navigation.replace('MainApp');
      alert('Anda berhasil mendaftar !');
    }, 1500);
  };

  const contentWidth = useWindowDimensions().width;
  const [itemSelected, setItemSelected] = useState([]);
  const [itemOK, setItemOK] = useState(false);

  const [foto1, setfoto1] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto2, setfoto2] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto3, setfoto3] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto4, setfoto4] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto5, setfoto5] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto6, setfoto6] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto7, setfoto7] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto8, setfoto8] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );

  const options = {
    title: 'Ayokulakan',
    takePhotoButtonTitle: 'Ambil foto dengan kamera',
    chooseFromLibraryButtonTitle: 'Ambil foto dari galeri',
  };

  const getUpload = (xyz) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        let source = {uri: response.uri};

        switch (xyz) {
          case 1:
            setfoto1(`data:${response.type};base64, ${response.data}`);
            break;
          case 2:
            setfoto2(`data:${response.type};base64, ${response.data}`);
            break;
          case 3:
            setfoto3(`data:${response.type};base64, ${response.data}`);
            break;
          case 4:
            setfoto4(`data:${response.type};base64, ${response.data}`);
            break;
          case 5:
            setfoto5(`data:${response.type};base64, ${response.data}`);
            break;
          case 6:
            setfoto6(`data:${response.type};base64, ${response.data}`);
            break;
          case 7:
            setfoto7(`data:${response.type};base64, ${response.data}`);
            break;
          case 8:
            setfoto8(`data:${response.type};base64, ${response.data}`);
            break;
        }
      }
    });
  };

  const getDataAll = () => {
    axios
      .get('https://ayokulakan.com/api/hajiumroh/haji-jadwal?limit=0')
      .then((res) => {
        const dataOld = res.data.data;
        const data = [];
        Object.keys(dataOld).map((key) => {
          data.push({
            label: dataOld[key].judul,
            value: dataOld[key],
          });
        });

        console.log(data);
        setDataPaket(data);
      });
  };

  const [dataPaket, setDataPaket] = useState([]);

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

  const UploadFoto = ({onPress, label, foto}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 10,
          backgroundColor: colors.white,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'gray',
        }}>
        <Text style={styles.subjudulUpload}>{label}</Text>
        <Image
          source={{
            uri: foto,
          }}
          style={{
            width: '100%',
            aspectRatio: 1.5,
          }}
          resizeMode="center"
        />
      </TouchableOpacity>
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
              textAlign: 'center',
            }}>
            Formulir daftar haji dan umroh
          </Text>
          <MyInput label="Nama Pemesan" value={user.username} />
          <MyGap jarak={5} />
          <MyInput
            label="Nama Peserta"
            placeholder="Nama Peserta"
            value={dataKirim.name}
            onChangeText={(value) =>
              setDataKirim({
                ...dataKirim,
                name: value,
              })
            }
          />
          <MyGap jarak={5} />
          <MyInput
            label="NIK"
            placeholder="NIK"
            keyboardType="number-pad"
            value={dataKirim.nik}
            onChangeText={(value) =>
              setDataKirim({
                ...dataKirim,
                nik: value,
              })
            }
          />
          <MyGap jarak={5} />
          <MyInput
            label="No.KK"
            placeholder="No.KK"
            keyboardType="number-pad"
            value={dataKirim.kk}
            onChangeText={(value) =>
              setDataKirim({
                ...dataKirim,
                kk: value,
              })
            }
          />
          <MyGap jarak={5} />
          <MyInput
            label="No.Passport"
            placeholder="No.Passport"
            value={dataKirim.passport}
            onChangeText={(value) =>
              setDataKirim({
                ...dataKirim,
                passport: value,
              })
            }
          />
          <MyGap jarak={5} />
          <MyInput
            label="Keterangan Penyakit"
            placeholder="Keterangan Penyakit"
            multiline
            value={dataKirim.keterangan_penyakit}
            onChangeText={(value) =>
              setDataKirim({
                ...dataKirim,
                keterangan_penyakit: value,
              })
            }
          />
          <MyGap jarak={5} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                color: colors.primary,
                left: 10,
                fontSize: 16,
              }}>
              Pilih Paket & Jadwal Keberangkatan
            </Text>
          </View>
          <DropDownPicker
            searchable={true}
            searchablePlaceholder="Pilih Paket & Jadwal Keberangkatan"
            searchablePlaceholderTextColor="gray"
            items={dataPaket}
            // defaultValue={}
            containerStyle={{height: 50}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => {
              console.log(item.value);
              setItemSelected(item.value);
              setItemOK(true);
              setDataKirim({
                ...dataKirim,
                id_paket: item.value.id,
                id_jadwal: item.value.id,
              });
            }}
          />

          {itemOK && (
            <View
              style={{
                padding: 10,
                backgroundColor: colors.white,
                marginVertical: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: colors.primary,
              }}>
              <Text style={styles.judul}>{itemSelected.judul}</Text>
              <Text style={styles.subjudul}>Paket : </Text>
              <Text style={styles.subjudul}>
                Tanggal Keberangkatan : {itemSelected.tgl_berangkat}{' '}
              </Text>
              <Text style={styles.subjudul}>
                Tanggal Kepulangan : {itemSelected.tgl_pulang}
              </Text>
              <Text style={styles.subjudul}>
                Total Hari : {itemSelected.total_hari}
              </Text>
              <Text style={styles.subjudul}>
                Harga : {itemSelected.harga}/USD
              </Text>
              <View
                style={{
                  marginVertical: 5,
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                }}
              />
              <HTML
                source={{html: itemSelected.keterangan}}
                contentWidth={contentWidth}
              />
            </View>
          )}

          <UploadFoto
            onPress={() => getUpload(1)}
            label="Upload Foto Copy Dokumen Passport"
            foto={foto1}
          />
          <UploadFoto
            onPress={() => getUpload(2)}
            label="Upload Foto Copy Dokumen Buku Suntik Miningitis Asli"
            foto={foto2}
          />
          <UploadFoto
            onPress={() => getUpload(3)}
            label="Upload Foto Fokus Wajah Background Putih (Ukuran 4x6)"
            foto={foto3}
          />
          <UploadFoto
            onPress={() => getUpload(4)}
            label="Upload Foto Copy Buku Menikah (Jika Sudah Menikah)"
            foto={foto4}
          />

          <UploadFoto
            onPress={() => getUpload(5)}
            label="Upload Foto Copy Akte Lahir (Jika Usia Dibawah 16 Tahun)"
            foto={foto5}
          />
          <UploadFoto
            onPress={() => getUpload(6)}
            label="Upload Foto Copy Dokumen KTP"
            foto={foto6}
          />
          <UploadFoto
            onPress={() => getUpload(7)}
            label="Upload Foto Copy Dokumen KK"
            foto={foto7}
          />
          <UploadFoto
            onPress={() => getUpload(8)}
            label="Upload Foto Copy Surat Bukti Keterangan Hamil (Jika Perempuan Sedang Mengandung)"
            foto={foto8}
          />
          <MyGap jarak={10} />
          <MyButton warna={colors.primary} title="DAFTAR" onPress={daftar} />
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
  subjudul: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    marginVertical: 5,
  },
  subjudulUpload: {
    fontSize: 12,
    fontFamily: fonts.secondary[600],
    marginVertical: 5,
  },
});
