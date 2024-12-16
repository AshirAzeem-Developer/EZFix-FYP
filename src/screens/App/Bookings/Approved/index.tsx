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

  // jobOrders?.data?.forEach(job => {
  //   console.log('Job ID:', job.id);
  // });

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
            ListEmptyComponent={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: sizes.HEIGHT * 0.3,
                }}>
                <Text
                  style={{
                    fontSize: sizes.WIDTH * 0.05,
                    color: colors.BLACK,
                  }}>
                  {'No Approved Jobs'}
                </Text>
              </View>
            }
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.providerscard}>
                {/* <Text style={{color:'black'}}>Job ID: {item.id}</Text> */}
                <View style={styles.provider}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
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
                        <Text style={styles.timer}>
                          {item?.attributes?.date}
                        </Text>
                      </View>
                      <View style={styles.statuscontainer}>
                        <Text style={{color: colors.BLACK}}>
                          Status : {item?.attributes?.jobStatus}
                        </Text>
                        <Text style={styles.status}> {item.status}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bookButtonContainer}>
                    <View>
                      <Button
                        onPress={() => {
                          navigation.navigate('MapScreen');
                        }}
                        text="Track Job"
                        bgcolor={'#66BB6A'}
                        btnStyles={styles.btnStyles}
                      />
                    </View>
                    <View>
                      <Button
                        onPress={() => {
                          navigation.navigate('StartStopWorking', {
                            jobId: item.id,
                          });
                        }}
                        text="Start Working"
                        bgcolor={'#2E7D32'}
                        btnStyles={styles.btnStyles}
                      />
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
      [jobId: string]: boolean;
    }>({}); // Tracks which job orders are "On the Way"
    const [jobOrdersCanStartJob, setJobOrdersCanStartJob] = useState<{
      [jobId: string]: boolean;
    }>({});

    useEffect(() => {
      // Track location only for active "On the Way" job orders
      const activeJobIds = Object.keys(jobOrdersTracking).filter(
        jobId => jobOrdersTracking[jobId],
      );

      if (activeJobIds.length === 0) {
        return; // No active tracking, exit early
      }

      const intervalId = setInterval(() => {
        Geolocation.getCurrentPosition(
          (info: any) => {
            console.log(
              'Location:',
              info.coords.latitude,
              info.coords.longitude,
            );

            activeJobIds.forEach(jobId => {
              createLocation(userToken, {
                data: {
                  long: info.coords.longitude,
                  lat: info.coords.latitude,
                  sender_id: userId,
                  recipientId: 3, // Replace with dynamic recipientId if needed
                },
              })
                .then(res => {
                  console.log(`Location Updated for Job ${jobId}:`, res.data);
                })
                .catch(err => {
                  console.error(
                    `Location update failed for Job ${jobId}:`,
                    err,
                  );
                  Alert.alert('Location Error', 'Unable to share location');
                });
            });
          },
          error => {
            console.error('Geolocation error:', error);
          },
        );
      }, 10000);

      return () => {
        clearInterval(intervalId); // Clean up interval on unmount
      };
    }, [jobOrdersTracking]);

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

    const startTracking = useCallback(
      async (jobId: string) => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
          Alert.alert(
            'Permission Denied',
            'Location tracking requires location permission',
          );
          return;
        }

        setJobOrdersTracking(prev => ({
          ...prev,
          [jobId]: true, // Mark this job as "On the Way"
        }));

        // Ensure "Start Job" is disabled when tracking starts
        setJobOrdersCanStartJob(prev => ({
          ...prev,
          [jobId]: false,
        }));
      },
      [requestLocationPermission],
    );

    const stopTracking = useCallback((jobId: string) => {
      setJobOrdersTracking(prev => ({
        ...prev,
        [jobId]: false, // Stop tracking for this job
      }));
      setJobOrdersCanStartJob(prev => ({
        ...prev,
        [jobId]: true, // Enable "Start Job" when "Arrived" is pressed
      }));
    }, []);

    const renderJobItem = ({item}: any) => {
      const isTracking = jobOrdersTracking[item.id] ?? false;
      const serviceSeeker = item?.attributes?.service_seeker?.data?.attributes;
      const skill =
        item?.attributes?.skill?.data?.attributes?.category?.data?.attributes;
      const canStartJob = jobOrdersCanStartJob[item.id] ?? false;

      console.log(
        'Full Item is  ======= >> ',
        JSON.stringify(
          item?.attributes?.service_seeker?.data?.attributes?.name,
          null,
          2,
        ),
      );
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
            <View style={styles.btnContainer}>
              {!isTracking ? (
                <Button
                  text="On the Way"
                  onPress={() => startTracking(item.id.toString())}
                  bgcolor="#008000"
                  btnStyles={styles.btnStartTrackingStyles}
                />
              ) : (
                <Button
                  text="Arrived"
                  onPress={() => stopTracking(item.id.toString())}
                  bgcolor="#FF0000"
                  btnStyles={styles.btnStopTrackingStyles}
                />
              )}
              <Button
                text="Start Job"
                bgcolor={canStartJob ? '#004000' : '#808080'} // Change color based on state
                btnTextStyles={{color: 'white'}}
                btnStyles={[
                  styles.btnStartJobStyles,
                  {opacity: canStartJob ? 1 : 0.5}, // Dim the button if not enabled
                ]}
                onPress={() =>
                  canStartJob && navigation.navigate('StartStopWorking')
                }
                disabled={!canStartJob} // Disable the button when not allowed
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
                  bgcolor="#f0f0f0"
                  btnStyles={styles.chatNowBtn}
                  btnTextStyles={{color: 'black'}}
                  onPress={() =>
                    navigation.navigate('ChatOpen', {
                      data: item?.attributes?.service_seeker?.data?.id,
                      name: item?.attributes?.service_seeker?.data?.attributes
                        ?.name,
                      friendData:
                        item?.attributes?.service_seeker?.data?.attributes
                          ?.profileImage,
                      profileImageURL:
                        item?.attributes?.service_seeker?.data?.attributes
                          .profileImage?.data?.attributes.url,
                    })
                  }
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
            ListEmptyComponent={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: sizes.HEIGHT * 0.3,
                }}>
                <Text
                  style={{
                    fontSize: sizes.WIDTH * 0.05,
                    color: colors.BLACK,
                  }}>
                  {'No Approved Jobs'}
                </Text>
              </View>
            }
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
