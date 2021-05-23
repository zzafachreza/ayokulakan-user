import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
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

export default function Pesawat({navigation, route}) {
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [kelas, setkelas] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [dewasa, setDewasa] = useState(0);
  const [anak, setAnak] = useState(0);
  const [bayi, setBayi] = useState(0);

  const cekPenerbangan = () => {
    const kirim = {};
  };

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

  useEffect(() => {
    axios.get('https://ayokulakan.com/api/darmawisata/rute').then((res) => {
      console.log('rute', res.data.result);
      const dataOld = res.data.result;
      const Tmp = [];
      Object.keys(dataOld).map((key) => {
        Tmp.push({
          id: dataOld[key].airport_code,
          name:
            dataOld[key].airport_code +
            ' - ' +
            dataOld[key].airport_name +
            ' ( ' +
            dataOld[key].location_name +
            ', ' +
            dataOld[key].country_name +
            ' )',
        });
      });
      setData(Tmp);
      console.log('tmp', Tmp);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 10,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Icon
              type="ionicon"
              name="airplane-outline"
              color={colors.primary}
            />
            <Text
              style={{
                left: 10,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              Dari
            </Text>
          </View>

          <SearchableDropdown
            onItemSelect={(item) => {
              console.log(item);
              setOrigin(item.id);
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              // backgroundColor: '#ddd',
              borderColor: colors.secondary,
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 10,
            }}
            itemTextStyle={{color: '#000', fontFamily: fonts.secondary[400]}}
            itemsContainerStyle={{maxHeight: 400}}
            containerStyle={{padding: 5}}
            items={data}
            textInputProps={{
              value: origin,
              placeholder: 'Dari Bandara',
              //   underlineColorAndroid: 'transparent',
              style: {
                padding: 12,
                // fontFamily: fonts.secondary[400],
                fontSize: 14,
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 10,
              },
              onTextChange: (text) => setOrigin(text),
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
          <MyGap jarak={10} />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Icon
              type="ionicon"
              name="airplane-outline"
              color={colors.primary}
            />
            <Text
              style={{
                left: 10,
                fontFamily: fonts.secondary[600],
                color: colors.primary,
              }}>
              Ke
            </Text>
          </View>

          <SearchableDropdown
            onItemSelect={(item) => {
              console.log(item);
              setDestination(item.id);
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              // backgroundColor: '#ddd',
              borderColor: colors.secondary,
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 10,
            }}
            itemTextStyle={{color: '#000', fontFamily: fonts.secondary[400]}}
            itemsContainerStyle={{maxHeight: 400}}
            containerStyle={{padding: 5}}
            items={data}
            textInputProps={{
              value: destination,
              placeholder: 'ke Bandara',
              //   underlineColorAndroid: 'transparent',
              style: {
                padding: 12,
                // fontFamily: fonts.secondary[400],
                fontSize: 14,
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 10,
              },
              onTextChange: (text) => setDestination(text),
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
          <MyGap jarak={10} />
          <MyPicker
            onValueChange={(val) => setkelas(val)}
            iconname="briefcase-outline"
            label="Kelas Kabin"
            data={[
              {
                value: 'Economy',
                label: 'Economy',
              },
              {
                value: 'Bussines',
                label: 'Bussines',
              },
              {
                value: 'First',
                label: 'First',
              },
            ]}
            value={kelas}
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
              name="calendar-outline"
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
                marginTop: 13,
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
            value={dewasa}
            label="Dewasa ( 12 Tahun + )"
            iconname="man-outline"
            onChangeText={(val) => setDewasa(val)}
          />
          <MyGap jarak={10} />
          <MyInput
            value={anak}
            label="Anak ( < 12 Tahun )"
            iconname="man-outline"
            onChangeText={(val) => setAnak(val)}
          />
          <MyGap jarak={10} />
          <MyInput
            value={bayi}
            label="Bayi ( < 2 Tahun )"
            iconname="man-outline"
            onChangeText={(val) => setBayi(val)}
          />
        </View>
        <MyGap jarak={10} />
        <MyButton
          onPress={cekPenerbangan}
          title="Lihat Jadwal Penerbangan"
          warna={colors.secondary}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
