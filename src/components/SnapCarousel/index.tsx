import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';

import images from '../../assets/images';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStyles from './style';

const slides = [
  {
    image: images.swiper1Image,
    headingText: 'Electrician',
    text: 'Welcome to our app!',
  },
  {
    title: 'Swipe',
    image: images.swiper2Image,
    headingText: 'Computer Tech',
    text: 'Discover new features.',
  },

  {
    image: images.swiper4Image,
    headingText: 'PLUMBER',
    text: 'Get started now!',
  },
  {
    image: images.swiper5Image,
    headingText: 'Gardner',
    text: 'Get started now!',
  },
];
const SnapCarousel = () => {
  const {styles} = useStyles();
  const {sizes} = useStyles();

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderWidth = sizes.WIDTH * 1; // Set your slider width
  const itemWidth = sizes.WIDTH * 0.6; // Set your item width

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.headText}>{item.headingText}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        layout="default"
        data={slides}
        sliderWidth={sizes.WIDTH * 1}
        itemWidth={sizes.WIDTH * 0.7}
        inactiveSlideScale={0.95}
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        loop
        autoplay
        containerCustomStyle={{paddingHorizontal: 20}} // Adds space around carousel
        // slideStyle={styles.slideStyle} // Apply custom slide styles
      />

      {/* Pagination dots */}
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        dotColor="#000000"
        inactiveDotColor="#aeaeae"
      />
    </SafeAreaView>
  );
};

export default SnapCarousel;
