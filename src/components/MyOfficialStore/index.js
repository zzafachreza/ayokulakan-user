import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import {colors, fonts} from '../../utils';
import {Icon} from 'react-native-elements';

export default function MyOfficialStore() {
  const [dataOfficial, setDataOfficial] = useState([
    {
      id: 0,
      image: 'https://ayokulakan.com/new_temp/images/banners/banner-side.png',
    },
    {
      id: 1,
      image: 'https://ayokulakan.com/new_temp/images/banners/cat-banner-1.jpg',
    },
    {
      id: 2,
      image: 'https://ayokulakan.com/new_temp/images/banners/home-banner2.jpg',
    },
  ]);

  const renderCarouselItem = ({item}) => (
    <View style={styles.cardContainer} key={item.id}>
      <Image
        source={{uri: item.image}}
        style={{
          height: 250,
        }}
      />
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          // marginHorizontal: 10,
          padding: 10,
          backgroundColor: colors.primary,
          // borderRadius: 50,
          // borderBottomLeftRadius: 10,
          justifyContent: 'center',
          // alignItems: 'center',
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon
            type="ionicon"
            name="shield-checkmark-outline"
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
            OFFICIAL STORE
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <Carousel
          data={dataOfficial}
          containerCustomStyle={styles.carousel}
          renderItem={renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}

          // onSnapToItem={(index) => onCarouselItemChange(index)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    // position: 'absolute',
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: colors.primary,
    opacity: 0.8,
    height: 150,
    width: 300,
    // padding: 24,
    overflow: 'hidden',
    borderRadius: 24,
  },
  cardImage: {
    height: 50,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
});
