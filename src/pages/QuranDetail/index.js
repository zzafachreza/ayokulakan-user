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
import {color} from 'react-native-reanimated';
import {Icon} from 'react-native-elements';
import Sound from 'react-native-sound';

export default function QuranDetail({navigation, route}) {
  const surah = route.params;

  console.log(surah);

  const [data, setData] = useState([]);
  const [play, setPlay] = useState(false);
  const [urlAudio, setUrlAudio] = useState('');

  const getData = () => {
    axios
      .get('https://api.alquran.cloud/v1/surah/' + surah.id + '/ar.alafasy')
      .then((res) => {
        console.log(res.data.data.ayahs);
        setData(res.data.data.ayahs);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const nyalakan = (url) => {
    setUrlAudio(url);
    setPlay(true);
    var whoose = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      whoose.play();
    });
  };

  const _renderItem = ({item}) => {
    let ayat = '';
    if (surah.name_simple == 'Al-Fatihah' && item.numberInSurah == 1) {
      ayat = item.text;
    } else {
      ayat = item.text.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '');
    }

    return (
      <View
        style={{
          //   flex: 1,
          //   backgroundColor: colors.primary,
          marginVertical: 5,
          marginHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.primary,
          padding: 20,
          //   borderRadius: 10,
        }}>
        <View
          style={{
            backgroundColor: colors.secondary,
            position: 'absolute',
            width: 50,
            height: 20,
            borderTopLeftRadius: 10,
            paddingLeft: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
            }}>
            {item.numberInSurah}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'LPMQ',
          }}>
          {ayat}
        </Text>

        <TouchableOpacity
          onPress={() => nyalakan(item.audio)}
          style={{
            // backgroundColor: 'red',
            borderWidth: 1,
            borderColor: colors.primary,
            width: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          <Icon type="ionicon" name="play" size={25} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // padding: 10,
      }}>
      <View
        style={{
          padding: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          backgroundColor: colors.primary,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: colors.white,
            fontFamily: fonts.secondary[600],
          }}>
          {surah.name_simple}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={true}
        renderItem={_renderItem}
        data={data}
        keyExtractor={(item) => item.number}
      />
      {/* <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        {play && (
          <TouchableOpacity
            onPress={() => berhenti(urlAudio)}
            style={{
              // backgroundColor: 'red',
              borderWidth: 1,
              borderColor: colors.secondary,
              width: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <Icon
              type="ionicon"
              name="pause"
              size={25}
              color={colors.secondary}
            />
          </TouchableOpacity>
        )}

        {!play && (
          <TouchableOpacity
            onPress={() => berhenti(urlAudio)}
            style={{
              // backgroundColor: 'red',
              borderWidth: 1,
              borderColor: colors.primary,
              width: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <Icon type="ionicon" name="play" size={25} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View> */}
    </SafeAreaView>
  );
}
