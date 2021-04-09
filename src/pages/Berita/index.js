import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {colors} from '../../utils';
import {WebView} from 'react-native-webview';

export default function Berita({navigation, route}) {
  const item = route.params;

  console.log('berita', item);

  let uri = '';

  if (item.attachments[0]) {
    uri = 'https://ayokulakan.com/storage/' + item.attachments[0].url;
  } else {
    uri = 'https://ayokulakan.com/img/no-images.png';
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Image
        // resizeMode="contain"
        source={{uri: uri}}
        style={{
          width: '100%',
          aspectRatio: 1.5,

          // height: 'auto',
        }}
      />
      <Text
        style={{
          fontSize: 16,
          margin: 10,
          fontFamily: 'Montserrat-Bold',
          color: colors.secondary,
        }}>
        {item.judul}
      </Text>
      <WebView
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
        source={{html: item.deskripsi}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
