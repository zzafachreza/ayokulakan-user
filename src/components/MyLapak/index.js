import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const IconLapak = ({images, title, desc, lokasi, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 250,
        height: 90,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#16A858',
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        margin: 5,
      }}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/icon/toko.png')}
          style={{
            width: 215 / 3,
            height: 192 / 3,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          paddingLeft: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            color: '#16A858',
            fontSize: 18,
            textAlign: 'center',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Light',
            color: '#000',
            fontSize: 12,
          }}>
          {desc}
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            type="font-awesome"
            name="map-marker"
            color="#F8781D"
            size={12}
          />
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color: '#F8781D',
              // marginTop: 10,ma
              left: 5,
              fontSize: 12,
              // textAlign: 'center',
            }}>
            {lokasi}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function MyLapak() {
  const getData = () => {
    axios.get('https://ayokulakan.com/v1/api/lapak').then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  return (
    <ScrollView
      style={{
        padding: 5,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {data.map((item, index) => {
          return (
            <IconLapak
              key={item.key}
              onPress={() => navigation.navigate('Lapak', item)}
              title={item.nama}
              desc={item.desc}
              lokasi={item.provinsi}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
