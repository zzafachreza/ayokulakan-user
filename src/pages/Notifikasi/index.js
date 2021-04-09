import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {storeData, getData} from '../../utils/localStorage';
import axios from 'axios';
import {MyHeader} from '../../components';
import {colors} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../redux';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Notifikasi({navigation}) {
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://ayokulakan.com/api/berita?includes=attachments&kategori=berita',
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      });
  }, []);

  const renderItem = ({item}) => {
    let uri = '';

    if (item.attachments[0]) {
      uri = 'https://ayokulakan.com/storage/' + item.attachments[0].url;
    } else {
      uri = 'https://ayokulakan.com/img/no-images.png';
    }
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Berita', item)}
        style={{
          margin: 10,
          backgroundColor: 'white',
          elevation: 2,
          overflow: 'hidden',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 2,
          }}>
          <View>
            <Image
              source={{uri: uri}}
              style={{
                flex: 1,
                width: '100%',
                resizeMode: 'contain',
                aspectRatio: 1,
              }}
            />
          </View>
          <View
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Montserrat-Medium',
                color: 'red',
              }}>
              {item.judul}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Medium',
                color: 'grey',
              }}>
              {item.created_at}
            </Text>
            {/* <Text
              style={{
                fontSize: 18,
                fontFamily: 'Montserrat-Medium',
                color: 'black',
              }}>
              {item.deskripsi}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <MyHeader title="Berita dan Promo" />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
          />
        }
        style={{
          padding: 10,
        }}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={({distanceFromEnd}) => {
            if (distanceFromEnd >= 0) {
              // dispatch(setLoading(true));
              console.log('muat yang lain');
            }
          }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
