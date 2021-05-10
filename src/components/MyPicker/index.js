import React, {useState} from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';
import {Icon, ListItem, Button} from 'react-native-elements';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {TextInput} from 'react-native-gesture-handler';

export default function MyInput({
  label,
  iconname,
  onChangeText,
  dataValue,
  value,
  onValueChange,
  autoFocus = false,
  keyboardType,
  secureTextEntry,
  styleInput,
  placeholder,
  multiline,
  styleLabel,
  onSubmitEditing,
  colorIcon = colors.primary,
}) {
  const data = {
    id: 1,
    nama: 'aa',
  };

  return (
    <>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name={iconname} color={colorIcon} size={16} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.primary,
            left: 10,
            fontSize: 16,
            ...styleLabel,
          }}>
          {label}
        </Text>
      </View>
      <Picker selectedValue={value} onValueChange={onValueChange}>
        {data.map((item) => {
          return <Picker.Item label={item.name} value={item.code} />;
        })}
      </Picker> */}
    </>
  );
}

const styles = StyleSheet.create({});
