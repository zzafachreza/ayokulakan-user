import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
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
export default function Pesawat({navigation, route}) {
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [kelas, setkelas] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [dewasa, setDewasa] = useState(0);
  const [anak, setAnak] = useState(0);
  const [bayi, setBayi] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [hasil, setHasil] = useState(false);
  const [dataHasil, setDataHasil] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const cekPenerbangan = () => {
    const kirim = {
      tripType: 'OneWay',
      origin: origin,
      destination: destination,
      paxAdult: dewasa,
      paxChild: anak,
      paxInfant: bayi,
      departDate: tanggal,
      airlineAccessCode: '013819',
    };
    console.log(
      'kirim',
      `https://ayokulakan.com/api/darmawisata/scheduleAllAirline?tripType=OneWay&origin=${origin}&destination=${destination}&departDate=${tanggal}&paxAdult=${dewasa}&paxChild=${anak}&paxInfant=${bayi}&airlineAccessCode=013819`,
    );
    axios
      .get(
        `https://ayokulakan.com/api/darmawisata/scheduleAllAirline?tripType=OneWay&origin=${origin}&destination=${destination}&departDate=${tanggal}&paxAdult=${dewasa}&paxChild=${anak}&paxInfant=${bayi}&airlineAccessCode=013819`,
      )
      .then((res) => {
        console.log(res.data.data.journeyDepart);
        setHasil(true);
        setDataHasil(res.data.data.journeyDepart);
      });
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

  // useEffect(() => {
  //   axios.get('https://ayokulakan.com/api/darmawisata/rute').then((res) => {
  //     console.log('rute', res.data.result);
  //     const dataOld = res.data.result;
  //     const Tmp = [];
  //     Object.keys(dataOld).map((key) => {
  //       Tmp.push({
  //         id: dataOld[key].airport_code,
  //         name:
  //           dataOld[key].airport_code +
  //           ' - ' +
  //           dataOld[key].airport_name +
  //           ' ( ' +
  //           dataOld[key].location_name +
  //           ', ' +
  //           dataOld[key].country_name +
  //           ' )',
  //       });
  //     });
  //     setData(Tmp);
  //     console.log('tmp', Tmp);
  //   });
  // }, []);

  const [dataOrigin, setdataOrigin] = useState(false);
  const [keyOrigin, setKeyOrigin] = useState('aaa');
  const [labelOrigin, setLabelOrigin] = useState('Daerah Asal');

  const [dataDes, setDataDes] = useState(false);
  const [keyDes, setKeyDes] = useState('aaa');
  const [labelDes, setLabelDes] = useState('Daerah Tujuan');

  return (
    <>
      <SafeAreaView>
        <ScrollView
          style={{
            padding: 10,
          }}>
          {!hasil && (
            <>
              <View>
                <TouchableNativeFeedback onPress={toggleModal}>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 20,
                      borderWidth: 1,
                      height: 45,
                      borderRadius: 10,
                      borderColor: colors.primary,
                      color: colors.primary,
                      flexDirection: 'row',
                      fontSize: 18,
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        flex: 2,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Light',
                          fontSize: 18,
                          color: colors.primary,
                        }}>
                        {labelOrigin}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        paddingRight: 20,
                      }}>
                      <Icon
                        type="font-awesome"
                        name="search"
                        color={colors.primary}
                        size={18}
                      />
                    </View>
                  </View>
                </TouchableNativeFeedback>

                <MyGap jarak={20} />
                <TouchableNativeFeedback onPress={toggleModal2}>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 20,
                      borderWidth: 1,
                      height: 45,
                      borderRadius: 10,
                      borderColor: colors.secondary,
                      color: colors.secondary,
                      flexDirection: 'row',
                      fontSize: 18,
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        flex: 2,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Light',
                          fontSize: 18,
                          color: colors.secondary,
                        }}>
                        {labelDes}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        paddingRight: 20,
                      }}>
                      <Icon
                        type="font-awesome"
                        name="search"
                        color={colors.primary}
                        size={18}
                      />
                    </View>
                  </View>
                </TouchableNativeFeedback>
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
            </>
          )}

          {hasil &&
            dataHasil.map((item) => {
              return (
                <TouchableOpacity
                  style={{
                    marginVertical: 10,
                    borderWidth: 1,
                    padding: 10,
                  }}>
                  <Text>{item.airlineID}</Text>
                  <Text>
                    {item.jiDepartTime} - {item.jiArrivalTime}
                  </Text>
                  <Text>
                    {item.jiOrigin} - {item.jiDestination}
                  </Text>
                  <Text>
                    {' '}
                    Rp. {new Intl.NumberFormat().format(item.sumPrice)}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </SafeAreaView>

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, backgroundColor: colors.white, padding: 10}}>
          <MyInput
            autoFocus
            label="Dari"
            onChangeText={(val) => {
              axios
                .get(
                  'https://ayokulakan.com/api/darmawisata/rute?location_name=' +
                    val,
                )
                .then((res) => {
                  console.log(res.data.result);
                  setKeyOrigin(res.data.result);
                  setdataOrigin(true);
                });
            }}
          />
          <View style={{marginTop: 10}}>
            {dataOrigin &&
              keyOrigin.map((item) => {
                return (
                  <TouchableNativeFeedback
                    onPress={() => {
                      console.log(item);
                      setModalVisible(false);
                      setOrigin(item.airport_code);
                      setLabelOrigin(
                        item.airport_code + ' - ' + item.airport_name,
                      );
                    }}>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: colors.primary,
                        marginVertical: 5,
                        padding: 10,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 16,
                          }}>
                          {item.location_name}
                          {', '}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 16,
                          }}>
                          {item.country_name}
                        </Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: 12,
                          }}>
                          {item.airport_code}
                          {' - '}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: 12,
                          }}>
                          {item.airport_name}
                        </Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                );
              })}
          </View>
        </View>

        <MyButton title="Tutup" warna={colors.primary} onPress={toggleModal} />
      </Modal>

      <Modal isVisible={isModalVisible2}>
        <View style={{flex: 1, backgroundColor: colors.white, padding: 10}}>
          <MyInput
            autoFocus
            label="Ke"
            onChangeText={(val) => {
              axios
                .get(
                  'https://ayokulakan.com/api/darmawisata/rute?location_name=' +
                    val,
                )
                .then((res) => {
                  console.log(res.data.result);
                  setKeyDes(res.data.result);
                  setDataDes(true);
                });
            }}
          />
          <View style={{marginTop: 10}}>
            {dataDes &&
              keyDes.map((item) => {
                return (
                  <TouchableNativeFeedback
                    onPress={() => {
                      console.log(item);
                      setModalVisible2(false);
                      setDestination(item.airport_code);
                      setLabelDes(
                        item.airport_code + ' - ' + item.airport_name,
                      );
                    }}>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: colors.primary,
                        marginVertical: 5,
                        padding: 10,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 16,
                          }}>
                          {item.location_name}
                          {', '}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 16,
                          }}>
                          {item.country_name}
                        </Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: 12,
                          }}>
                          {item.airport_code}
                          {' - '}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: 12,
                          }}>
                          {item.airport_name}
                        </Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                );
              })}
          </View>
        </View>

        <MyButton title="Tutup" warna={colors.primary} onPress={toggleModal2} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
