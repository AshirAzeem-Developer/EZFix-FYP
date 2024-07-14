import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//local imports
import styles from './style';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SellerCard from '../../../components/TopRatedSellerCard';
import {ParentView} from '../../../components/common/ParentView/ParentView';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Profile = () => {
  // const serviceCategories = [
  //   {
  //     id: 1,
  //     name: 'Mechanic',
  //     image: images.Mechanic,
  //   },
  //   {
  //     id: 2,
  //     name: 'Plumber',
  //     image: images.Plumber,
  //   },
  //   {
  //     id: 3,
  //     name: 'Electrician',
  //     image: images.Electrician,
  //   },
  // ];
  return (
    <>
      <ParentView>
        <Text>Profile</Text>
      </ParentView>
    </>
  );
};

export default Profile;
