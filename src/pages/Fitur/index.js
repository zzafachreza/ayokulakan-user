import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, fonts} from '../../utils';

export default function Fitur({navigation}) {
  return (
    <ScrollView>
      <View
        style={{
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('KakiLima')}
          style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: 'https://ayokulakan.com/img/pilihan/fitur-peta.jpg'}}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Peta Kaki Lima</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Masjid')}
          style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://ayokulakan.com/img/pilihan/fitur-masjid.jpg',
            }}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Peta Masjid</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://ayokulakan.com/img/pilihan/fitur-cuaca.jpg',
            }}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Prakiraan Cuaca</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://ayokulakan.com/img/pilihan/fitur-kalender.jpg',
            }}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Kalender Tanam</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Kurir')}
          style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://ayokulakan.com/img/pilihan/lok-kurir.jpg',
            }}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Peta Kurir</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://ayokulakan.com/img/pilihan/fitur-ikan.jpg',
            }}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Informasi Perikanan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: 'https://ayokulakan.com/img/pilihan/fitur-kurs.jpg',
            }}
          />
          <View style={styles.subcard}>
            <Text style={styles.title}>Kurs</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.secondary[600],
    fontSize: 20,
  },
  image: {
    aspectRatio: 1,
    height: 80,
    width: 80,
  },
  subcard: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: 20,
    flex: 1,
  },
});
