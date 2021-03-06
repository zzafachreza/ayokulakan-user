import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import {fonts, colors, getData} from '../../utils';
import {MyInput, MyGap, MyButton} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import HTML from 'react-native-render-html';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setMessege, setUsers} from '../../redux';

export default function BeritaTerbaru({navigation}) {
  const getData = () => {
    axios
      .get('https://ayokulakan.com/api/hajiumroh/gallery?includes=attachments')
      .then((res) => {
        console.log(res.data.data.data);
        setData(res.data.data.data);
      });
  };

  useEffect(() => {}, []);

  const [data, setData] = useState([
    {
      id: 1,
      nama: 'Berita Perikanan',
      uri: 'https://ayokulakan.com/img/pilihan/berita-perikanan.png',
    },
    {
      id: 2,
      nama: 'Berita Haji dan Umroh',
      uri: 'https://ayokulakan.com/img/pilihan/haji-umroh.png',
    },
    {
      id: 3,
      nama: 'Berita Pertanian',
      uri: 'https://ayokulakan.com/img/pilihan/berita-pertanian.png',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          //   padding: 10,
          borderWidth: 1,
          marginVertical: 10,
          borderRadius: 10,
          elevation: 1,
          borderColor: colors.primary,
          overflow: 'hidden',
        }}>
        <Image
          source={{uri: item.uri}}
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
          // resizeMode="center"
        />
        <View
          style={{
            padding: 10,
            backgroundColor: colors.secondary,
          }}>
          <Text style={{fontFamily: fonts.secondary[400], color: colors.white}}>
            {item.nama}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}>
          <FlatList data={data} renderItem={_renderItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
