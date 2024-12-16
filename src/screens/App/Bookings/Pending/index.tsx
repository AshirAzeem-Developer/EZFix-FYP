import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

// Local imports
import icons from '../../../../assets/icons';
import images from '../../../../assets/images';
import {ParentView} from '../../../../components/common/ParentView/ParentView';
import useStyles from './style';
import Button from '../../../../components/Button/Button';
import {useSelector} from 'react-redux';
import {
  getJobOrders,
  getServiceSeekerBooking,
  getSkillsFromUserId,
  updateJobOrder,
} from '../../../../utils/ApiCall';
import {useNavigation} from '@react-navigation/native';
import apiEndPoints from '../../../../constants/apiEndPoints';

const {width, height} = Dimensions.get('window');

const Pending = () => {
  const {styles, colors, sizes} = useStyles();
  const navigation = useNavigation();

  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );
  const userId = useSelector((state: any) => state.user.user.user.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [jobOrders, setJobOrders] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);
  const [actionInProgress, setActionInProgress] = useState(false); // Prevent multiple actions
  const [updating, setUpdating] = useState(false); // Track updating state

  useEffect(() => {
    fetchData();
  }, [userId, userToken]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const skillsResponse = await getSkillsFromUserId(userId, userToken);
      const skills = skillsResponse.data.skills || [];
      setUserSkills(skills);

      if (userType !== 'seeker') {
        const skillIds = skills.map((skill: any) => skill.id);
        const jobOrdersResponse = await getJobOrders(
          skillIds,
          userToken,
          'Pending',
        );
        setJobOrders(jobOrdersResponse.data || {});
      } else {
        await fetchSeekerBookings();
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSeekerBookings = async () => {
    try {
      const response = await getServiceSeekerBooking(
        userId,
        'Pending',
        userToken,
      );
      setJobOrders(response.data);
    } catch (err) {
      console.error('Error fetching Service Seeker Bookings', err);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const updateJobOrderStatus = async (jobId: number, jobStatus: string) => {
    if (actionInProgress) return; // Prevent multiple actions

    setActionInProgress(true);
    setUpdating(true); // Show updating indicator
    try {
      await updateJobOrder(jobId, jobStatus, userToken);
      console.log(`Job order status updated to ${jobStatus}`);
      await fetchData();
      if (jobStatus === 'Cancelled') navigation.navigate('Cancelled');
      if (jobStatus === 'Approved') navigation.navigate('Approved');
    } catch (err) {
      console.error('Error updating job order status:', err);
    } finally {
      setActionInProgress(false);
      setUpdating(false); // Hide updating indicator
    }
  };

  const renderEmptyComponent = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: sizes.HEIGHT * 0.3,
      }}>
      <Text style={{fontSize: sizes.WIDTH * 0.05, color: colors.BLACK}}>
        {'No Pending Jobs'}
      </Text>
    </View>
  );

  const renderUpdatingIndicator = () =>
    updating && (
      <View
        style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1}}>
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      </View>
    );

  const SeekerView = () => (
    <ParentView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
          data={jobOrders?.data}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[colors.PRIMARY]}
            />
          }
          ListEmptyComponent={renderEmptyComponent}
          renderItem={({item}) => (
            <View>
              <View style={styles.providerscard}>
                <View style={styles.provivder}>
                  <View>
                    <Image
                      source={{
                        uri: `${apiEndPoints.BASE_URL}${item?.attributes?.skill?.data?.attributes?.category?.data?.attributes?.icon?.data?.attributes?.url}`,
                      }}
                      style={styles.providerimg}
                    />
                  </View>
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
                      <Image source={icons.Clock} style={styles.clock} />
                      <Text style={styles.timer}>{item?.attributes?.date}</Text>
                    </View>
                    <View style={styles.statuscontainer}>
                      <Text style={{color: colors.BLACK}}>
                        Status :{' '}
                        <Text style={styles.status}>
                          {item?.attributes?.jobStatus}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
      {renderUpdatingIndicator()}
    </ParentView>
  );

  const ProviderView = () => (
    <ParentView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
          data={jobOrders?.data}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[colors.PRIMARY]}
            />
          }
          ListEmptyComponent={renderEmptyComponent}
          renderItem={({item}) => (
            <View
              style={[
                styles.providerscard,
                {
                  backgroundColor: 'white',
                  elevation: 5,
                },
              ]}>
              <View style={styles.provivder}>
                <View>
                  <Image
                    source={{
                      uri: `${apiEndPoints.BASE_URL}${item?.attributes?.skill?.data?.attributes?.category?.data?.attributes?.icon?.data?.attributes?.url}`,
                    }}
                    style={styles.providerViewimg}
                  />
                </View>
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
                    <Text style={styles.viewDetailsText}>View Details</Text>
                  </TouchableOpacity>
                  <View style={styles.btnContainer}>
                    <Button
                      text="Cancel"
                      bgcolor="#FFE2E2"
                      btnTextStyles={{color: 'black'}}
                      btnStyles={styles.rejectBtn}
                      onPress={() => updateJobOrderStatus(item.id, 'Cancelled')}
                    />
                    <Button
                      text="Approve"
                      bgcolor="#008000"
                      btnTextStyles={{color: 'white'}}
                      btnStyles={styles.btnAccept}
                      onPress={() => updateJobOrderStatus(item.id, 'Approved')}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
      {renderUpdatingIndicator()}
    </ParentView>
  );

  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Pending;
