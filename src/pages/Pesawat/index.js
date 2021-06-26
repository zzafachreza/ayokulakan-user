import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
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
import {round} from 'react-native-reanimated';
export default function Pesawat({navigation, route}) {
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [kelas, setkelas] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [dewasa, setDewasa] = useState('1');
  const [anak, setAnak] = useState('0');
  const [bayi, setBayi] = useState('0');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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

    const urlFix = `https://ayokulakan.com/api/darmawisata/scheduleAllAirline?tripType=OneWay&origin=${origin}&destination=${destination}&departDate=${tanggal}&paxAdult=${dewasa}&paxChild=${anak}&paxInfant=${bayi}&airlineAccessCode=013819`;
    const test =
      'https://ayokulakan.com/api/darmawisata/scheduleAllAirline?tripType=OneWay&origin=CGK&destination=TJQ&departDate=2021-06-30&paxAdult=2&paxChild=1&paxInfant=0&airlineAccessCode=013819';
    axios.get(urlFix).then((res) => {
      setLoading(false);
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

  const [locationOrigin, setLocationOrigin] = useState('');
  const [locationDestination, setLocationDestination] = useState('');

  const [dataOrigin, setdataOrigin] = useState(false);
  const [keyOrigin, setKeyOrigin] = useState('aaa');
  const [labelOrigin, setLabelOrigin] = useState('Daerah Asal');

  const [dataDes, setDataDes] = useState(false);
  const [keyDes, setKeyDes] = useState('aaa');
  const [labelDes, setLabelDes] = useState('Daerah Tujuan');

  const getTanggalIndonesia = (x) => {
    let tgl = x.split('Z');
    return tgl[0];
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView
          style={{
            padding: 10,
            backgroundColor: '#F4F7FE',
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
            </>
          )}

          {hasil &&
            dataHasil.map((item) => {
              let maskapai = '';
              let logo = '';
              let arr = item.jiDepartTime.split('T');
              let JamTake = arr[1].substring(0, 5);
              let arr2 = item.jiArrivalTime.split('T');
              let JamLand = arr2[1].substring(0, 5);

              let hours = JamLand.split(':')[0] - JamTake.split(':')[0];
              let minutes = JamLand.split(':')[1] - JamTake.split(':')[1];

              let selisih = 0;
              let a = 0;
              if (JamTake <= '12:00' && JamLand >= '13:00') {
                a = 1;
              } else {
                a = 0;
              }
              minutes = minutes.toString().length < 2 ? '0' + minutes : minutes;
              if (minutes < 0) {
                hours--;
                minutes = 60 + minutes;
              }
              hours = hours.toString().length < 2 ? '0' + hours : hours;

              selisih = hours - a + ':' + minutes;

              switch (item.airlineID) {
                case 'JTB':
                  maskapai = 'Lion Air';
                  logo =
                    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/12/17/1dedfd4e-2f74-4fa9-a3f5-d238c74d3d72-1608152770164-b210808aea30c7543cab4380aca4c3ad.png';
                  break;
                case 'QG':
                  maskapai = 'Citilink Indonesia';
                  logo =
                    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/12/17/3deec547-980a-4d75-ac89-6e34eb9ddcf7-1608153225434-f5996f5af379dc69b93f00f8b725e579.png';

                  break;

                case 'QZ':
                  maskapai = 'Airasia Indonesia';
                  logo =
                    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/10/09/0fcd42f8-3ee7-45b1-aa99-00c62a17efec-1602237830043-0bb2929af8f2b97a9c3aecb9fe13f014.jpg';

                  break;
                case 'SJ':
                  maskapai = 'Sriwijaya Air';
                  logo =
                    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png';

                  break;
                case 'GA':
                  maskapai = 'Garuda Indonesia';
                  break;
                case 'ID':
                  maskapai = 'Batik Air';
                  logo =
                    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2020/12/17/4d7fa58c-a41f-4424-a599-7a2ccd27f270-1608152644158-75f5ada3c1800a50a7ba02a56ae2603b.png';

                  break;
                case 'IW':
                  maskapai = 'Wings Air';
                  break;

                default:
                  maskapai = item.airlineID;
                  break;
              }

              return (
                <TouchableOpacity
                  onPress={() => {
                    const send = {
                      logo: logo,
                      maskapai: maskapai,
                      jamOrigin: JamTake,
                      originCode: item.jiOrigin,
                      jamDestination: JamLand,
                      destinationCode: item.jiDestination,
                      selisih: selisih,
                      harga: item.sumPrice,
                      origin: locationOrigin,
                      destination: locationDestination,
                    };
                    console.log(send);
                    navigation.navigate('PesawatCheckout', send);
                  }}
                  style={{
                    borderRadius: 10,
                    backgroundColor: colors.white,

                    marginVertical: 10,
                    // borderWidth: 1,
                    elevation: 2,
                    padding: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Image
                      resizeMode="contain"
                      source={{uri: logo}}
                      style={{width: 25, height: 25, margin: 5}}
                    />
                    <Text style={{fontFamily: fonts.secondary[600]}}>
                      {maskapai}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <View>
                        <Text style={{fontFamily: fonts.secondary[600]}}>
                          {JamTake}
                        </Text>
                        <Text>{item.jiOrigin}</Text>
                      </View>
                      <View
                        style={{
                          width: 50,
                          marginHorizontal: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: 'gray',
                        }}>
                        <Text
                          style={{
                            fontFamily: fonts.secondary[400],
                            color: 'gray',
                            textAlign: 'center',
                          }}>
                          {selisih}
                        </Text>
                      </View>
                      <View>
                        <Text style={{fontFamily: fonts.secondary[600]}}>
                          {JamLand}
                        </Text>
                        <Text>{item.jiDestination}</Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.secondary,
                      }}>
                      {' '}
                      Rp. {new Intl.NumberFormat().format(item.sumPrice)}
                      <Text
                        style={{
                          color: 'gray',
                          fontFamily: fonts.secondary[400],
                        }}>
                        /pax
                      </Text>
                    </Text>
                  </View>
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
                      setLocationOrigin(item.location_name);
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
                      setLocationDestination(item.location_name);
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
