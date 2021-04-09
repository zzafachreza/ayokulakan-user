import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <Button title="MASUK" onPress={() => navigation.replace('MainApp')} />
    </View>
  );
}

const styles = StyleSheet.create({});
