import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios';

export default function Cuaca() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // padding: 10,
      }}>
      <WebView
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);document.getElementsByClassName('header-v8')[0].style.display = 'none';document.getElementsByClassName('breadcrumbs-light')[0].style.display = 'none';document.getElementsByClassName('footer-v8')[0].style.display = 'none';document.getElementsByClassName('press-release-home-bg')[0].style.display = 'none';document.getElementsByClassName('list-cuaca-provinsi')[0].style.display = 'none';document.getElementsByClassName('headline')[0].style.display = 'none';document.getElementsByClassName('headline')[1].style.display = 'none'`}
        // injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
        source={{
          uri: 'https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg',
        }}
      />
    </SafeAreaView>
  );
}
