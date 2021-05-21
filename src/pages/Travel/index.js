import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  MyInput,
  MyPicker,
  MyDatePicker,
  MyGap,
  MyButton,
} from '../../components';
import axios from 'axios';
import {colors, fonts, getData} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon} from 'react-native-elements';

export default function Travel({navigation, route}) {
  const [travel, setTravel] = useState('');
  const [rute, setRute] = useState('');
  const [tiket, setTiket] = useState(0);
  const [tanggal, setTanggal] = useState('');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataTravel, setDataTravel] = useState([]);
  const [dataRute, setDataRute] = useState([]);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  const __getData = (val) => {
    setLoading(true);
    axios
      .get(
        'https://ayokulakan.com/api/ppob/provider/filter?value=' +
          nomor.substring(0, 4) +
          '&type=data',
      )
      .then((res) => {
        console.log('data data', res.data.data);
        setData(res.data.data);
        setLoading(false);
      });
  };

  const getDataTravel = () => {
    axios.get('https://ayokulakan.com/api/darmawisata/travel').then((res) => {
      const oldData = res.data.data.shuttles;
      const data = [];
      Object.keys(oldData).map((key) => {
        data.push({
          value: oldData[key].id,
          label: oldData[key].name,
        });
      });
      setDataTravel(data);
    });
  };

  const getRute = (val) => {
    // alert(val);
    setTravel(val);
    axios
      .get('https://ayokulakan.com/api/darmawisata/travel/schedule/' + val)
      .then((res) => {
        const oldData = res.data.data.routes;
        const data = [];
        Object.keys(oldData).map((key) => {
          data.push({
            value: oldData[key].directionID,
            label:
              oldData[key].originCity +
              '( ' +
              oldData[key].origin +
              ' ) - ' +
              oldData[key].destinationCity +
              '( ' +
              oldData[key].destination +
              ' )',
          });
        });
        setDataRute(data);
      });
  };

  const [user, setUsers] = useState({});
  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        alert('Anda Harus Login Terlebih dahulu !');
        navigation.navigate('Account');
      } else {
        setUsers(res);
        getDataTravel();
      }
    });
  }, []);

  const kirimData = () => {
    const kirim = {
      shuttleID: travel,
      departDate: tanggal,
      totalTicket: tiket,
      directionID: rute,
      accessToken: '3abff8323558113807c47c8a5d4797e8',
    };

    console.log('kirim travel', kirim);
    navigation.navigate('TravelDetail', kirim);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
        }}>
        <MyPicker
          onValueChange={(val) => getRute(val)}
          iconname="bus"
          label="List Travel"
          data={dataTravel}
          value={travel}
        />
        <MyGap jarak={10} />

        <MyPicker
          onValueChange={(val) => setRute(val)}
          label="List Rute"
          data={dataRute}
          value={rute}
        />
        <MyGap jarak={10} />

        <MyInput
          iconname="layers"
          keyboardType="number-pad"
          value={tiket}
          label="Total Tiket"
          onChangeText={(value) => setTiket(value)}
        />
        <MyGap jarak={10} />
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
            Tanggal
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
        <MyButton
          title="CEK TIKET"
          warna={colors.secondary}
          onPress={kirimData}
        />
      </View>
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
