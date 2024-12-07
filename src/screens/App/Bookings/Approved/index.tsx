import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';

//local imports
import icons from '../../../../assets/icons';
import images from '../../../../assets/images';
import SellerCard from '../../../../components/TopRatedSellerCard';
import {ParentView} from '../../../../components/common/ParentView/ParentView';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';
import Button from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  createLocation,
  getJobOrders,
  getServiceSeekerBooking,
  getSkillsFromUserId,
} from '../../../../utils/ApiCall';
import apiEndPoints from '../../../../constants/apiEndPoints';
import Geolocation from '@react-native-community/geolocation';

//third party library

const Approved = ({navigation}) => {
  const userId = useSelector((state: any) => state.user?.user?.user?.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );

  const {styles, colors, sizes} = useStyles();

  const [userSkillIds, setUserSkillIds] = useState<number[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [jobOrders, setJobOrders] = useState<any>({});

  useEffect(() => {
    getSkillsFromUserId(userId, userToken)
      .then(res => {
        const skills = res.data.skills || [];
        setUserSkills(skills);
        const skillIds = skills.map((skill: any) => skill.id);
        setUserSkillIds(skillIds); // Update skill IDs state

        // console.log('Skills', JSON.stringify(skills, null, 2));
        // console.log('User skills:', JSON.stringify(skills, null, 2));
        // console.log('Skill IDs:', skillIds);
        {
          userType !== 'seeker'
            ? getJobOrders(skillIds, userToken, 'Approved')
                .then(res => {
                  // console.log(
                  //   'Approved Job Orders',
                  //   JSON.stringify(res.data.data, null, 2),
                  // );
                  setJobOrders(res.data);
                })
                .catch(err => {
                  console.log('Error in fetching Approved Job Orders', err);
                })
            : fetchSeekerBookings();
        }
      })
      .catch(err => {
        console.log('Error fetching user skills:', err);
      });
  }, []);

  function fetchSeekerBookings() {
    getServiceSeekerBooking(userId, 'Approved', userToken)
      .then(res => {
        // console.log(
        //   'Service Seeker Bookings',
        //   JSON.stringify(res.data, null, 2),
        // );
        setJobOrders(res.data);
      })
      .catch(err => {
        console.log('Error fetching Service Seeker Bookings', err);
      });
  }

  console.log('User Id:', userId);

  const SeekerView = () => {
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        {jobOrders.data?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
            data={jobOrders?.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
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
                      <Image source={icons.CALENDAR} style={styles.clock} />
                      <Text style={styles.timer}>{item?.attributes?.date}</Text>
                    </View>
                    <View style={styles.statuscontainer}>
                      <Text style={{color: colors.BLACK}}>
                        Status : {item?.attributes?.jobStatus}
                      </Text>
                      <Text style={styles.status}> {item.status}</Text>
                    </View>
                    <View style={styles.bookbutton}>
                      <Button
                        onPress={() => {
                          navigation.navigate('MapScreen');
                        }}
                        text="Track Job"
                        bgcolor={colors.PRIMARY}
                        btnStyles={styles.btnStyles}
                      />
                      {/* <Button
                        onPress={() => {
                          navigation.navigate('StartStopWorking');
                        }}
                        text="Start Working"
                        bgcolor={colors.PRIMARY}
                        btnStyles={styles.btnStyles}
                      /> */}
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: sizes.WIDTH * 0.05,
                color: colors.BLACK,
              }}>
              No Approved {userType === 'seeker' ? ' Bookings' : 'Jobs'}
            </Text>
          </View>
        )}
      </ParentView>
    );
  };

  const ProviderView = () => {
    // Change to track individual job order tracking states
    const [jobOrdersTracking, setJobOrdersTracking] = useState<{
      [jobId: string]: {
        isTracking: boolean;
        watchId: number | null;
      };
    }>({});

    // Request location permissions
    const requestLocationPermission = useCallback(async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.error('Permission request error:', err);
          return false;
        }
      }
      return true; // iOS typically handles permissions differently
    }, []);

    const startLocationTracking = useCallback(
      async (jobItem: any) => {
        const jobId = jobItem.id.toString();
        const hasPermission = await requestLocationPermission();

        if (!hasPermission) {
          Alert.alert(
            'Permission Denied',
            'Location tracking requires location permission',
          );
          return;
        }

        // Stop any existing tracking for this specific job order
        const existingTracking = jobOrdersTracking[jobId];
        if (existingTracking?.watchId) {
          Geolocation.clearWatch(existingTracking.watchId);
        }

        const watchId = Geolocation.watchPosition(
          position => {
            try {
              console.log(
                'Location Updated:',
                position.coords.latitude,
                position.coords.longitude,
                userId,
                jobItem?.attributes?.service_seeker?.data?.id,
              );
              createLocation(userToken, {
                data: {
                  long: position.coords.longitude,
                  lat: position.coords.latitude,
                  sender_id: userId,
                  recipientId: jobItem?.attributes?.service_seeker?.data?.id,
                },
              })
                .then(res => {
                  console.log('Location Updated:', res.data);
                })
                .catch(err => {
                  console.error('Location update failed:', err);
                  Alert.alert('Location Error', 'Unable to share location');
                });
            } catch (error) {
              console.error('Location tracking error:', error);
            }
          },
          error => {
            console.error('Geolocation watch error:', error);
            Alert.alert('Location Error', error.message);

            // Stop tracking on error for this specific job order
            stopLocationTracking(jobId);
          },
          {
            enableHighAccuracy: true,
            distanceFilter: 10, // Update every 10 meters
            interval: 5000, // Try to get location every 5 seconds
            fastestInterval: 2000, // But no more frequently than every 2 seconds
          },
        );

        // Update tracking state for this specific job order
        setJobOrdersTracking(prev => ({
          ...prev,
          [jobId]: {
            isTracking: true,
            watchId,
          },
        }));
      },
      [userId, userToken, jobOrdersTracking],
    );

    // Modify stopLocationTracking to work with specific job order
    const stopLocationTracking = useCallback(
      (jobId: string) => {
        const jobTracking = jobOrdersTracking[jobId];
        if (jobTracking?.watchId) {
          Geolocation.clearWatch(jobTracking.watchId);

          // Remove tracking for this specific job order
          setJobOrdersTracking(prev => {
            const updated = {...prev};
            delete updated[jobId];
            return updated;
          });
        }
      },
      [jobOrdersTracking],
    );

    // Cleanup on component unmount
    useEffect(() => {
      return () => {
        // Stop all ongoing trackings
        Object.keys(jobOrdersTracking).forEach(jobId => {
          const tracking = jobOrdersTracking[jobId];
          if (tracking?.watchId) {
            Geolocation.clearWatch(tracking.watchId);
          }
        });
      };
    }, [jobOrdersTracking]);

    const renderJobItem = ({item}: any) => {
      const serviceSeeker = item?.attributes?.service_seeker?.data?.attributes;
      const skill =
        item?.attributes?.skill?.data?.attributes?.category?.data?.attributes;

      return (
        <View
          style={[
            styles.providerscard,
            {backgroundColor: 'white', elevation: 5},
          ]}>
          <View style={styles.provivder}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={{
                  uri: `${apiEndPoints.BASE_URL}${skill?.icon?.data?.attributes?.url}`,
                }}
                style={styles.providerViewimg}
              />
              <View style={styles.items}>
                <Text style={styles.job}>{skill?.name}</Text>
                <Text style={styles.work}>{item?.attributes?.description}</Text>
                <View style={styles.time}>
                  <Image source={icons.Clock} style={styles.clock} />
                  <Text style={styles.timer}>{item?.attributes?.date}</Text>
                </View>
                <TouchableOpacity style={styles.statuscontainer}>
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
            <View style={styles.btnContainer}>
              {!jobOrdersTracking[item.id]?.isTracking ? (
                <Button
                  text="Start Tracking"
                  onPress={() => startLocationTracking(item)}
                  bgcolor="#008000"
                  btnStyles={styles.btnStartTrackingStyles}
                />
              ) : (
                <Button
                  text="Stop Tracking"
                  onPress={() => stopLocationTracking(item.id.toString())}
                  bgcolor="#FF0000"
                  btnStyles={styles.btnStopTrackingStyles}
                />
              )}
              <Button
                text="Start Job"
                bgcolor="#008000"
                btnTextStyles={{color: 'white'}}
                btnStyles={styles.btnStartJobStyles}
                onPress={() => console.log('Start Working Pressed')}
              />
            </View>
          </View>
          <View>
            <View style={styles.seekerCont}>
              <View style={styles.detailsCont}>
                <Image
                  source={{
                    uri: `${apiEndPoints.BASE_URL}${serviceSeeker?.profileImage?.data?.attributes?.url}`,
                  }}
                  style={styles.seekerDetails}
                />
                <View style={{marginLeft: sizes.WIDTH * 0.03}}>
                  <Text
                    style={{fontSize: sizes.WIDTH * 0.045, fontWeight: 'bold'}}>
                    {serviceSeeker?.name}
                  </Text>
                  <View style={styles.locationCont}>
                    <Image
                      source={icons.Location}
                      style={styles.locationIcon}
                    />
                    <Text style={{marginLeft: sizes.WIDTH * 0.01}}>
                      38 Chestnut StreetStaunton
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.seekerBtnsContainer}>
                <Button
                  icon={icons.Phone}
                  text="Call"
                  bgcolor="#008000"
                  btnStyles={{
                    width: sizes.WIDTH * 0.25,
                    height: sizes.HEIGHT * 0.038,
                    marginLeft: sizes.WIDTH * 0.02,
                  }}
                  onPress={() =>
                    Linking.openURL(`tel:+${serviceSeeker?.phoneNumber}`)
                  }
                />
                <Button
                  icon={icons.MESSAGE_TAB_ACTIVE}
                  text="ChatNow"
                  bgcolor="#ffffff"
                  btnStyles={styles.chatNowBtn}
                  btnTextStyles={{color: 'black'}}
                  onPress={() => navigation.navigate('Messages')}
                />
              </View>
            </View>
          </View>
        </View>
      );
    };

    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        {jobOrders.data?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
            data={jobOrders?.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => renderJobItem({item})}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>No Approved Job Orders Found</Text>
          </View>
        )}
      </ParentView>
    );
  };
  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Approved;
