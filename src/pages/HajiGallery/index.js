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

export default function HajiGallery() {
  const getData = () => {
    axios
      .get('https://ayokulakan.com/api/hajiumroh/gallery?includes=attachments')
      .then((res) => {
        console.log(res.data.data.data);
        setData(res.data.data.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  const _renderItem = ({item, index}) => {
    let no = 1;

    let uri = '';
    if (item.attachments[0]) {
      uri = 'https://ayokulakan.com/storage/' + item.attachments[0].url;
    } else {
      uri = 'https://ayokulakan.com/img/no-images.png';
    }

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
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fonts.secondary[400],
            backgroundColor: colors.secondary,
            color: colors.white,
          }}>
          Dokumentasi Foto {index + 1}
        </Text>
        <Image
          source={{uri: uri}}
          style={{
            width: '100%',
            aspectRatio: 2,
          }}
          resizeMode="center"
        />
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
