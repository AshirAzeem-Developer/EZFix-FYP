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
import useStyles from './style';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SellerCard from '../../../components/TopRatedSellerCard';
import {ParentView} from '../../../components/common/ParentView/ParentView';


//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Home = () => {
  const {styles, colors, sizes} = useStyles();

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
      <ParentView style={styles.container}>


      <View style={styles.logoImgCont}>
      <Image source={icons.Logo} style={styles.logoImg} />
      <Image source={icons.Bell} style={styles.logoImg} />
    </View>

     
      </ParentView>
    </>
  );
};

export default Home;
