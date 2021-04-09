import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon, ListItem, Button} from 'react-native-elements';
import {Home} from '../../pages';

export default function MyHeader({
  title,
  tipe,
  onPressWishlist,
  onPressPesan,
  onPressNotifikasi,
}) {
  const Utama = () => {
    return (
      <View
        style={{
          backgroundColor: '#16A858',
          height: 50,
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',

          // flex: 1,
        }}>
        {/* <View>
          <Icon type="font-awesome" name="bell" color="#FFF" size={20} />
        </View>
        <View>
          <Icon type="font-awesome" name="comment" color="#FFF" size={20} />
        </View> */}
        <View
          style={{
            flex: 2,
          }}>
          <Image
            source={require('../../assets/huruf.png')}
            style={{width: 120, height: 25}}
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'red',
          }}
          onPress={() => alert('hahah')}>
          <Icon type="font-awesome" name="heart" color="#FFF" size={20} />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={onPressPesan}>
            <Icon type="font-awesome" name="envelope" color="#FFF" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressNotifikasi}>
            <Icon type="font-awesome" name="bell" color="#FFF" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Biasa = () => {
    return (
      <View
        style={{
          backgroundColor: '#16A858',
          height: 50,
          flexDirection: 'row',
          padding: 10,
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 20,
              color: '#FFF',
            }}>
            {title}
          </Text>
        </View>
      </View>
    );
  };
  return tipe == true ? <Utama /> : <Biasa />;
}

const styles = StyleSheet.create({});
