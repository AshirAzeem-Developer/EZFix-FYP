import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
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
import {useSelector} from 'react-redux';
import {
  getJobOrders,
  getServiceSeekerBooking,
  getSkillsFromUserId,
  updateJobOrder,
} from '../../../../utils/ApiCall';
import {useNavigation} from '@react-navigation/native';
import apiEndPoints from '../../../../constants/apiEndPoints';
import {AppStackParamsList} from '../../../../navigators/navigator.seeker';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Pending: React.FC<AppStackParamsList> = () => {
  const {styles, colors, sizes} = useStyles();
  // ============== >> Navigation <<< ============== \\
  const navigation = useNavigation();

  // ============== >> Redux State for User (Fetching user type) <<< ============== \\

  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );

  // ================= >>> User States <<< ================= \\

  const [approved, setApproved] = useState(false);
  const [userSkillIds, setUserSkillIds] = useState<number[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [jobOrders, setJobOrders] = useState<any>({});

  // ==============>> Log User Id and Token <<================ \\
  const userId = useSelector((state: any) => state.user.user.user.id);
  // console.log('User id is: ', userId);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  // First effect: Fetch user skills
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
            ? getJobOrders(userSkillIds, userToken, 'Pending')
                .then(res => {
                  setJobOrders(res.data || {});
                  // console.log(
                  //   'Pending Job Order By User Skills:',
                  //   JSON.stringify(res.data, null, 2),
                  // );
                })
                .catch(err => {
                  console.log(
                    'Error fetching job orders:',
                    err.response ? err.response.data : err,
                  );
                })
            : fetchSeekerBookings();
        }
      })
      .catch(err => {
        console.log('Error fetching user skills:', err);
      });
  }, [userId, userToken]); // Ensure this effect runs when userId or userToken changes

  // Second effect: Fetch job orders when skill IDs are updated
  // useEffect(() => {
  //   console.log('Fetching job orders for skill IDs:', userSkillIds);
  //   if (userSkillIds.length > 0) {

  //   }
  // }, [userSkillIds, userToken]); // Ensure this effect runs when skill IDs are updated

  function fetchSeekerBookings() {
    getServiceSeekerBooking(userId, 'Pending', userToken)
      .then(res => {
        // console.log(
        //   'Service Seeker Pending  Bookings',
        //   JSON.stringify(res.data, null, 2),
        // );
        setJobOrders(res.data);
      })
      .catch(err => {
        console.log('Error fetching Service Seeker Bookings', err);
      });
  }

  const SeekerView = () => {
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <View>
          {jobOrders.data?.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
              data={jobOrders?.data}
              keyExtractor={item => item.id.toString()}
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
                          <Text style={styles.timer}>
                            {item?.attributes?.date}
                          </Text>
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
                No Pending Jobs
              </Text>
            </View>
          )}
        </View>
      </ParentView>
    );
  };
  const ProviderView = () => {
    function updateJobOrderStatus(jobId: number, jobStatus: string) {
      updateJobOrder(jobId, jobStatus, userToken)
        .then(res => {
          console.log('Job order status updated:', res.data);
        })
        .catch(err => {
          console.log(
            'Error updating job order status:',
            err.response ? err.response.data : err,
          );
        });
    }

    // console.log(
    //   'Job Orders -------------------------------- > ',
    //   jobOrders?.data,
    // );
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        {jobOrders && (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
            data={jobOrders?.data}
            // keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
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
                        onPress={() => [
                          updateJobOrderStatus(item.id, 'Cancelled'),
                          navigation.navigate('Cancelled'),
                        ]}
                      />
                      <Button
                        text="Approve"
                        bgcolor="#008000"
                        btnTextStyles={{color: 'white'}}
                        btnStyles={styles.btnAccept}
                        onPress={() => [
                          updateJobOrderStatus(item.id, 'Approved'),
                          navigation.navigate('Approved'),
                        ]}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <View style={styles.providerMainContainer}>
                    <View style={styles.container1}>
                      <Image
                        source={{
                          uri: `${apiEndPoints.BASE_URL}${item?.attributes?.service_seeker?.data?.attributes?.profileImage?.data?.attributes?.url}`,
                        }}
                        style={styles.providerImage}
                      />
                      <View style={styles.nameAndLocationContainer}>
                        <Text style={styles.seekerName}>
                          {
                            item?.attributes?.service_seeker?.data?.attributes
                              ?.name
                          }
                        </Text>
                        <View style={styles.locationContainer}>
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
                    <View style={styles.buttonsContainer}>
                      <Button
                        icon={icons.Phone}
                        text="Call"
                        bgcolor="#008000"
                        btnStyles={styles.callBtnStyles}
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
        )}
        {/* : (
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
              No Pending Jobs
            </Text>
          </View>
        )} */}
      </ParentView>
    );
  };

  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Pending;
