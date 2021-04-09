import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';
import {colors, fonts} from '../../utils';

export default function Quran({navigation}) {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get('https://api.quran.com/api/v4/chapters?language=id')
      .then((res) => {
        console.log(res.data.chapters);
        setData(res.data.chapters);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('QuranDetail', item)}
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          marginVertical: 10,
          padding: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: fonts.secondary[600],
              }}>
              {item.id}. {item.name_simple}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: fonts.secondary[400],
              }}>
              {item.translated_name.name}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',

                fontFamily: 'LPMQ',
              }}>
              {item.name_arabic}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={_renderItem}
        data={data}
      />
    </SafeAreaView>
  );
}
