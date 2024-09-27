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
  Linking,
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
  getJobOrders,
  getServiceSeekerBooking,
  getSkillsFromUserId,
} from '../../../../utils/ApiCall';
import apiEndPoints from '../../../../constants/apiEndPoints';
import jobOrder from '../../../../store/reducer/job-order';

//third party library

const Approved = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();
  const [workState, setWorkState] = useState(true);
  const [userSkillIds, setUserSkillIds] = useState<number[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [jobOrders, setJobOrders] = useState<any>({});

  const userId = useSelector((state: any) => state.user?.user?.user?.id);
  // console.log('User id is: ', userId);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );

  useEffect(() => {
    getSkillsFromUserId(userId, userToken)
      .then(res => {
        const skills = res.data.skills || [];
        setUserSkills(skills);
        const skillIds = skills.map((skill: any) => skill.id);
        setUserSkillIds(skillIds); // Update skill IDs state

        console.log('Skills', JSON.stringify(skills, null, 2));
        // console.log('User skills:', JSON.stringify(skills, null, 2));
        // console.log('Skill IDs:', skillIds);
        {
          userType !== 'seeker'
            ? getJobOrders(skillIds, userToken, 'Approved')
                .then(res => {
                  console.log(
                    'Approved Job Orders',
                    JSON.stringify(res.data.data, null, 2),
                  );
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
        console.log(
          'Service Seeker Bookings',
          JSON.stringify(res.data, null, 2),
        );
        setJobOrders(res.data);
      })
      .catch(err => {
        console.log('Error fetching Service Seeker Bookings', err);
      });
  }

  console.log('JobOrderLength', jobOrders.data?.length);

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
                          navigation.navigate('StartStopWorking');
                        }}
                        text="Start Working"
                        bgcolor={colors.PRIMARY}
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
              No Pending {userType === 'seeker' ? ' Bookings' : 'Jobs'}
            </Text>
          </View>
        )}
      </ParentView>
    );
  };
  const ProviderView = () => {
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
                    <TouchableOpacity style={styles.statuscontainer}>
                      <Text
                        style={{
                          color: colors.BLACK,
                          textDecorationLine: 'underline',
                        }}>
                        View Details
                      </Text>
                    </TouchableOpacity>
                    {workState && (
                      <View style={styles.btnContainer}>
                        <Button
                          text="Start Job"
                          bgcolor="#008000"
                          btnTextStyles={{color: 'white'}}
                          btnStyles={styles.btnStartJobStyles}
                          onPress={() => {
                            console.log('Start Working Pressed');
                          }}
                        />
                      </View>
                    )}
                  </View>
                </View>
                <View>
                  <View style={styles.seekerCont}>
                    <View style={styles.detailsCont}>
                      <Image
                        source={{
                          uri: `${apiEndPoints.BASE_URL}${item?.attributes?.service_seeker?.data?.attributes?.profileImage?.data?.attributes?.url}`,
                        }}
                        style={styles.seekerDetails}
                      />
                      <View
                        style={{
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          marginLeft: sizes.WIDTH * 0.03,
                        }}>
                        <Text
                          style={{
                            fontSize: sizes.WIDTH * 0.045,
                            fontWeight: 'bold',
                          }}>
                          {
                            item?.attributes?.service_seeker?.data?.attributes
                              ?.name
                          }
                        </Text>
                        <View style={styles.locationCont}>
                          <Image
                            source={icons.Location}
                            style={styles.locationIcon}
                          />
                          <Text
                            style={{
                              marginLeft: sizes.WIDTH * 0.01,
                            }}>
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
                        onPress={() => {
                          Linking.openURL(
                            `tel:+${item?.attributes?.service_seeker?.data?.attributes?.phoneNumber}`,
                          );
                        }}
                      />
                      <Button
                        icon={icons.MESSAGE_TAB_ACTIVE}
                        text="ChatNow"
                        bgcolor="#ffffff"
                        btnStyles={styles.chatNowBtn}
                        btnTextStyles={{color: 'black'}}
                        onPress={() => {
                          navigation.navigate('Messages');
                        }}
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
            <Text>No Approved Job Orders Found</Text>
          </View>
        )}
      </ParentView>
    );
  };
  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Approved;
