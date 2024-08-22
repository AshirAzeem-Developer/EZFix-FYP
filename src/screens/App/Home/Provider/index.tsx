

import icons from '../../../../assets/icons';
import images from '../../../../assets/images';
import { ParentView } from '../../../../components/common/ParentView/ParentView';
import useStyles from './style'
import { FadeInDown } from 'react-native-reanimated';
import Button from '../../../../components/Button/Button';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
const ProviderHome=()=>{
  const [notificationsAvailable, setNotificationsAvailable] = useState(true);
  const {styles, colors, sizes} = useStyles();

    return(<>

    <ParentView  style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
   
         <View style={styles.logoImgCont}>
          <Image source={icons.Logo} style={styles.logoImg} />
          <TouchableOpacity
            // onPress={() => navigation.navigate('Notifications')}
            >
            <Image source={icons.BELL} style={styles.bellImg} />
            {notificationsAvailable ? (
              <View style={styles.notificationBadge} />
            ) : (
              ''
            )}
          </TouchableOpacity>
        </View>
         <View style={styles.providerdetail}>
            <Text style={styles.name}>Hello, ProviderName</Text>
            <Text style={{color:colors.BLACK}}>Welcome Back!</Text>
         </View>
        <View style={styles.card}>
            <View>
                <View style={styles.bookings}>
                    <View>
            
                            <Image source={icons.booking} style={styles.bookingimg}/>
                        <Text style={{color:colors.BLACK}}>5</Text>

            
                    <Text style={{color:colors.BLACK}}>Total Bookings</Text>
                    </View>
                   
                </View>
                <View></View>
            </View>
        </View>

    </ParentView>
    </>)
}
export default ProviderHome