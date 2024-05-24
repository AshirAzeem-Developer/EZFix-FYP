import React from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './style';
import images from '../../../assets/images';
import size from '../../../constants/size';
import {TouchableOpacity} from 'react-native';
import CustomButton from '../../../components/Button';
import icons from '../../../assets/icons';
import Ratings from '../../../components/Ratings';
const {width, height} = Dimensions.get('window');
const SeekerDetails = () => {
  const category = [
    {
      id: 1,
      name: 'Hafiz Naeem',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Carpenter',
      ratings: '4.5' + '(150 Reviews)',
      reviews: [
        {
          review1: 'Providing services as a carpenter. ',
          review2: 'Available all 7 days',
          review3: 'Work Experience: 1.5 years',
        },
      ],
      comments: [
        {
          comment1:
            'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services',
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Image source={images.DemoSeeker} style={styles.image} />
        <View style={styles.profileDetails}>
          <Text
            style={{
              fontSize: size.FONTSIZE_NAME,
              fontFamily: 'Dubai-Bold',
              marginLeft: width * 0.04,
              marginTop: height * 0.02,
            }}>
            Hafiz Naeem
          </Text>
          <Text
            style={{
              fontSize: size.FONTSIZE_CATEGORY,
              marginLeft: width * 0.04,
            }}>
            Carpenter
          </Text>
          <Ratings />
        </View>
      </View>
    </View>
  );
};

export default SeekerDetails;
