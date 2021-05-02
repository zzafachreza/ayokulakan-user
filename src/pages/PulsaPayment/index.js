import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview';
import {getData} from '../../utils';

export default function PulsaPayment({route}) {
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(true);

  const hideSpinner = () => {
    setVisible(false);
  };
  useEffect(() => {
    getData('users').then((res) => {
      setUser(res);
      console.log(res);
    });
  }, []);
  const nama_lengkap = user.nama;
  const email = user.email;
  const telepon = user.hp;
  const alamat = user.alamat;

  const item = route.params;
  console.log(item);

  const produk =
    item.pulsa_type + ' ' + item.pulsa_op + ' - Rp. ' + item.pulsa_nominal;
  const harga = item.pulsa_price;
  const myUrl = `https://ayokulakan.com/v1/midtrans/payment/snap/index.php?produk=${produk}&harga=${harga}&nama_lengkap=${nama_lengkap}&email=${email}&telepon=${telepon}&alamat=${alamat}`;

  console.log(myUrl);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // padding: 10,
      }}>
      <WebView
        onLoad={hideSpinner}
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); `}
        // injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
        source={{
          uri: myUrl,
        }}
      />
      {visible && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
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
