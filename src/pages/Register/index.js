import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {MyInput, MyGap} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setMessege, setUsers} from '../../redux';
import axios from 'axios';
import {showSuccess} from '../../utils/showMessage';
import {getData, storeData} from '../../utils/localStorage';
import {showMessage} from 'react-native-flash-message';

export default function Register({navigation}) {
  useEffect(() => {
    getData('token').then((res) => {
      console.log(res.token);
      setToken(res.token);
      dispatch(setForm('token', res.token));
      console.log('redux', RegisterGlobal);
    });
  }, []);

  const [token, setToken] = useState('');
  const [infoPassword, setInfoPassword] = useState(false);
  const [pesanError, setPesanError] = useState('');
  const [infoPassword2, setInfoPassword2] = useState(false);
  const [pesanError2, setPesanError2] = useState('');
  const [infoPassword3, setInfoPassword3] = useState(false);
  const [pesanError3, setPesanError3] = useState('');

  const RegisterGlobal = useSelector((state) => state.reducerRegister);

  const dispatch = useDispatch();
  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
    console.log();
  };

  // const inputData = () => {
  //   axios
  //     .post('http://ayokulakan.com/v1/api/login', RegisterGlobal.form)
  //     .then((res) => {
  //       dispatch(setLoading(false));
  //       const obj = res.data[0];

  //       if (obj.code == 404) {
  //         console.log(obj);
  //         showMessage({
  //           type: 'danger',
  //           message: 'Maaf email atau password tidak ditemukan !',
  //         });
  //       } else {
  //         console.log(obj);
  //         storeData('users', obj);
  //         dispatch(setUsers('data', obj));
  //       }
  //     });
  // };

  const masuk = () => {
    dispatch(setLoading(true));
    axios
      .post('https://ayokulakan.com/api/register', RegisterGlobal.form)
      .then((res) => {
        dispatch(setLoading(false));
        console.log('daftar', res.data);

        if (res.data.status) {
          axios
            .post('https://ayokulakan.com/api/login', {
              email: RegisterGlobal.form.email,
              password: RegisterGlobal.form.password,
            })
            .then((res) => {
              console.log('result medsos', res);
              if (res.data.status) {
                storeData('users', res.data.data);
                dispatch(setUsers('data', res.data.data));
                navigation.replace('MainApp');
                // dispatch(setLoading(false));
              } else {
                // dispatch(setLoading(false));
                showMessage({
                  type: 'danger',
                  message: res.data.message,
                });
              }
            });
        } else {
          showMessage({
            type: 'danger',
            message: res.data.message,
          });
        }
      });
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 10,
        }}>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.primary[400],
            }}>
            Terima kasih mau mendaftar di Ayokulakan. Silahkan isi formulir di
            bawah untuk proses pendaftaran.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <MyInput
            value={RegisterGlobal.form.username}
            onChangeText={(value) => onInputChange(value, 'username')}
            label="Username"
            iconname="person-outline"
          />
          <MyGap jarak={5} />
          <MyInput
            value={RegisterGlobal.form.nama}
            onChangeText={(value) => onInputChange(value, 'nama')}
            label="Nama Lengkap"
            iconname="person-outline"
          />
          <MyGap jarak={5} />
          <MyInput
            keyboardType="email-address"
            colorIcon={infoPassword3 ? 'red' : colors.primary}
            styleInput={{
              borderColor: infoPassword3 ? 'red' : colors.border,
            }}
            styleLabel={{
              color: infoPassword3 ? 'red' : colors.primary,
            }}
            label="Email"
            iconname="mail-outline"
            value={RegisterGlobal.form.email}
            onChangeText={(value) => {
              onInputChange(value, 'email');
              let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if (reg.test(value) === false) {
                // console.log('Email is Not Correct');
                setInfoPassword3(true);
                setPesanError3('Email tidak valid !');
                return false;
              } else {
                setInfoPassword3(false);
                // console.log('Email is Correct');
              }
            }}
          />
          {infoPassword3 && (
            <Text
              style={{
                color: 'red',
                left: 10,
              }}>
              {pesanError3}
            </Text>
          )}
          <MyGap jarak={5} />
          <MyInput
            colorIcon={infoPassword2 ? 'red' : colors.primary}
            styleInput={{
              borderColor: infoPassword2 ? 'red' : colors.border,
            }}
            styleLabel={{
              color: infoPassword2 ? 'red' : colors.primary,
            }}
            secureTextEntry
            label="Password"
            iconname="key-outline"
            value={RegisterGlobal.form.password}
            onChangeText={(value) => {
              onInputChange(value, 'password');

              if (RegisterGlobal.form.password.length < 5) {
                console.log('password berbeda');
                setInfoPassword2(true);
                setPesanError2('Password minimal 6 karakter !');
              } else {
                console.log('sesuai');
                setInfoPassword2(false);
              }
            }}
          />
          {infoPassword2 && (
            <Text
              style={{
                color: 'red',
                left: 10,
              }}>
              {pesanError2}
            </Text>
          )}
          <MyGap jarak={5} />
          <MyInput
            colorIcon={infoPassword ? 'red' : colors.primary}
            styleInput={{
              borderColor: infoPassword ? 'red' : colors.border,
            }}
            styleLabel={{
              color: infoPassword ? 'red' : colors.primary,
            }}
            secureTextEntry
            label="Re - Password"
            iconname="key-outline"
            onChangeText={(value) => {
              if (RegisterGlobal.form.password !== value) {
                console.log('password berbeda');
                setInfoPassword(true);
                setPesanError('Password tidak sama !');
              } else {
                console.log('sesuai');
                setInfoPassword(false);
              }
            }}
          />

          {infoPassword && (
            <Text
              style={{
                color: 'red',
                left: 10,
              }}>
              {pesanError}
            </Text>
          )}
          <MyGap jarak={5} />
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.primary[400],
            }}>
            Dengan melakukan pendaftaran. Anda juga telah menyetujui Syarat dan
            Ketentuan penggunaan layanan Ayokulakan.
          </Text>
          <MyGap jarak={5} />
          {!infoPassword & !infoPassword2 & !infoPassword3 ? (
            <TouchableOpacity
              onPress={masuk}
              style={{
                backgroundColor: colors.primary,
                height: 45,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 18,
                  fontFamily: 'Nunito-Regular',
                }}>
                DAFTAR
              </Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
