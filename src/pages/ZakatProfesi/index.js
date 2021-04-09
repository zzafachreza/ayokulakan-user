import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import {fonts, colors} from '../../utils';
import {MyGap, MyInput, MyButton} from '../../components';
import CurrencyInput from 'react-currency-input-field';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function ZakatProfesi() {
  const [gaji_perbulan, setGajiPerbulan] = useState(0);
  const [pendapatan_lain, setPendapatanLain] = useState(0);
  const [hutang, setHutang] = useState(0);
  const [beras, setBeras] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [hasil, setHasil] = useState([
    {
      pendapatan: 0,
      besat_nishab: 0,
      hasil_nisab: 0,
      wajib_zakat: 0,
    },
  ]);

  const data = {
    gaji_perbulan: gaji_perbulan,
    pendapatan_lain: pendapatan_lain,
    hutang: hutang,
    beras: beras,
  };

  const masuk = () => {
    console.log('kirim', data);

    axios.post('https://ayokulakan.com/api/zakat/profesi', data).then((res) => {
      console.log(res);
      setHasil(res.data);
      setModalVisible(true);
    });
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}>
      {modalVisible && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  fontFamily: fonts.secondary[400],
                }}>
                Hasil Zakat Profesi Anda
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                Pendapatan Bersih : Rp.{' '}
                {new Intl.NumberFormat().format(hasil.pendapatan)}
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                Besar Nishab : Rp.{' '}
                {new Intl.NumberFormat().format(parseFloat(hasil.besar_nishab))}
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                {hasil.hasil_nisab}
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                Jumlah Zakat :{' '}
                {new Intl.NumberFormat().format(
                  parseFloat(hasil.wajib_zakat.replace('Jumlah Zakat : ', '')),
                )}
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Tutup</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontFamily: fonts.secondary[400],
        }}>
        Ayo hitung zakat profesi Anda!
      </Text>
      <MyGap jarak={20} />
      <MyInput
        label="Pendapatan perbulan (Wajib diisi)"
        keyboardType="numeric"
        value={gaji_perbulan}
        onChangeText={(value) => setGajiPerbulan(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Pendapatan lain (jika ada)"
        keyboardType="numeric"
        value={pendapatan_lain}
        onChangeText={(value) => setPendapatanLain(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Hutang/Cicilan (jika ada)"
        keyboardType="numeric"
        value={hutang}
        onChangeText={(value) => setHutang(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Harga Beras /Kg :"
        keyboardType="numeric"
        value={beras}
        onChangeText={(value) => setBeras(value)}
      />
      <MyGap jarak={10} />

      <TouchableOpacity
        onPress={masuk}
        style={{
          backgroundColor: '#16A858',
          height: 45,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          // paddingLeft: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            left: -10,
            // paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="wallet" color="#FFF" size={20} />
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color: '#FFF',
              left: 10,
              fontSize: 16,
            }}>
            HITUNG ZAKAT ANDA
          </Text>
        </View>
      </TouchableOpacity>
      <MyGap jarak={20} />

      <View style={{paddingVertical: 10}}>
        <Image
          source={{
            uri: 'https://ayokulakan.com/img/YayasanKesejahteraanUmat.jpg',
          }}
          style={{width: 150, height: 150, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontFamily: fonts.secondary[600],
          }}>
          Zakat & Infaq
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: fonts.secondary[400],
            marginVertical: 10,
          }}>
          Ayo Zakat Sekarang "Ambillah zakat dari sebagian harta mereka karena
          dengan zakat itu kamu membersihkan dan mensucikan mereka", (QS.
          at-Taubah : 103).
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: fonts.secondary[400],
            marginVertical: 10,
          }}>
          ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ * الَّذِينَ
          يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ
          يُنْفِقُونَ
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: fonts.secondary[400],
            marginVertical: 10,
          }}>
          "Kitab (Al-Qur’an) ini tidak ada keraguan padanya, petunjuk bagi
          mereka yang bertakwa, (2) (yaitu) mereka yang beriman kepada yang
          gaib, menegakkan shalat, dan menginfakkan sebagian rezeki yang Kami
          berikan kepada mereka. (3) – (Q.S Al-Baqarah: 2-3)"
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            fontFamily: fonts.secondary[600],
          }}>
          YAYASAN KESEJAHTERAAN UMAT BANYUWANGI
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fontFamily: fonts.secondary[400],
          }}>
          SK Menteri Hukum dan HAM RI : No. AHU-0002845.AH.01.04 Tahun 2018
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fontFamily: fonts.secondary[400],
          }}>
          Yritan Nomor 315, RT.02/RW.06, Genteng, Kabupaten Banyuwangi, Jawa
          Timur.
        </Text>

        <View
          style={{
            marginVertical: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: colors.primary,
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 12,
              maxWidth: 200,
              textAlign: 'center',
              color: '#FFF',
              fontFamily: fonts.secondary[400],
            }}>
            Kontak
          </Text>
          <Text
            style={{
              fontSize: 12,
              maxWidth: 200,
              textAlign: 'center',
              color: '#FFF',
              fontFamily: fonts.secondary[400],
            }}>
            0822-1622-2162
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fontFamily: fonts.secondary[400],
            // marginVertical: 20,
            marginBottom: 10,
          }}>
          Pembayaran dapat melalui Bank Syariah Mandiri (BSM) No Rek 7117266901*
          atas nama YAYASAN KESEJAHTERAAN UMAT BWI Kode Bank 451.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: colors.primary,
  },
  buttonClose: {
    backgroundColor: colors.secondary,
    margin: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'center',
  },
});
