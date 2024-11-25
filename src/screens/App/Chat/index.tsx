import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {FadeInDown} from 'react-native-reanimated';

// Components
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/Header';
import SearchComponent from '../../../components/SearchComponent';

// Constants and Utils
import API_ENDPOINTS from '../../../constants/apiEndPoints';
import {fetchFriendsList, getMultipleUsers} from '../../../utils/ApiCall';
import useStyles from './style';
import icons from '../../../assets/icons';

// Types
interface User {
  id: number;
  name: string;
  profileImage?: {
    url: string;
  };
  message?: {
    content: string;
  };
}

interface RootState {
  user: {
    user: {
      jwt: string;
      user: {
        id: number;
      };
    };
  };
}

const Chat: React.FC = () => {
  const navigation = useNavigation();
  const {styles, colors} = useStyles();

  // State
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  // Redux selectors
  const userToken = useSelector((state: RootState) => state.user?.user?.jwt);
  const userId = useSelector((state: RootState) => state.user?.user?.user?.id);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const friendsResponse = await fetchFriendsList(userId, userToken);
      const friendIds = friendsResponse.map((friend: any) => friend.data.id);

      const usersResponse = await getMultipleUsers(userToken, friendIds);
      setUsers(usersResponse.data);
    } catch (err) {
      setError('Failed to fetch friend list. Please try again later.');
      console.error('Error fetching friends:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userToken && userId) {
      fetchUsers();
    }
  }, [userToken, userId]);

  const handleSearch = (query: string) => {
    // Implement search logic here
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );
    setUsers(filteredUsers);
  };

  const handleFriendPress = (friend: User) => {
    navigation.navigate('ChatOpen', {
      data: friend.id,
      name: friend.name,
      friendData: friend,
    });
  };
  const getLatestMessage = (
    user: User,
  ): {content: string; timeStamp: string} | null => {
    const allMessages = [
      ...(user.messageSender || []),
      ...(user.messageReciever || []),
    ].sort(
      (a, b) =>
        new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime(),
    );

    return allMessages[0] || null;
  };

  const formatMessageTime = (timeStamp: string): string => {
    const messageDate = new Date(timeStamp);
    const now = new Date();
    const diffInHours =
      (now.getTime() - messageDate.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return messageDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return messageDate.toLocaleDateString([], {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  const renderFriendItem = ({item}: {item: User}) => {
    const latestMessage = getLatestMessage(item);
    const thumbnailUrl =
      item.profileImage?.formats?.thumbnail?.url || item.profileImage?.url;

    return (
      <TouchableOpacity
        onPress={() => handleFriendPress(item)}
        style={styles.friendListContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              item.profileImage !== null
                ? {uri: `${API_ENDPOINTS.BASE_URL}${thumbnailUrl}`}
                : icons.DUMMY_AVATAR
            }
            style={styles.image}
          />
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.nameTimeContainer}>
            <Text style={styles.friendName} numberOfLines={1}>
              {item.name}
            </Text>
            {latestMessage && (
              <Text style={styles.timeText}>
                {formatMessageTime(latestMessage.timeStamp)}
              </Text>
            )}
          </View>
          <Text style={styles.messageText} numberOfLines={2}>
            {latestMessage ? latestMessage.content : 'Start a conversation'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        No conversations yet. Start chatting with your friends!
      </Text>
    </View>
  );

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header
        heading="Chats"
        isLeftShow={true}
        leftIconAction={() => navigation.goBack()}
        rightIcon={icons.MESSAGE_SEARCH}
        isRightShow={true}
        rightIconAction={() => setShowSearch(!showSearch)}
      />

      {showSearch && (
        <SearchComponent
          placeholder="Search for a chat"
          onSearch={handleSearch}
        />
      )}

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      ) : (
        <FlatList
          data={users}
          renderItem={renderFriendItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatList}
          ListEmptyComponent={renderEmptyList}
          refreshing={isLoading}
          onRefresh={fetchUsers}
        />
      )}
    </ParentView>
  );
};

export default Chat;
