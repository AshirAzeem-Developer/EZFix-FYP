import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

// Local imports
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import {FadeInDown} from 'react-native-reanimated';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import Header from '../../../components/AppHeader';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button/Button';
import END_POINTS from '../../../constants/apiEndPoints';
import {useSelector} from 'react-redux';
import {
  getJobOrdersByUserNameWithReviews,
  getUserById,
} from '../../../utils/ApiCall';
import {fonts} from 'react-native-elements/dist/config';

const ProfileDetail = ({route}) => {
  const {styles, colors, sizes} = useStyles();
  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const [provider, setProvider] = useState(null);
  const [reviews, setReviews] = useState(null);

  const providerData = route?.params?.provider;
  // console.log('ProviderId: ', JSON.stringify(providerData.id, null, 2));
  // console.log(
  //   'ProviderHourlyRate: ',
  //   JSON.stringify(providerData.skills[0].hourlyRate, null, 2),
  // );
  useEffect(() => {
    getUserById(userToken, providerData.id)
      .then(res => {
        setProvider(res.data);
        // console.log('ProviderData: ', JSON.stringify(res.data, null, 2));
      })
      .catch(err => {
        console.log('Error: ', err);
      });

    // console.log('ProviderData: ', JSON.stringify(providerData, null, 2));
    // console.log(
    //   'Photo URL: ',
    //   `${END_POINTS.BASE_URL}${provider?.profileImage?.url}`,
    // );
    getJobOrdersByUserNameWithReviews(userToken, providerData.name)
      .then(res => {
        setReviews(res.data);
        // console.log(
        //   'Reviews: ',
        //   JSON.stringify(res.data?.description, null, 2),
        // );
        console.log('Reviews: ', JSON.stringify(reviews?.data, null, 2));
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, [providerData]);
  // console.log('Reviews: ', reviews);

  const navigation = useNavigation();
  return (
    <>
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <Header leftIconAction={() => navigation.goBack()} />
        <ScrollView
          style={{
            paddingHorizontal: sizes.WIDTH * 0.05,
            marginVertical: sizes.HEIGHT * 0.02,
            // height: sizes.HEIGHT * 0.4,
          }}
          contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.provider}>
            <Text style={styles.name}>{providerData?.name}</Text>
            <Text style={styles.price}>
              RS {providerData?.skills[0]?.hourlyRate}/hr
            </Text>
          </View>

          <View>
            <Text style={styles.summary}>
              {providerData?.skills[0]?.experiences[0]?.description}
            </Text>
          </View>

          <View style={styles.providerimg}>
            <Image
              style={styles.img}
              source={{
                uri: `${END_POINTS.BASE_URL}${provider?.profileImage?.url}`,
              }}
            />
          </View>

          <View style={styles.social}>
            <View>
              <Text style={{color: colors.BLACK}}>Jobs</Text>
              <Text style={{color: colors.BLACK, alignSelf: 'center'}}>56</Text>
            </View>
            <View>
              <Text style={{color: colors.BLACK}}>Rating</Text>
              <Text style={{color: colors.BLACK, alignSelf: 'center'}}>
                4.6
              </Text>
            </View>

            <View>
              <Text style={{color: colors.BLACK}}>Share</Text>
              <Image style={{alignSelf: 'center'}} source={icons.Share} />
            </View>
          </View>

          {/* <View>
            <Text
              style={{
                color: colors.BLACK,
                paddingLeft: sizes.WIDTH * 0.01,
                paddingTop: sizes.HEIGHT * 0.02,
                fontSize: sizes.WIDTH * 0.036,
              }}>
              Projects
            </Text>
          </View>

          <View style={styles.project}>
            <Image source={images.project} style={styles.projectpic} />
            <Image source={images.project} style={styles.projectpic} />
            <Image source={images.project} style={styles.projectpic} />
          </View> */}
          <View>
            <Text style={styles.reviewsText}>Reviews</Text>
          </View>
          <View>
            <FlatList
              data={reviews?.data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View>
                  <View style={styles.reviews}>
                    <Text style={{color: colors.BLACK}}>
                      Review By :{' '}
                      {item.attributes?.user_review?.data?.attributes?.reviewBy}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image source={icons.Star} style={styles.star} />
                      <Text
                        style={{
                          color: colors.BLACK,
                          marginHorizontal: sizes.WIDTH * 0.01,
                        }}>
                        {
                          item.attributes?.user_review?.data?.attributes
                            ?.starNumber
                        }
                      </Text>
                    </View>
                  </View>

                  <Text style={{color: colors.BLACK}}>
                    {
                      item.attributes?.user_review?.data?.attributes
                        ?.reviewDescription
                    }
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ParentView>
      <View
        style={{
          width: sizes.WIDTH * 1,
          flexDirection: 'row',
          justifyContent: 'space-between',

          position: 'absolute',
          backgroundColor: colors.WHITE,
          bottom: 0,
          paddingHorizontal: sizes.WIDTH * 0.05,
          paddingVertical: sizes.HEIGHT * 0.02,
          zIndex: 1,
        }}>
        <Button
          withAnimation
          btnStyles={styles.chatNowBtn}
          icon={icons.MESSAGE_TAB_ACTIVE}
          bgcolor="#FFFfff"
          btnTextStyles={{color: colors.BLACK}}
          text="Chat Now"
          onPress={() => console.log('ChatNow')}
        />
        <Button
          withAnimation
          btnStyles={styles.bookNowBtn}
          bgcolor="#008000"
          text="Book Now"
          btnTextStyles={{color: colors.WHITE}}
          onPress={() =>
            navigation.navigate('OrderSummary', {data: providerData})
          }
        />
      </View>
    </>
  );
};
export default ProfileDetail;
