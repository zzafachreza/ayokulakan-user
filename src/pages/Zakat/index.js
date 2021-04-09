import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ZakatProfesi, ZakatMaal} from '../../pages';
import {colors} from '../../utils';

const Tab = createMaterialTopTabNavigator();

const dataOption = {
  activeTintColor: 'white',
  inactiveTintColor: 'white',
  style: {backgroundColor: colors.secondary},
  indicatorStyle: {backgroundColor: colors.primary},
  pressOpacity: 1,
};
function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={dataOption}>
      <Tab.Screen
        name="ZakatProfesi"
        component={ZakatProfesi}
        options={{
          title: 'Zakat Profesi',
        }}
      />
      <Tab.Screen
        name="ZakatMaal"
        component={ZakatMaal}
        options={{
          title: 'Zakat Maal',
        }}
      />
    </Tab.Navigator>
  );
}

export default function Zakat() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({});
