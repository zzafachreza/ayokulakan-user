import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {fonts, colors} from '../../utils';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {MyButton} from '../../components';
import {color} from 'react-native-reanimated';

export default function PulsaDetail({navigation, route}) {
  const item = route.params.item;
  console.log(item);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.icon_url}}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: fonts.secondary[600],
          }}>
          Pulsa {item.pulsa_op}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          margin: 10,
          borderColor: colors.primary,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: fonts.secondary[400],
            color: colors.black,
          }}>
          Pulsa
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.secondary[600],
            color: colors.secondary,
          }}>
          {' '}
          Rp. {new Intl.NumberFormat().format(item.pulsa_nominal)}
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: fonts.secondary[600],
            color: colors.black,
          }}>
          {' '}
          Rp. {new Intl.NumberFormat().format(item.pulsa_price)}
        </Text>
      </View>
      <View style={{padding: 10, justifyContent: 'flex-end', flex: 1}}>
        <MyButton
          title="BELI SEKARANG"
          warna={colors.primary}
          onPress={() => navigation.navigate('PulsaPayment', item)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
