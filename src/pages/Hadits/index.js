import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {fonts, colors} from '../../utils';

export default function Hadits() {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://api.hadith.sutanlab.id/books/bukhari?range=1-300')
      .then((res) => {
        console.log(res.data.data.hadiths);
        setData(res.data.data.hadiths);
      });
  };

  const [data, setData] = useState([
    {
      id: 1,
      nama: 'ahaha',
    },
    {
      id: 2,
      nama: 'heheh',
    },
  ]);

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          marginVertical: 5,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <View
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 12,
              color: colors.white,
            }}>
            HR Bukhari Nomor {item.number}
          </Text>
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontFamily: 'LPMQ',
            }}>
            {item.arab}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.secondary,
          }}
        />
        <View
          style={{
            padding: 10,
            textAlign: 'justify',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.secondary[400],
            }}>
            {item.id}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 18,
            }}>
            Hadits HR. Bukhari
          </Text>
        </View>
        <FlatList data={data} renderItem={_renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
