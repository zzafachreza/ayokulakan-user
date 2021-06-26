import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Icon, ListItem, Button, Divider} from 'react-native-elements';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import axios from 'axios';
import {storeData, getData} from '../../utils/localStorage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {MyInput, MyGap, MyButton} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setLoading, setUsers} from '../../redux';
import {colors} from '../../utils/colors';
import {showMessage} from 'react-native-flash-message';
import {fonts} from '../../utils';

export default function Account({navigation}) {
  const isFocused = useIsFocused();
  const [infoEmail, setInfooEmail] = useState(false);
  const [pesanEmail, setPesanEmail] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [infoPasword, setInfoPassword] = useState(false);
  const [pesanPassword, setPesanPassword] = useState('');
  const [token, setToken] = useState('');

  const LoginGlobal = useSelector((state) => state.reducerLogin);
  const UsersGlobal = useSelector((state) => state.reducerUsers);

  const dispatch = useDispatch();

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  useEffect(() => {
    getData('token').then((res) => {
      console.log(res.token);
      setToken(res.token);
    });

    getData('users').then((res) => {
      console.log(res);

      if (!res) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
        __getAlamat(res.id);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '342848835492-2cg8hqg0vuvmjum51cnehdal2ofs6kij.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  }, []);

  const [userLogin, setUserLogin] = useState(false);

  const masuk = () => {
    inputData();
  };

  const inputData = () => {
    dispatch(setLoading(true));
    axios
      .post('https://ayokulakan.com/api/login', LoginGlobal.form)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          __getAlamat(res.data.data.id);
          storeData('users', res.data.data);
          dispatch(setUsers('data', res.data.data));
          setIsLogin(true);
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
          showMessage({
            type: 'danger',
            message: res.data.message,
          });
        }
      });
  };

  const inputDariMedsos = (email, nama_lengkap, foto, id) => {
    axios
      .post('https://ayokulakan.com/api/login/social', {
        email: email,
      })
      .then((res) => {
        console.log('result medsos', res);
        if (res.data.status) {
          storeData('users', res.data.data);
          dispatch(setUsers('data', res.data.data));
          setIsLogin(true);
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
          showMessage({
            type: 'danger',
            message: res.data.message,
          });
        }
      });
  };

  // Somewhere in your code
  async function onGoogleButtonPress() {
    dispatch(setLoading(true));
    try {
      // await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log('login goolge', userInfo.user);
      const dataGoogle = {
        email: userInfo.user.email,
        nama_lengkap: userInfo.user.name,
        photo: userInfo.user.photo,
      };

      inputDariMedsos(
        userInfo.user.email,
        userInfo.user.name,
        userInfo.user.photo,
      );

      dispatch(setUsers('data', dataGoogle));
      dispatch(setLoading(false));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  const GoogleSignOut = () => {
    try {
      dispatch(setLoading(true));
      dispatch(setUsers('data', null));
      dispatch(setForm('email', null));
      dispatch(setForm('password', null));
      storeData('users', null);
      setIsLogin(false);
      // GoogleSignin.revokeAccess();
      // GoogleSignin.signOut();
      // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
    dispatch(setLoading(false));
  };

  const masukFacebook = () => {
    // dispatch(setLoading(true));

    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then((data) => {
            const token = data.accessToken;
            const userID = data.userID;
            const url =
              'https://graph.facebook.com/' +
              userID +
              '?fields=id,name,email,picture.width(200).height(200)&access_token=' +
              token;
            axios.get(url).then((res) => {
              console.log('login fb', res.data);
              // storeData('users', res.data);
              const dataFB = {
                email: res.data.email,
                nama_lengkap: res.data.name,
                photo: res.data.picture.data.url,
              };

              inputDariMedsos(
                res.data.email,
                res.data.name,
                res.data.picture.data.url,
                res.data.id,
              );

              dispatch(setLoading(false));

              // setUserLogin(true);
              // alert(user);
            });
            // initUser(accessToken);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const [dataAlamat, setDataAlamat] = useState([]);

  const __getAlamat = (id_user) => {
    axios
      .get(
        'https://ayokulakan.com/api/profile-user?created_by=' +
          id_user +
          '&includes=negara,provinsi,kota,kecamatan',
      )
      .then((res) => {
        console.log('data alamat', res.data.data);
        setDataAlamat(res.data.data);
      });
  };

  const _hapusAlamat = (id) => {
    console.log('hasil hpus', UsersGlobal.data.id);

    axios
      .post('https://ayokulakan.com/v1/api/alamat_hapus', {
        id: id,
      })
      .then((res) => {
        console.log(res);
        __getAlamat(UsersGlobal.data.id);
      });
  };

  const _utamaAlamat = (id, created_by) => {
    dispatch(setLoading(true));
    console.log('hasil utama', id + '/' + created_by);

    axios
      .post('https://ayokulakan.com/v1/api/alamat_utama', {
        id: id,
        created_by: created_by,
      })
      .then((res) => {
        console.log(res);
        axios
          .get('https://ayokulakan.com/api/profile/' + UsersGlobal.data.id)
          .then((res) => {
            // console.log('hasil fecth2', res.data.data);

            storeData('users', res.data.data);
            dispatch(setUsers('data', res.data.data));

            __getAlamat(res.data.data.id);
            dispatch(setLoading(false));
          });
      });
  };
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}>
        {isLogin ? (
          <View
            style={{
              padding: 10,
              // backgroundColor: 'blue',

              flex: 1,
              flexDirection: 'column',
            }}>
            <View
              style={{
                padding: 10,
                // backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  // borderWidth: 1,
                  // backgroundColor: 'gray',
                  borderWidth: 1,
                  borderColor: colors.primary,
                  width: 100,
                  height: 100,
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                  }}>
                  {isLogin && UsersGlobal.data.nama.substr(0, 1)}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  top: 10,
                }}>
                {isLogin && UsersGlobal.data.nama}
              </Text>
              <Divider style={{backgroundColor: 'red', height: 1}} />
              <Text
                style={{
                  fontSize: 16,
                  top: 10,
                }}>
                {isLogin && UsersGlobal.data.hp}
              </Text>
            </View>
            <View
              style={{
                padding: 10,
              }}>
              <MyButton
                Icons="settings-outline"
                title="Edit Profile"
                warna={colors.primary}
                onPress={() =>
                  navigation.navigate('EditProfile', UsersGlobal.data)
                }
              />
            </View>
            <View
              style={{
                padding: 10,
                // backgroundColor: 'green',
                flex: 1,
              }}>
              <ListItem bottomDivider>
                <Icon
                  name="user"
                  type="font-awesome"
                  color={colors.primary}
                  size={20}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      Username
                    </Text>
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    {isLogin && UsersGlobal.data.username}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem bottomDivider>
                <Icon
                  name="envelope"
                  type="font-awesome"
                  color={colors.primary}
                  size={20}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      Email
                    </Text>
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    {isLogin && UsersGlobal.data.email}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>

              <ListItem bottomDivider>
                <Icon
                  name="phone"
                  type="font-awesome"
                  color={colors.primary}
                  size={20}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      Hp
                    </Text>
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    {' '}
                    {isLogin && UsersGlobal.data.hp}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>

              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#000',
                    left: 10,
                    fontSize: 16,
                  }}>
                  Alamat
                </Text>
              </View>
              {dataAlamat.map((item) => {
                let utama = '';

                if (item.status == 'Alamat Utama') {
                  utama = '( Alamat Utama )';
                } else {
                  utama = '';
                }

                return (
                  <ListItem bottomDivider>
                    <Icon
                      name="home"
                      type="font-awesome"
                      color={colors.primary}
                      size={20}
                    />
                    <ListItem.Content>
                      <ListItem.Title>
                        <Text
                          style={{
                            fontFamily: 'Montserrat-SemiBold',
                          }}>
                          {item.alamat}
                        </Text>
                      </ListItem.Title>
                      <ListItem.Title>
                        <Text
                          style={{
                            fontFamily: fonts.secondary[400],
                            color: colors.secondary,
                          }}>
                          {utama}
                        </Text>
                      </ListItem.Title>
                      <ListItem.Subtitle>
                        {item.provinsi.provinsi}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle>{item.kota.kota}</ListItem.Subtitle>
                      <ListItem.Subtitle>
                        {item.kecamatan.kecamatan}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle>{item.kode_pos}</ListItem.Subtitle>
                      {utama == '' && (
                        <ListItem.Subtitle>
                          <TouchableOpacity
                            style={{
                              // flex: 1,
                              padding: 10,
                              backgroundColor: colors.primary,
                              justifyContent: 'flex-end',
                              alignItems: 'flex-end',
                            }}
                            onPress={() =>
                              _utamaAlamat(item.id, UsersGlobal.data.id)
                            }>
                            <Text
                              style={{
                                color: colors.white,
                                fontFamily: fonts.secondary[400],
                              }}>
                              Jadikan Utama
                            </Text>
                          </TouchableOpacity>
                        </ListItem.Subtitle>
                      )}
                    </ListItem.Content>
                    <TouchableOpacity
                      onPress={() => _hapusAlamat(item.id, UsersGlobal.dat)}>
                      <Icon
                        name="trash"
                        type="font-awesome"
                        color={colors.danger}
                        size={20}
                      />
                    </TouchableOpacity>
                  </ListItem>
                );
              })}

              <MyButton
                Icons="log-out-outline"
                title="Keluar"
                warna={colors.secondary}
                onPress={GoogleSignOut}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: '#FFF',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <View
              style={{
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/huruf.png')}
                style={{
                  aspectRatio: 2,
                }}
              />
            </View>

            <MyInput
              keyboardType="email-address"
              colorIcon={infoEmail ? 'red' : colors.primary}
              styleInput={{
                borderColor: infoEmail ? 'red' : colors.border,
              }}
              styleLabel={{
                color: infoEmail ? 'red' : colors.primary,
              }}
              label="Email"
              iconname="mail-outline"
              value={LoginGlobal.form.email}
              onChangeText={(value) => {
                onInputChange(value, 'email');
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(value) === false) {
                  // console.log('Email is Not Correct');
                  setInfooEmail(true);
                  setPesanEmail('Email tidak valid !');
                  return false;
                } else {
                  setInfooEmail(false);
                  // console.log('Email is Correct');
                }
              }}
            />
            {infoEmail && (
              <Text
                style={{
                  color: 'red',
                  left: 10,
                }}>
                {pesanEmail}
              </Text>
            )}
            <View style={{height: 20}} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon
                type="ionicon"
                name="key-outline"
                color={infoPasword ? 'red' : colors.primary}
                size={16}
              />
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: infoPasword ? 'red' : colors.primary,
                  left: 10,
                  fontSize: 16,
                }}>
                Password
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                secureTextEntry={showPassword ? true : false}
                value={LoginGlobal.form.password}
                onChangeText={(value) => {
                  onInputChange(value, 'password');

                  if (value.length <= 5) {
                    console.log('password berbeda');
                    setInfoPassword(true);
                    setPesanPassword('Password minimal 6 karakter !');
                  } else {
                    console.log('sesuai');
                    setInfoPassword(false);
                  }
                }}
                autoCapitalize="none"
                style={{
                  flex: 1,
                  borderColor: infoPasword ? 'red' : colors.border,
                  borderRadius: 10,
                  borderWidth: 1,
                  paddingLeft: 10,
                  fontSize: 18,
                  fontFamily: fonts.primary[400],
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  if (!showPassword) {
                    setShowPassword(true);
                  } else {
                    setShowPassword(false);
                  }
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 10,
                  top: 10,
                }}>
                <Icon
                  type="ionicon"
                  name={!showPassword ? 'eye-off' : 'eye'}
                  color={colors.primary}
                  size={30}
                />
              </TouchableOpacity>
            </View>

            {infoPasword && (
              <Text
                style={{
                  color: 'red',
                  left: 10,
                }}>
                {pesanPassword}
              </Text>
            )}
            <View style={{height: 20}} />

            <TouchableOpacity
              onPress={masuk}
              style={{
                backgroundColor: '#16A858',
                height: 45,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                // paddingLeft: 30,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  left: -10,
                  // paddingVertical: 5,
                }}>
                <Icon
                  type="ionicon"
                  name="log-in-outline"
                  color="#FFF"
                  size={16}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#FFF',
                    left: 10,
                    fontSize: 16,
                  }}>
                  MASUK
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{height: 20}} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() =>
                  onGoogleButtonPress().then((res) => {
                    // console.log(res);
                    console.log('Signed in with Google!');
                  })
                }
                style={{
                  flex: 1,
                  backgroundColor: '#E74133',
                  height: 45,
                  borderRadius: 10,
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // borderWidth: 1,
                  // borderColor: '#F8781D',
                  // paddingLeft: 30,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    left: -10,
                    // paddingVertical: 5,
                  }}>
                  <Icon
                    type="ionicon"
                    name="logo-google"
                    color="#FFF"
                    size={16}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      color: '#FFF',
                      left: 10,
                      fontSize: 16,
                    }}>
                    GOOGLE
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={masukFacebook}
                style={{
                  flex: 1,
                  backgroundColor: '#4267B2',
                  height: 45,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                  // borderWidth: 1,
                  // borderColor: '#F8781D',
                  // paddingLeft: 30,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    left: -10,
                    // paddingVertical: 5,
                  }}>
                  <Icon
                    type="ionicon"
                    name="logo-facebook"
                    color="#FFF"
                    size={16}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      color: '#FFF',
                      left: 10,
                      fontSize: 16,
                    }}>
                    FACEBOOK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{height: 20}} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{
                backgroundColor: '#F8781D',
                height: 45,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  left: -10,
                  // paddingVertical: 5,
                }}>
                <Icon
                  type="ionicon"
                  name="book-outline"
                  color="#FFF"
                  size={16}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    color: '#FFF',
                    left: 10,
                    fontSize: 16,
                  }}>
                  DAFTAR BARU
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </>
  );
}
