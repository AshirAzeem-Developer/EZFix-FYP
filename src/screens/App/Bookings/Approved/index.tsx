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
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getJobOrders, getSkillsFromUserId} from '../../../../utils/ApiCall';
import apiEndPoints from '../../../../constants/apiEndPoints';

//third party library

const Approved = () => {
  const {styles, colors, sizes} = useStyles();
  const [workState, setWorkState] = useState(true);
  const userType = useSelector((state: any) => state?.user?.user?.roleType);

  const work = [
    {
      id: 1,
      job: 'Wall Repair',
      work: 'Leaks in the Bathroom',
      time: 'Jan 21,2022 at 4pm',
      Price: 'RS 250/hr',
      status: 'pending',
      image: images.handyman,
    },
    {
      id: 2,
      job: 'Wall Repair',
      work: 'Leaks in the Bathroom',
      time: 'Jan 21,2022 at 4pm',
      Price: 'RS 250/hr',
      status: 'pending',
      image: images.handyman,
    },
    {
      id: 3,
      job: 'Wall Repair',
      work: 'Leaks in the Bathroom',
      time: 'Jan 21,2022 at 4pm',
      Price: 'RS 250/hr',
      status: 'pending',
      image: images.handyman,
    },
    {
      id: 4,
      job: 'Wall Repair',
      work: 'Leaks in the Bathroom',
      time: 'Jan 21,2022 at 4pm',
      Price: 'RS 250/hr',
      status: 'pending',
      image: images.handyman,
    },
  ];

  const SeekerView = () => {
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
            data={work}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View>
                <View style={styles.providerscard}>
                  <View style={styles.provivder}>
                    <View>
                      <Image source={item.image} style={styles.providerimg} />
                    </View>
                    <View style={styles.items}>
                      <Text style={styles.job}>{item.job}</Text>
                      <Text style={styles.work}>{item.work}</Text>
                      <View style={styles.time}>
                        <Image source={icons.Clock} style={styles.clock} />
                        <Text style={styles.timer}>{item.time}</Text>
                      </View>
                      <View style={styles.statuscontainer}>
                        <Text style={{color: colors.BLACK}}>Status :</Text>
                        <Text style={styles.status}> {item.status}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ParentView>
    );
  };
  const ProviderView = () => {
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
          data={work}
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
                  <Image source={item.image} style={styles.providerViewimg} />
                </View>
                <View style={styles.items}>
                  <Text style={styles.job}>{item.job}</Text>
                  <Text style={styles.work}>{item.work}</Text>
                  <View style={styles.time}>
                    <Image source={icons.Clock} style={styles.clock} />
                    <Text style={styles.timer}>{item.time}</Text>
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
                    <View
                      style={{
                        flexDirection: 'row',
                        marginVertical: sizes.HEIGHT * 0.01,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: sizes.WIDTH * 0.45,
                      }}>
                      <Button
                        text="Start Job"
                        bgcolor="#008000"
                        btnTextStyles={{color: 'white'}}
                        btnStyles={{
                          width: sizes.WIDTH * 0.22,
                          height: sizes.HEIGHT * 0.038,
                          marginLeft: sizes.WIDTH * 0.02,
                        }}
                        onPress={() => {
                          console.log('Start Working Pressed');
                        }}
                      />
                    </View>
                  )}
                </View>
              </View>
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
                      source={images.handyman}
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
                        Minnie Ramsey
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      justifyContent: 'flex-end',
                      marginRight: sizes.WIDTH * 0.02,
                    }}>
                    <Button
                      icon={icons.Phone}
                      text="Call"
                      bgcolor="#008000"
                      btnStyles={{
                        width: sizes.WIDTH * 0.25,
                        height: sizes.HEIGHT * 0.038,
                        marginLeft: sizes.WIDTH * 0.02,
                      }}
                      onPress={() => {}}
                    />
                    <Button
                      icon={icons.MESSAGE_TAB_ACTIVE}
                      text="ChatNow"
                      bgcolor="#ffffff"
                      btnStyles={{
                        width: sizes.WIDTH * 0.32,
                        height: sizes.HEIGHT * 0.038,
                        marginLeft: sizes.WIDTH * 0.02,
                      }}
                      btnTextStyles={{color: 'black'}}
                      onPress={() => {}}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </ParentView>
    );
  };
  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Approved;
