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
import icons from '../../assets/icons';
import images from '../../assets/images';
import SellerCard from '../../components/TopRatedSellerCard';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ParentView} from '../common/ParentView/ParentView';
import SearchComponent from '../SearchComponent';
import Header from '../AppHeader';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Chatlist = () => {
  const {styles, colors, sizes} = useStyles();

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };

  const [approved, setApproved] = useState(false);
  const navigation = useNavigation();
  const list = [
    {
      id: 1,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      msg: 3,
      img: images.Dp,
    },
    {
      id: 2,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      msg: 5,
      img: images.Dp,
    },
    {
      id: 3,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      img: images.Dp,
    },
    {
      id: 4,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      img: images.Dp,
    },
    {
      id: 5,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      img: images.Dp,
    },
    {
      id: 6,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      img: images.Dp,
    },
    {
      id: 7,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      img: images.Dp,
    },
    {
      id: 8,
      name: 'Minnie Ramsey',
      chat: 'hahaha....Lol',
      img: images.Dp,
    },
  ];

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.contacts}
            onPress={() => navigation.navigate('ChatOpen', {title: item.name})}>
            <Image source={item.img} />
            <View style={styles.cards}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.chat}>{item.chat}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ParentView>
  );
};

export default Chatlist;
