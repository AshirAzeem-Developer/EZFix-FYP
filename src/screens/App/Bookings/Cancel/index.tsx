import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

// Local imports
import icons from '../../../../assets/icons';
import {ParentView} from '../../../../components/common/ParentView/ParentView';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {
  getJobOrders,
  getServiceSeekerBooking,
  getSkillsFromUserId,
} from '../../../../utils/ApiCall';
import apiEndPoints from '../../../../constants/apiEndPoints';

const Cancel = ({route, navigation}) => {
  const {styles, colors, sizes} = useStyles();
  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );
  const userId = useSelector((state: any) => state.user?.user?.user?.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  const [userSkillIds, setUserSkillIds] = useState<number[]>([]);
  const [jobOrders, setJobOrders] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(() => {
    setLoading(true);
    getSkillsFromUserId(userId, userToken)
      .then(res => {
        const skills = res.data.skills || [];
        const skillIds = skills.map((skill: any) => skill.id);
        setUserSkillIds(skillIds);

        if (userType !== 'seeker') {
          getJobOrders(skillIds, userToken, 'Cancelled')
            .then(res => {
              setJobOrders(res.data);
            })
            .catch(err => {
              console.error('Error fetching job orders:', err);
            })
            .finally(() => setLoading(false));
        } else {
          fetchSeekerBookings();
        }
      })
      .catch(err => {
        console.error('Error fetching user skills:', err);
        setLoading(false);
      });
  }, [userId, userToken, userType]);

  const fetchSeekerBookings = useCallback(() => {
    getServiceSeekerBooking(userId, 'Cancelled', userToken)
      .then(res => {
        setJobOrders(res.data);
      })
      .catch(err => {
        console.error('Error fetching seeker bookings:', err);
      })
      .finally(() => setLoading(false));
  }, [userId, userToken]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [fetchData]);

  const renderEmptyComponent = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: sizes.WIDTH * 0.05, color: colors.BLACK}}>
        {'No Cancelled Jobs'}
      </Text>
    </View>
  );

  const renderLoading = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={colors.PRIMARY} />
    </View>
  );

  const SeekerView = () => (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      {loading ? (
        renderLoading()
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: sizes.HEIGHT * 0.1,
            flexGrow: 1,
          }}
          data={jobOrders?.data}
          ListEmptyComponent={renderEmptyComponent}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <View style={styles.providerscard}>
                <View style={styles.provivder}>
                  <Image
                    source={{
                      uri: `${apiEndPoints.BASE_URL}${item?.attributes?.skill?.data?.attributes?.category?.data?.attributes?.icon?.data?.attributes?.url}`,
                    }}
                    style={styles.providerimg}
                  />
                  <View style={styles.items}>
                    <Text style={styles.job}>
                      {
                        item?.attributes?.skill?.data?.attributes?.category
                          ?.data?.attributes?.name
                      }
                    </Text>
                    <Text style={styles.work}>
                      {item?.attributes?.description}
                    </Text>
                    <View style={styles.time}>
                      <Image source={icons.CALENDAR} style={styles.clock} />
                      <Text style={styles.timer}>{item?.attributes?.date}</Text>
                    </View>
                    <View style={styles.statuscontainer}>
                      <Text style={{color: colors.BLACK}}>Status : </Text>
                      <Text style={styles.status}>
                        {item?.attributes?.jobStatus}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </ParentView>
  );

  const ProviderView = () => (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      {loading ? (
        renderLoading()
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: sizes.HEIGHT * 0.1,
            flexGrow: 1,
          }}
          data={jobOrders?.data}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={renderEmptyComponent}
          renderItem={({item}) => (
            <View style={styles.providerscard}>
              <View style={styles.provivder}>
                <Image
                  source={{
                    uri: `${apiEndPoints.BASE_URL}${item?.attributes?.skill?.data?.attributes?.category?.data?.attributes?.icon?.data?.attributes?.url}`,
                  }}
                  style={styles.providerViewimg}
                />
                <View style={styles.items}>
                  <Text style={styles.job}>
                    {
                      item?.attributes?.skill?.data?.attributes?.category?.data
                        ?.attributes?.name
                    }
                  </Text>
                  <Text style={styles.work} numberOfLines={2}>
                    {item?.attributes?.description}
                  </Text>
                  <View style={styles.time}>
                    <Image source={icons.Clock} style={styles.clock} />
                    <Text style={styles.timer}>{item?.attributes?.date}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.statuscontainer}
                    onPress={() => {
                      navigation.navigate('WorkDetails', {
                        title: 'Work Description',
                        data: item,
                      });
                    }}>
                    <Text
                      style={{
                        color: colors.BLACK,
                        textDecorationLine: 'underline',
                      }}>
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </ParentView>
  );

  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Cancel;
