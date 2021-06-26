import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {colors, fonts} from '../../utils';
import axios from 'axios';
import {Icon} from 'react-native-elements';
import {MyGap, MyPicker, MyInput, MyButton} from '../../components';
import 'intl';
import 'intl/locale-data/jsonp/en';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export default function Bus() {
  const dataBus = [
    {
      label: 'All PO',
      value: 'All PO',
    },
    {
      label: 'Kramat Djati',
      value: 'Kramat Djati',
    },
    {
      label: 'Pahala Kencana',
      value: 'Pahala Kencana',
    },
    {
      label: 'Tiara Mas',
      value: 'Tiara Mas',
    },
  ];

  const [bus, setBus] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dewasa, setDewasa] = useState(0);
  const [anak, setAnak] = useState(0);
  const [bayi, setBayi] = useState(0);

  const [rute, setRute] = useState('');
  const [bukaRute, setBukaRute] = useState(false);
  const [dataRute, setDataRute] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const Today = new Date(currentDate);
    const dd = String(Today.getDate()).padStart(2, '0');
    const mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = Today.getFullYear();
    const jam = Today.getHours();
    const menit = Today.getMinutes();
    const detik = Today.getUTCSeconds();
    const today = `${yyyy}-${mm}-${dd}`;
    setTanggal(today);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const cekRute = () => {
    setBukaRute(true);
  };

  useEffect(() => {
    // console.log(Myrute.data.routes);
    // setRute(Myrute.data.routes);
  }, []);

  const getRute = () => {
    setLoading(true);

    console.log(rute);
    axios
      .post('https://ayokulakan.com/v1/api/rute_bus', {
        key: rute,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setDataRute(res.data);
      });
  };

  return (
    <SafeAreaView
      style={{
        padding: 10,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon
            type="ionicon"
            name="calendar"
            color={colors.primary}
            size={16}
          />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            Tanggal Keberangkatan
          </Text>
        </View>
        <TouchableOpacity
          onPress={showDatepicker}
          style={{
            borderColor: colors.border,
            borderRadius: 10,
            borderWidth: 1,
            height: 50,
            paddingLeft: 10,
            fontSize: 18,
            fontFamily: fonts.primary[400],
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              marginTop: 10,
              color: colors.secondary,
            }}>
            {tanggal}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <MyGap jarak={10} />
        <MyInput
          label="Jumlah Penumpang Dewasa"
          iconname="person"
          keyboardType="number-pad"
          value={dewasa}
          onChangeText={(val) => setDewasa(val)}
        />
        <MyGap jarak={10} />
        <MyInput
          label="Jumlah Penumpang Anak"
          iconname="person"
          keyboardType="number-pad"
          value={anak}
          onChangeText={(val) => setAnak(val)}
        />
        <MyGap jarak={10} />
        <MyInput
          label="Jumlah Penumpang Balita"
          iconname="person"
          keyboardType="number-pad"
          value={bayi}
          onChangeText={(val) => setBayi(val)}
        />

        <MyInput
          label="Cari kemudian Pilih Rute"
          iconname="bus"
          value={rute}
          onChangeText={(val) => setRute(val)}
          onSubmitEditing={getRute}
        />

        <View style={{padding: 10}}>
          {dataRute.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const kirim = {
                    tanggal: tanggal,
                    dewasa: dewasa,
                    anak: anak,
                    bayi: bayi,
                  };
                }}
                style={{
                  marginVertical: 5,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  borderColor: colors.secondary,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.secondary[400],
                  }}>
                  {item.originTerminal} - {item.destinationTerminal}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <MyGap jarak={10} />
      </ScrollView>
      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#FFF',
            width: '100%',
            top: 0,
            opacity: 0.7,
            height: '100%',
          }}>
          <ActivityIndicator color="#16A858" size="large" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
