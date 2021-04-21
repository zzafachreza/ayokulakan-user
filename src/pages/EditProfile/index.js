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

  const [alamat1, setAlamat1] = useState('Jl. pertama');
  const [alamat2, setAlamat2] = useState('Jl. kedua');
  const [alamat3, setAlamat3] = useState('Jl. ketiga');
  const [alamat4, setAlamat4] = useState('Jl. keemapt');
  const [alamat5, setAlamat5] = useState('Jl. Kelima');
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

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: colors.primary,
            }}>
            <View style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[600],
                }}>
                Alamat (1)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.secondary[400],
                }}>
                {alamat1}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.danger,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                  }}>
                  Hapus
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: colors.primary,
            }}>
            <View style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[600],
                }}>
                Alamat (2)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.secondary[400],
                }}>
                {alamat2}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.danger,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                  }}>
                  Hapus
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: colors.primary,
            }}>
            <View style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[600],
                }}>
                Alamat (3)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.secondary[400],
                }}>
                {alamat3}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.danger,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                  }}>
                  Hapus
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: colors.primary,
            }}>
            <View style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[600],
                }}>
                Alamat (4)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.secondary[400],
                }}>
                {alamat4}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.danger,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                  }}>
                  Hapus
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: colors.primary,
            }}>
            <View style={{padding: 5}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.secondary[600],
                }}>
                Alamat (5)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.secondary[400],
                }}>
                {alamat5}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTambahAlamat')}>
                <Text
                  style={{
                    backgroundColor: colors.danger,
                    padding: 10,
                    color: 'white',
                    borderRadius: 10,
                  }}>
                  Hapus
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{padding: 20}}>
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
