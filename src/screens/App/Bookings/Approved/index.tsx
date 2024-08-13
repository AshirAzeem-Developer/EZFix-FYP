import React, { useState, useEffect } from 'react';
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
import { ParentView } from '../../../../components/common/ParentView/ParentView';
import useStyles from './style';
import { FadeInDown } from 'react-native-reanimated';
import Button from '../../../../components/Button/Button';

//third party library

// dimenstion
const { width, height } = Dimensions.get('window');

const Approved = () => {
    const { styles, colors, sizes } = useStyles();

    const work = [
        {
            id: 1,
            job: 'Wall Repair',
            work: "Leaks in the Bathroom",
            time: 'Jan 21,2022 at 4pm',
            Price: 'RS 250/hr',
            status: 'approved',
            image: images.handyman,
        },
        {
            id: 2,
            job: 'Wall Repair',
            work: "Leaks in the Bathroom",
            time: 'Jan 21,2022 at 4pm',
            Price: 'RS 250/hr',
            status: 'approved',
            image: images.handyman,
        },
        {
            id: 3,
            job: 'Wall Repair',
            work: "Leaks in the Bathroom",
            time: 'Jan 21,2022 at 4pm',
            Price: 'RS 250/hr',
            status: 'approved',
            image: images.handyman,
        },

    ];
    return (
        <>
            <ParentView
                style={styles.container}
                enterAnimation={FadeInDown.duration(500)}
            >
                <View>
                    <FlatList

                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: sizes.HEIGHT * 0.1 }}
                        data={work}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.providerscard}>
                                    <View style={styles.provivder}>
                                        <View >
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
                                                <Text style={{color:colors.BLACK}}>Status :</Text>
                                                <Text style={styles.status}> {item.status}</Text>

                                            </View>
                                            <View style={styles.bookbutton}>
                  <Button
                    text="Start Working"
            
                    bgcolor={colors.PRIMARY}
                    btnStyles={{
                      width: sizes.WIDTH * 0.32,
                      height: sizes.HEIGHT * 0.038,
                      
                      
                    }}
                  />
                </View>
                                        </View>
                                    </View>


                                </View>



                            </View>


                        )}

                    />


                </View>
                <Text style={{ color: colors.BLACK }}>Bookings</Text>
            </ParentView>
        </>
    );
};

export default Approved;
