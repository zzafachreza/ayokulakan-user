import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function MyCarouser() {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [data, setData] = useState([
    {
      id: 6,
      desc: 'Promo diskon',
      image: 'https://setiabudhi-supermarket.co.id/promo/papaya.jpg',
    },
    {
      id: 7,
      desc: 'Promo Diskon',
      image: 'https://setiabudhi-supermarket.co.id/promo/eat.jpg',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        key={item.id}
        source={{uri: item.image}}
        style={{
          height: Math.round((windowWidth * 9) / 16),
        }}>
        <View
          style={{
            backgroundColor: '#F8781D',
            position: 'absolute',
            // maxWidth: 200,
            bottom: 0,
            right: 0,
            borderTopLeftRadius: 20,
            // borderBottomRightRadius: 20,
            opacity: 0.9,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Courgette-Regular',
              color: '#FFF',
            }}>
            {item.desc}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#16A858',
      }}>
      <Carousel
        // layout="stack"
        layoutCardOffset={18}
        data={data}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={_renderItem}
        activeDotIndex
        autoplay={true}
        autoplayDelay={2000}
        autoplayInterval={3000}
        onSnapToItem={(index) => setActiveSlide(index)}
        activeAnimationType="spring"
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
