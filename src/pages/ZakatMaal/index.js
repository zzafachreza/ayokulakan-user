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
import {setLoading} from '../../redux';

export default function ZakatMaal() {
  const [tabungan, settabungan] = useState(0);
  const [logam_mulia, setlogam_mulia] = useState(0);
  const [property_kendaraan, setproperty_kendaraan] = useState(0);
  const [harta_lainya, setharta_lainya] = useState(0);
  const [hutang_jatuh_tempo, sethutang_jatuh_tempo] = useState(0);
  const [emas, setemas] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const [hasil, setHasil] = useState([
    {
      besar_nisab_maal: 0,
      total: 0,
      hasil_nisab_maal: 0,
      wajib_zakat_maal: 0,
    },
  ]);

  const data = {
    tabungan: tabungan,
    logam_mulia: logam_mulia,
    property_kendaraan: property_kendaraan,
    harta_lainya: harta_lainya,
    hutang_jatuh_tempo: hutang_jatuh_tempo,
    emas: emas,
  };

  const masuk = () => {
    console.log('kirim', data);

    axios.post('https://ayokulakan.com/api/zakat/maal', data).then((res) => {
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
                Hasil Zakat Maal Anda
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                Pendapatan Bersih : Rp.{' '}
                {new Intl.NumberFormat().format(hasil.besar_nisab_maal)}
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                Besar Nishab : Rp.{' '}
                {new Intl.NumberFormat().format(parseFloat(hasil.total))}
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                {hasil.hasil_nisab_maal}
              </Text>
              <MyGap jarak={10} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[400],
                }}>
                Jumlah Zakat :{' '}
                {new Intl.NumberFormat().format(
                  parseFloat(
                    hasil.wajib_zakat_maal.replace('Jumlah Zakat : ', ''),
                  ),
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
        Salurkan Zakat Maal Anda!
      </Text>

      <Text
        style={{
          fontSize: 12,
          textAlign: 'left',
          fontFamily: fonts.secondary[400],
        }}>
        1. Zakat maal untuk properti dan kendaraan tidak kena zakat kecuali yang
        digunakan usaha seperti disewakan/dibuat kosan atau digunakan apa saja
        yang menghasilkan.
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'left',
          fontFamily: fonts.secondary[400],
        }}>
        2. Zakat mall untuk pertanian/perpanenan dengan irigasi dikenakan zakat
        sebesar 5%.
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'left',
          fontFamily: fonts.secondary[400],
        }}>
        3. Zakat mall untuk pertanian/perpanenan tadah hujan dikenakan zakat
        sebesar 10%
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: 'left',
          fontFamily: fonts.secondary[400],
        }}>
        4. Zakat Maal khusus untuk harta yang{' '}
        <Text style={{fontFamily: fonts.secondary[600]}}>
          telah tersimpan selama lebih dari 1 tahun (haul) dan mencapai batas
          tertentu (nisab)
        </Text>
      </Text>
      <MyGap jarak={20} />
      <MyInput
        label="Tabungan / Giro / Deposito"
        keyboardType="numeric"
        value={tabungan}
        onChangeText={(value) => settabungan(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Logam Mulia atau sejenisnya"
        keyboardType="numeric"
        value={logam_mulia}
        onChangeText={(value) => setlogam_mulia(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Nilai properti & kendaraan"
        keyboardType="numeric"
        value={property_kendaraan}
        onChangeText={(value) => setproperty_kendaraan(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Harta Lainnya"
        keyboardType="numeric"
        value={harta_lainya}
        onChangeText={(value) => setharta_lainya(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Hutang Jatuh Tempo"
        keyboardType="numeric"
        value={hutang_jatuh_tempo}
        onChangeText={(value) => sethutang_jatuh_tempo(value)}
      />
      <MyGap jarak={20} />
      <MyInput
        label="Harga Emas /gr"
        keyboardType="numeric"
        value={emas}
        onChangeText={(value) => setemas(value)}
      />
      <MyGap jarak={10} />

      <TouchableOpacity
        onPress={masuk}
        style={{
          backgroundColor: '#16A858',
          height: 45,
          borderRadius: 10,
          marginVertical: 20,
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
