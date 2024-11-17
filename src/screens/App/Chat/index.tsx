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
import Header from '../../../components/Header';
import API_ENDPOINTS from '../../../constants/apiEndPoints';
import styles from './style';
import {fetchFriendsList} from '../../../utils/ApiCall';

//third party library

const Chat = () => {
  const {styles, colors, sizes} = useStyles();

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
    fetchFriendsList(userId, token)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.error('Error fetching providers:', err));
  };

  useEffect(() => {
    if (true) {
      fetchUsers();
    }
  }, []);

  const handleFriendPress = (friendId: number, name: string, item: any) => {
    navigation.navigate('ChatOpen', {
      data: friendId,
      name: name,
      friendData: item,
    });
  };

  const renderFriendItem = ({item}) => {
    console.log('Item is ======= > ', JSON.stringify(item, null, 2));
    return (
      <TouchableOpacity
        onPress={() => handleFriendPress(item?.id, item?.name, item)}>
        <View style={styles.friendListContainer}>
          <View>
            <Image
              source={{
                uri: `${API_ENDPOINTS.BASE_URL}${item.profileImage?.url}`,
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.messageText}>{item?.message?.content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Text style={styles.title}>Friend Lists</Text> */}
       
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

export default Chat;
