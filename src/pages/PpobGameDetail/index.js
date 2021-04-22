import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function PpobGameDetail({route, navigation}) {
  const item = route.params;
  console.log('deteail', item);
  return (
    <View>
      <Text>PpobGameDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
