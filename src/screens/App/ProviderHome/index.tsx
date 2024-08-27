import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import MyLineChart from '../../../components/LineChart';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import {FadeInDown} from 'react-native-reanimated';
const ProviderHome = () => {
  const {styles, sizes, colors} = useStyles();
  const [notificationsAvailable, setNotificationsAvailable] = useState(true);

  const cardData1 = [
    {icon: icons.booking, value: 5, label: 'Total Bookings'},
    {icon: icons.TOTAL_SERVICES_ICON, value: 10, label: 'Total Services'},
    {icon: icons.Earning, value: '$0.00', label: 'Total Earnings'},
    {icon: icons.Ratings, value: 4.5, label: 'Average Ratings'},
  ];

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <ScrollView>
        <View style={styles.logoImgCont}>
          <Image source={icons.Logo} style={styles.logoImg} />
          <TouchableOpacity>
            <Image source={icons.BELL} style={styles.bellImg} />
            {notificationsAvailable && (
              <View style={styles.notificationBadge} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.providerdetail}>
          <Text style={styles.name}>
            Hello, <Text>Ashir Azeem</Text>
          </Text>
          <Text style={styles.welcomeBackText}>Welcome Back!</Text>
        </View>
        {/* ========= >> Dashboard Cards << =============== */}
        <FlatList
          data={cardData1}
          numColumns={2}
          contentContainerStyle={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.bookings}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.BLACK,
                      fontWeight: 'bold',
                      fontSize: sizes.WIDTH * 0.065,
                    }}>
                    {item.value}
                  </Text>
                  <Image source={item.icon} style={styles.bookingimg} />
                </View>
                <Text style={styles.cardLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Monthly Revenue Chart */}
        <View>
          <Text style={styles.monthlyRevenueText}>Monthly Revenue (PKR)</Text>
          <MyLineChart />
        </View>
      </ScrollView>
    </ParentView>
  );
};
export default ProviderHome;
