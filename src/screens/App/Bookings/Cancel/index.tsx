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
} from '../../../../utils/ApiCall';
import apiEndPoints from '../../../../constants/apiEndPoints';
import jobOrder from '../../../../store/reducer/job-order';

const Cancel = ({route, navigation}) => {
  const {styles, colors, sizes} = useStyles();
  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );
  const userId = useSelector((state: any) => state.user?.user?.user?.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

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
            ? getJobOrders(skillIds, userToken, 'Cancelled')
                .then(res => {
                  console.log(
                    'Cancelled Job Orders',
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
    getServiceSeekerBooking(userId, 'Cancelled', userToken)
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
                          <Image source={icons.CALENDAR} style={styles.clock} />
                          <Text style={styles.timer}>
                            {item?.attributes?.date}
                          </Text>
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
                    <Text style={styles.work} numberOfLines={2}>
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
                  </View>
                </View>
                {/* =========== >> Seeker Container << ================== */}
                <View>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,128,0,0.2)',
                      width: sizes.WIDTH * 0.9,
                      height: sizes.HEIGHT * 0.14,
                      marginBottom: sizes.HEIGHT * 0.02,
                      marginHorizontal: sizes.WIDTH * 0.02,
                      alignSelf: 'center',
                      borderRadius: sizes.WIDTH * 0.02,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginLeft: sizes.WIDTH * 0.02,
                      }}>
                      <Image
                        source={{
                          uri: `${apiEndPoints.BASE_URL}${item?.attributes?.service_seeker?.data?.attributes?.profileImage?.data?.attributes?.url}`,
                        }}
                        style={{
                          width: sizes.WIDTH * 0.14,
                          height: sizes.HEIGHT * 0.07,
                          borderRadius: sizes.WIDTH * 1,
                          margin: sizes.WIDTH * 0.015,
                          marginTop: sizes.WIDTH * 0.03,
                        }}
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
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                          }}>
                          <Image
                            source={icons.Location}
                            style={{
                              width: sizes.WIDTH * 0.03,
                              height: sizes.HEIGHT * 0.02,
                              marginTop: sizes.WIDTH * 0.007,
                            }}
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
            <Text>No Cancelled Bookings Found</Text>
          </View>
        )}
      </ParentView>
    );
  };

  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Cancel;
