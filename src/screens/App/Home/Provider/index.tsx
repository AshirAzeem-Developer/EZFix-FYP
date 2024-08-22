import icons from '../../../../assets/icons';
import images from '../../../../assets/images';
import { ParentView } from '../../../../components/common/ParentView/ParentView';
import useStyles from './style'
import { FadeInDown } from 'react-native-reanimated';
import Button from '../../../../components/Button/Button';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import MyLineChart from '../../../../components/LineChart';

const ProviderHome = () => {
  const [notificationsAvailable, setNotificationsAvailable] = useState(true);
  const { styles, colors, sizes } = useStyles();

  // Data arrays for bookings and services
  const cardData1 = [
    { icon: icons.booking, value: 5, label: 'Total Bookings' },
    { icon: icons.booking, value: 10, label: 'Total Services' }
  ];

  const cardData2 = [
    { icon: icons.Earning, value: '$0.00', label: 'Total Earnings' },
    { icon: icons.Ratings, value: 4.5, label: 'Average Ratings' }
  ];

  return (
    <ParentView style={styles.container} enterAnimation={FadeInDown.duration(500)}>
      <View style={styles.logoImgCont}>
        <Image source={icons.Logo} style={styles.logoImg} />
        <TouchableOpacity>
          <Image source={icons.BELL} style={styles.bellImg} />
          {notificationsAvailable && <View style={styles.notificationBadge} />}
        </TouchableOpacity>
      </View>

      <View style={styles.providerdetail}>
        <Text style={styles.name}>Hello, ProviderName</Text>
        <Text style={{ color: colors.BLACK }}>Welcome Back!</Text>
      </View>

      <View style={{ padding: sizes.HEIGHT * 0.001, justifyContent: "center" }}>
        {/* First Card */}
        <View style={styles.card}>
          {cardData1.map((item, index) => (
            <View style={styles.bookings} key={index}>
              <View>
                <Image source={item.icon} style={styles.bookingimg} />
                <Text style={{ color: colors.GREEN, fontWeight: "bold", fontSize: sizes.WIDTH * 0.05 }}>{item.value}</Text>
                <Text style={{ color: colors.GREEN }}>{item.label}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Second Card */}
        <View style={styles.card2}>
          {cardData2.map((item, index) => (
            <View style={styles.bookings} key={index}>
              <View>
                <Image source={item.icon} style={styles.bookingimg} />
                <Text style={{ color: colors.GREEN, fontWeight: "bold", fontSize: sizes.WIDTH * 0.05 }}>{item.value}</Text>
                <Text style={{ color: colors.GREEN }}>{item.label}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Monthly Revenue Chart */}
        <View>
          <Text style={{
            color: colors.GRAY,
            marginTop: sizes.HEIGHT * 0.032,
            fontSize: sizes.WIDTH * 0.07,
            alignSelf: "center"
          }}>Monthly Revenue (PKR)</Text>
          <MyLineChart />
        </View>
      </View>
    </ParentView>
  );
}

export default ProviderHome;
