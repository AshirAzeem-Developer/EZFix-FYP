import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import MyLineChart from '../../../components/LineChart';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import {FadeInDown} from 'react-native-reanimated';
import {
  getJobOrdersBySkills,
  getSkillsFromUserId,
} from '../../../utils/ApiCall';
import {useSelector} from 'react-redux';
const ProviderHome = () => {
  const {styles, sizes, colors} = useStyles();
  const [notificationsAvailable, setNotificationsAvailable] = useState(true);
  const [userSkillIds, setUserSkillIds] = useState<number[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [jobOrders, setJobOrders] = useState<any>({});

  const userId = useSelector((state: any) => state.user.user.user.id);
  // console.log('User id is: ', userId);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const user = useSelector((state: any) => state?.user?.user?.user?.name);
  // console.log('USer', user);

  // First effect: Fetch user skills
  useEffect(() => {
    getSkillsFromUserId(userId, userToken)
      .then(res => {
        const skills = res.data.skills || [];
        setUserSkills(skills);
        const skillIds = skills.map((skill: any) => skill.id);
        setUserSkillIds(skillIds); // Update skill IDs state
        // console.log('User skills:', JSON.stringify(skills, null, 2));
        // console.log('Skill IDs:', skillIds);
      })
      .catch(err => {
        console.log('Error fetching user skills:', err);
      });
  }, [userId, userToken]); // Ensure this effect runs when userId or userToken changes

  // Second effect: Fetch job orders when skill IDs are updated
  useEffect(() => {
    console.log('Fetching job orders for skill IDs:', userSkillIds);
    if (userSkillIds.length > 0) {
      getJobOrdersBySkills(userSkillIds, userToken)
        .then(res => {
          setJobOrders(res.data || {});
          // console.log(
          //   'Job orders by user skills:',
          //   JSON.stringify(res.data.meta.pagination.total, null, 2),
          // );
        })
        .catch(err => {
          console.log(
            'Error fetching job orders:',
            err.response ? err.response.data : err,
          );
        });
    }
  }, [userSkillIds, userToken]); // Ensure this effect runs when skill IDs are updated

  const cardData1 = [
    {
      icon: icons.booking,
      value: jobOrders?.meta?.pagination?.total || 0,
      label: 'Total Bookings',
    },
    {
      icon: icons.TOTAL_SERVICES_ICON,
      value: userSkills.length,
      label: 'Total Services',
    },
    {icon: icons.Earning, value: '$0.00', label: 'Total Earnings'},
    {icon: icons.Ratings, value: 4.5, label: 'Average Ratings'},
  ];

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Hello, <Text>{user}</Text>
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
