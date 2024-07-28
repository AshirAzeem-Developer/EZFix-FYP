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
import SearchComponent from '../../../components/SearchComponent';


//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Home = () => {
  const {styles, colors, sizes} = useStyles();
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };
  const serviceCategories = [
    {
      id: 1,
      name: 'Mechanic',
      image: images.Mechanic,
    },
    {
      id: 2,
      name: 'Plumber',
      image: images.Plumber,
    },
    {
      id: 3,
      name: 'Electrician',
      image: images.Electrician,
    },
    {
      id: 4,
      name: 'view all',
      image: images.Electrician,
    },
  ];
  const providers=[{
    
  },{},{}]
  return (
    <>
      <ParentView style={styles.container}>


      <View style={styles.logoImgCont}>
      <Image source={icons.Logo} style={styles.logoImg} />
      <TouchableOpacity style={styles.bellImg}>
      <Image source={icons.Bell}  />
      </TouchableOpacity>
    
    </View>
    <View style={styles.search}>
      <SearchComponent placeholder='search any services...' onSearch={handleSearch} />
      </View>
       <View>
        <Text style={styles.categoryheading}>Categories</Text>
       </View>
       <View style={styles.categories}>
        {serviceCategories.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image source={category.image} style={styles.image} />
              <Text style={styles.catname}>{category.name}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.categoryheading}>Top Rated Sellers</Text>
       </View>
      </ParentView>
    </>
  );
};

export default Home;
