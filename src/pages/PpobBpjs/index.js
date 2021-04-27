import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  Platform,
} from 'react-native';
import {MyInput, MyButton, MyGap} from '../../components';
import {colors, fonts} from '../../utils';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PpobBpjs() {
  const [key, setKey] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [data, setData] = useState([]);

  const [TanggalTarget, setTanggalTarget] = useState('');

  // datepicker

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    // alert(currentDate);

    const Today = new Date(currentDate);
    const dd = String(Today.getDate()).padStart(2, '0');
    const mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = Today.getFullYear();
    const jam = Today.getHours();
    const menit = Today.getMinutes();
    const detik = Today.getUTCSeconds();
    const today = `${dd}/${mm}/${yyyy}`;
    setTanggalTarget(today);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const __getData = () => {
    axios.get('https://ayokulakan.com/api/ppob/pdam').then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };
  const _cek = () => {
    alert('Tinggal Integrasi Payment');
  };

  useEffect(() => {
    __getData();
  }, []);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          // backgroundColor: 'red',
          padding: 10,
        }}>
        <MyInput
          value={key}
          autoFocus
          keyboardType="number-pad"
          label="Masukakn Nomor ID Pelanggan"
          iconname="calculator-outline"
          onChangeText={(value) => setKey(value)}
        />

        <MyGap jarak={10} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            format="YYYY-MM-DD"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <MyButton
          onPress={showDatepicker}
          warna={colors.primary}
          title="Pilih Bulan"
          Icons="calendar-outline"
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: 'flex-end',
          // backgroundColor: 'blue',
        }}>
        <MyButton onPress={_cek} warna={colors.secondary} title="CEK" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
