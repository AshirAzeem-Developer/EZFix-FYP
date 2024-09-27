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
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SellerCard from '../../../components/TopRatedSellerCard';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';
import Button from '../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import SearchComponent from '../../../components/SearchComponent';
import Chatlist from '../../../components/ChatList';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Chat = () => {
  const {styles, colors, sizes} = useStyles();

  
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };
  
  const [approved, setApproved] = useState(false);
  const navigation = useNavigation();

  
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <View style={styles.search}>
          <SearchComponent
            placeholder="search chats"
            onSearch={handleSearch}
          />
        </View>
        <Chatlist/>

     
      </ParentView>
    );
  };



export default Chat;
