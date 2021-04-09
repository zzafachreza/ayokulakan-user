import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyHeader} from '../../components';

export default function Promo() {
  return (
    <View>
      <MyHeader title="Berita dan Promo" tipe={false} />
      <Text>ini Promo</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
