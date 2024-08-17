import React, {useState} from 'react';
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

const ProfileDetail = () => {
  const {styles, colors, sizes} = useStyles();

  const Reviews = [
    {
      id: 1,
      name: 'Lukas Jerrik',
      review:
        'Nothing to complain. A good guy with good service. Hope to have him sent to the next service order.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Lukas Jerrik',
      review:
        'Mike was our Handyman. He went above and beyond the call of duty. All of his work was first class, quick and professional.',
      rating: 5,
    },
  ];
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
            <Text style={styles.name}>Thomas Lukas</Text>
            <Text style={styles.price}>RS 250/hr</Text>
          </View>

          <View>
            <Text style={styles.summary}>
              Hardworking and experienced Handyman able to perform a variety of
              maintenance duties with skill. Adept in handling preventative
              maintenance, basic repairs, cosmetic upkeep, and simple appliance
              installations. Ability to handle power tools and some maintenance
              related machinery.
            </Text>
          </View>

          <View style={styles.providerimg}>
            <Image style={styles.img} source={images.dummyprovider} />
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
              <Text style={{color: colors.BLACK}}>Save</Text>
              <Image style={{alignSelf: 'center'}} source={icons.Book_Mark} />
            </View>
            <View>
              <Text style={{color: colors.BLACK}}>Share</Text>
              <Image style={{alignSelf: 'center'}} source={icons.Share} />
            </View>
          </View>

          <View>
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
          </View>
          <View>
            <Text
              style={{
                color: colors.BLACK,

                paddingTop: sizes.HEIGHT * 0.01,
                fontSize: sizes.WIDTH * 0.036,
              }}>
              Reviews
            </Text>
          </View>
          <View>
            <FlatList
              data={Reviews}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View>
                  <View style={styles.reviews}>
                    <Text style={{color: colors.BLACK}}>{item.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={icons.Star} style={styles.star} />
                      <Text style={{color: colors.BLACK}}>{item.rating}</Text>
                    </View>
                  </View>

                  <Text style={{color: colors.BLACK}}>{item.review}</Text>
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
          onPress={() => navigation.navigate('OrderSummary')}
        />
      </View>
    </>
  );
};
export default ProfileDetail;
