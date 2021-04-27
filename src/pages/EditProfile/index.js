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
import {MyInput, MyGap, MyButton} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setMessege, setUsers} from '../../redux';
import axios from 'axios';
import {showSuccess} from '../../utils/showMessage';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {storeData, getData} from '../../utils/localStorage';

export default function EditProfile({navigation, route}) {
  const UsersGlobal = useSelector((state) => state.reducerUsers);
  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        dispatch(setUsers('data', null));
      } else {
        dispatch(setUsers('data', res));
      }
    });
  }, []);
  navigation.setOptions({
    title: 'Edit Profile : ' + route.params.email,
  });

  const [userLocal, setUserLocal] = useState({});
  const [kirim, setKirim] = useState({
    id: UsersGlobal.data.id,
    nama: UsersGlobal.data.nama,
    alamat: UsersGlobal.data.alamat,
    hp: UsersGlobal.data.hp,
  });

  const dispatch = useDispatch();
  const masuk = () => {
    dispatch(setLoading(true));

    console.log('kirim put', kirim);

    getData('users').then((res) => {
      console.log('userslokal', res);
      setUserLocal(res);
    });

    // console.log('data edit', users);

    axios
      .post('https://ayokulakan.com/api/profile/' + kirim.id, kirim)
      .then((res) => {
        console.log('update', res);
        storeData('users', {
          ...userLocal,
          nama: kirim.nama,
          alamat: kirim.alamat,
          hp: kirim.hp,
        });
        dispatch(setLoading(false));
        navigation.replace('Splash');
      });
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 10,
        }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          {/* <Text> {users.foto}</Text> */}
          <MyInput
            value={kirim.nama}
            onChangeText={(value) =>
              setKirim({
                ...kirim,
                nama: value,
              })
            }
            label="Nama Lengkap"
            iconname="person-outline"
          />
          <MyGap jarak={5} />

          <MyInput
            keyboardType="decimal-pad"
            label="Telepon / Hp"
            iconname="call-outline"
            value={kirim.hp}
            onChangeText={(value) =>
              setKirim({
                ...kirim,
                hp: value,
              })
            }
          />
          <MyGap jarak={5} />
          <MyInput
            label="Alamat (Utama)"
            iconname="map-outline"
            value={kirim.alamat}
            onChangeText={(value) =>
              setKirim({
                ...kirim,
                alamat: value,
              })
            }
          />
        </View>
        <View style={{padding: 20}}>
          <MyButton
            title="TAMBAH ALAMAT LAINNYA"
            warna={colors.secondary}
            onPress={() => navigation.navigate('EditTambahAlamat')}
          />
          <MyGap jarak={5} />

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
              SIMPAN
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
