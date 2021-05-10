import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Picker} from 'react-native';
import {MyInput, MyGap, MyButton, MyPicker} from '../../components';
import {colors, getData, fonts} from '../../utils';
import axios from 'axios';
import {Icon} from 'react-native-elements';

export default function EditTambahAlamat({navigation}) {
  const [alamat, setAlamat] = useState('');
  const [user, setUser] = useState({});
  const [pos, setPos] = useState('');
  const [id_negara, setid_negara] = useState(353);
  const [id_provinsi, setid_provinsi] = useState('');
  const [id_kota, setid_kota] = useState('');
  const [id_kecamatan, setid_kecamatan] = useState('');
  const [kode_pos, setkode_pos] = useState('');
  const [status, setStatus] = useState('');
  const [bukaKota, setBukaKota] = useState(false);

  const [dataNegara, setDataNegara] = useState([
    {
      id: 353,
      negara: 'Indonesia',
    },
  ]);

  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [dataKota, setDataKota] = useState([]);
  const [dataKecamatan, setDataKecamatan] = useState([]);

  const [kirim, setKirim] = useState({
    id_negara: id_negara,
    id_provinsi: null,
    id_kota: null,
    id_kecamatan: null,
    created_by: 282,
    kode_pos: null,
    alamat: null,
  });

  useEffect(() => {
    getData('users').then((res) => {
      console.log(res);
      setUser(res);
      setKirim({
        ...kirim,
        created_by: res.id,
      });
      getProvinsi();
    });
  }, []);

  const getProvinsi = () => {
    axios
      .get('https://ayokulakan.com/api/wilayah/provinsi?id_negara=353')
      .then((res) => {
        console.log(res.data.data);
        setDataProvinsi(res.data.data);
      });
  };

  const _saveData = () => {
    console.log(kirim);
    axios
      .post('https://ayokulakan.com/v1/api/alamat_add', kirim)
      .then((res) => {
        console.log(res);
        navigation.replace('Splash');
      });
  };
  return (
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="globe" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            Pilih Negara
          </Text>
        </View>
        <Picker
          selectedValue={id_negara}
          onValueChange={(val) => {
            setid_negara(val);
            setKirim({
              ...kirim,
              id_negara: val,
            });
          }}>
          {dataNegara.map((item) => {
            return <Picker.Item label={item.negara} value={item.id} />;
          })}
        </Picker>

        {/* provinsi */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="globe" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            Pilih Provinsi
          </Text>
        </View>
        <Picker
          selectedValue={id_provinsi}
          onValueChange={(val) => {
            setid_provinsi(val);
            axios
              .get('https://ayokulakan.com/api/wilayah/kota/' + val)
              .then((res) => {
                console.log(res.data.data);
                setDataKota(res.data.data);
              });

            setKirim({
              ...kirim,
              id_provinsi: val,
            });
          }}>
          {dataProvinsi.map((item) => {
            return <Picker.Item label={item.provinsi} value={item.id} />;
          })}
        </Picker>

        {/* Kota */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="globe" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            Pilih Kota
          </Text>
        </View>
        <Picker
          selectedValue={id_kota}
          onValueChange={(val) => {
            setid_kota(val);
            axios
              .get('https://ayokulakan.com/api/wilayah/kecamatan/' + val)
              .then((res) => {
                console.log(res.data.data);
                setDataKecamatan(res.data.data);
              });
            setKirim({
              ...kirim,
              id_kota: val,
            });
          }}>
          {dataKota.map((item) => {
            return <Picker.Item label={item.kota} value={item.id} />;
          })}
        </Picker>

        {/* Kecamatan */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="globe" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            Pilih Kecamatan
          </Text>
        </View>
        <Picker
          selectedValue={id_kecamatan}
          onValueChange={(val) => {
            setid_kecamatan(val);
            // getKota(val);
            setKirim({
              ...kirim,
              id_kecamatan: val,
            });
          }}>
          {dataKecamatan.map((item) => {
            return <Picker.Item label={item.kecamatan} value={item.id} />;
          })}
        </Picker>
        <MyGap jarak={10} />
        <MyInput
          keyboardType="number-pad"
          onChangeText={(value) => {
            setPos(value);
            setKirim({
              ...kirim,
              kode_pos: value,
            });
          }}
          label="Kode POS"
          iconname="map"
        />
        <MyGap jarak={10} />
        <MyInput
          onChangeText={(value) => {
            setAlamat(value);
            setKirim({
              ...kirim,
              alamat: value,
            });
          }}
          label="Detail Alamat"
          iconname="map"
          multiline
        />

        <MyGap jarak={10} />
        <MyButton onPress={_saveData} title="simpan" warna={colors.secondary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
