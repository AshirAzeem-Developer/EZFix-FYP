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
  StyleSheet,
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
import Header from '../../../components/Header';
import apiEndPoints from '../../../constants/apiEndPoints';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Chat = () => {
  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const userId = useSelector((state: any) => state.user?.user?.user?.id);

  // const {styles, colors, sizes} = useStyles();
  // const [search, setSearch] = useState(false);

  // const handleSearch = (query: string) => {
  //   console.log('Search query:', query);
  //   // You can add your search logic here
  // };

  // const [approved, setApproved] = useState(false);
  // const navigation = useNavigation();

  // return (
  //   <ParentView
  //     style={styles.container}
  //     enterAnimation={FadeInDown.duration(500)}>
  //     <Header
  //       heading="Chats"
  //       isLeftShow={true}
  //       leftIconAction={() => navigation.goBack()}
  //       rightIcon={icons.MESSAGE_SEARCH}
  //       isRightShow={true}
  //       rightIconAction={() => setSearch(!search)}
  //     />
  //     {search && (
  //       <SearchComponent
  //         placeholder="Search for a chat"
  //         onSearch={handleSearch}
  //       />
  //     )}
  //     <Chatlist />
  //   </ParentView>
  // );
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  // const {isAuthenticated, activeUser, getToken} = useAuth();

  const fetchUsers = async () => {
    const token = userToken;
    try {
      const response = await fetch(
        `${apiEndPoints.BASE_URL}/api/users?filters[id][$ne]=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    if (true) {
      fetchUsers();
    }
  }, []);

  const handleFriendPress = (friendId: number, name: string) => {
    navigation.navigate('ChatOpen', {
      data: friendId,
      name: name,
    });
  };

  const renderFriendItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleFriendPress(item.id)}>
        <View style={{padding: 16}}>
          <Text
            style={{
              color: 'black',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Friend Lists</Text>
        <FlatList
          data={users}
          renderItem={renderFriendItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    margin: 16,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  flatList: {
    flexGrow: 1,
  },
});
export default Chat;
