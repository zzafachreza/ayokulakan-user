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
      id: 1,
      desc: 'Usaha Perikanan Budidaya Dan Hidroponik Ayokulakan',
      image: require('../../assets/ayo1.png'),
    },
    {
      id: 2,
      desc: 'Usaha Pertanian Ayokulakan',
      image: require('../../assets/ayo2.png'),
    },
    {
      id: 3,
      desc: 'Usaha Kebun Anggrek Ayokulakan',
      image: require('../../assets/ayo3.png'),
    },
    {
      id: 4,
      desc: 'Usaha Tanaman Buah Dalam Pot Ayokulakan',
      image: require('../../assets/ayo4.png'),
    },
    {
      id: 5,
      desc: 'Usaha Perikanan Tangkap Ayokulakan',
      image: require('../../assets/ayo5.png'),
    },
    {
      id: 6,
      image: require('../../assets/ayoslide1.png'),
    },
    {
      id: 7,
      image: require('../../assets/ayoslide2.png'),
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        key={item.id}
        source={item.image}
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
