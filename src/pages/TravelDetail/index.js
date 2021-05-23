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

export default function TravelDetail({navigation, route}) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const kirim = route.params;
  console.log('detail kirim', kirim);

  useEffect(() => {
    axios
      .get(
        `https://ayokulakan.com/api/darmawisata/travel/schedule?shuttleID=${kirim.shuttleID}&departDate=${kirim.departDate}&totalTicket=${kirim.totalTicket}&directionID=${kirim.directionID}&accessToken=3abff8323558113807c47c8a5d4797e8`,
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setShow(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          padding: 10,
        }}>
        <View>
          <Text
            style={{
              fontFamily: fonts.secondary[400],
            }}>
            Tanggal
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 18,
            }}>
            {kirim.departDate}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.secondary[400],
            }}>
            Origin
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 18,
            }}>
            {data.originCity} ( {data.origin} )
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.secondary[400],
            }}>
            Destination
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 18,
            }}>
            {data.destinationCity} ( {data.destination} )
          </Text>
        </View>
        <ScrollView
          style={{
            borderWidth: 1,
            marginVertical: 10,
            borderColor: colors.secondary,
            padding: 5,
          }}>
          {show &&
            data.schedules.map((item) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      shadowColor: 'white',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: -10,
                        height: 2,
                      },
                      shadowOpacity: 0.44,
                      shadowRadius: 5.32,

                      elevation: 1,

                      borderRadius: 10,
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      marginBottom: 10,
                      marginTop: 10,
                      flex: 1,

                      marginHorizontal: 5,
                      padding: 10,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://ayokulakan.com/img/Icon-PPOB/Tiket-ravel.png',
                        }}
                        style={{
                          width: 100,
                          height: 100,
                        }}
                      />
                      <View
                        style={{
                          // flex: 1,
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: colors.primary,
                            fontFamily: fonts.secondary[600],
                          }}>
                          {item.scheduleCode}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: fonts.secondary[600],
                            color: colors.secondary,
                            maxWidth: '100%',
                          }}>
                          Rp.{' '}
                          {new Intl.NumberFormat().format(item.pricePerSeat)}
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            color: colors.black,
                            fontFamily: fonts.secondary[400],
                            maxWidth: '80%',
                          }}>
                          {item.alamat}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: fonts.secondary[600],
                            color: colors.black,
                            maxWidth: '100%',
                          }}>
                          Tempat Duduk Tersisa {item.seatCapacity}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        width: 100,
                        backgroundColor: colors.secondary,
                        borderTopLeftRadius: 10,
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.white,
                          fontFamily: fonts.secondary[600],
                          maxWidth: '100%',
                        }}>
                        {kirim.shuttleID}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </SafeAreaView>
      {loading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            // right: 0,
            // left: 0,
            // top: 0,
            opacity: 1,
          }}>
          <ActivityIndicator color="#16A858" size="large" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
