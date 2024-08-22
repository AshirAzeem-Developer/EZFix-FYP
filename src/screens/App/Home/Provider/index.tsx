

import icons from '../../../../assets/icons';
import images from '../../../../assets/images';
import { ParentView } from '../../../../components/common/ParentView/ParentView';
import useStyles from './style'
import { FadeInDown } from 'react-native-reanimated';
import Button from '../../../../components/Button/Button';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import MyLineChart from '../../../../components/LineChart';
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
        <View style={{padding:sizes.HEIGHT*0.001,justifyContent:"center"}}>
            <View style={styles.card}>
                <View style={styles.bookings}>
                    <View>
            
                            <Image source={icons.booking} style={styles.bookingimg}/>
                        <Text style={{color:colors.GREEN,fontWeight:"bold",fontSize:sizes.WIDTH*0.05}}>5</Text>

            
                    <Text  style={{color:colors.GREEN}}>Total Bookings</Text>
                    </View>
                   
                </View>
                
                <View>
                <View style={styles.services}>
                    <View style={styles.servicesinner}>
            
                            <Image source={icons.booking} style={styles.bookingimg}/>
                        <Text style={{color:colors.GREEN,fontWeight:"bold",fontSize:sizes.WIDTH*0.05}}>10</Text>

            
                    <Text  style={{color:colors.GREEN}}>Total Services</Text>
                    </View>
                   
                </View>
                </View>
            </View>
            <View style={styles.card2}>
                <View style={styles.bookings}>
                    <View>
            
                            <Image source={icons.Earning} style={styles.bookingimg}/>
                        <Text style={{color:colors.GREEN,fontWeight:"bold",fontSize:sizes.WIDTH*0.05}}>$0.00</Text>

            
                    <Text  style={{color:colors.GREEN}}>Total Bookings</Text>
                    </View>
                   
                </View>
                
                <View>
                <View style={styles.services}>
                    <View style={styles.servicesinner}>
            
                            <Image source={icons.Ratings} style={styles.bookingimg}/>
                        <Text style={{color:colors.GREEN,fontWeight:"bold",fontSize:sizes.WIDTH*0.05}}>4.5</Text>

            
                    <Text  style={{color:colors.GREEN}}>AverageRatings</Text>
                    </View>
                   
                </View>
                </View>
            </View>
            <View>
              <Text style={{color:colors.GRAY,
                marginTop:sizes.HEIGHT*0.032,
                fontSize:sizes.WIDTH*0.07,
                alignSelf:"center"
                }}>Monthly Revenue (PKR)</Text>
              <MyLineChart/>
            </View>
        </View>
          
    </ParentView>
    </>)
}
export default ProviderHome