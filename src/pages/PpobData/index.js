import React, {useState} from 'react';
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
import {MyInput} from '../../components';
import axios from 'axios';
import {colors, fonts} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function PpobData({navigation, route}) {
  const [nomor, setNomor] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = (val) => {
    setLoading(true);
    axios
      .get(
        'https://ayokulakan.com/api/ppob/provider/filter?value=' +
          nomor.substring(0, 4) +
          '&type=data',
      )
      .then((res) => {
        console.log('data data', res.data.data);
        setData(res.data.data);
        setLoading(false);
      });
  };

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PpobDataDetail', {
            item: item,
          });
        }}
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 10,
          borderColor: colors.primary,
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <Image
          source={{uri: item.icon_url}}
          style={{width: 50, height: 50}}
          resizeMode="contain"
        />
        <View
          style={{
            padding: 5,
          }}>
          <Text style={{fontSize: 13, fontFamily: fonts.secondary[600]}}>
            {item.pulsa_nominal}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.secondary[400],
              color: 'black',
              maxWidth: '80%',
            }}>
            {item.pulsa_details}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.secondary[600],
              color: colors.secondary,
            }}>
            Rp. {new Intl.NumberFormat().format(item.pulsa_price)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
        }}>
        <MyInput
          autoFocus
          placeholder="Masukan Nomor Telepon"
          value={nomor}
          keyboardType="number-pad"
          onChangeText={(value) => setNomor(value)}
          onSubmitEditing={getData}
        />
        {/* <Text>{nomor.substring(0, 4)}</Text> */}
      </View>
      <ScrollView>
        <FlatList renderItem={_renderItem} data={data} />
      </ScrollView>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
