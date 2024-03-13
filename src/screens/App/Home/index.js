import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native';

//local imports
import styles from './style';
import MyStatusBar from '../../../components/StatusBar';
import HomeHeader from '../../../components/HomeHeader';
import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Index = ({navigation, ...props}) => {
  return (
    <>
      <MyStatusBar backgroundColor="#F6F9FE" />
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        <ScrollView
          contentContainerStyle={styles.contStyle}
          showsVerticalScrollIndicator={false}>
          <View style={styles.headingCon}>
            <Text style={styles.headingText}>Explore</Text>
          </View>
          <View style={styles.firstCon}>
            <View style={styles.boyAvatar}>
              <Image
                source={icons.boy}
                resizeMode="contain"
                style={styles.img}
              />
            </View>
            <View>
              <View style={styles.micCon}>
                <View style={styles.mic}>
                  <Image
                    source={icons.white_mic}
                    resizeMode="contain"
                    style={styles.img}
                  />
                </View>
                <Text style={styles.micText}>
                  Live Translation to Text & Speech
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.headingCon,
              {
                flex: 1,
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'center',
              },
            ]}>
            <Text style={styles.headingText1}>Recommended Videos</Text>
            <IconInput />
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* {loader && <Loader />} */}
    </>
  );
};

export default Index;
