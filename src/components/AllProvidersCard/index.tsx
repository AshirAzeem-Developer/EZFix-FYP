import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/images';
import Button from '../Button/Button';
const AllProviderCards = () => {
    const providers = [
        {
            id: 1,
            name: 'Amir Khan',


            image: images.allProviders,
        },
        {
            id: 2,
            name: 'Amir Khan',


            image: images.allProviders,
        },
        {
            id: 3,
            name: 'Amir Khan',


            image: images.allProviders,
        },
        {
            id: 4,
            name: 'Amir Khan',


            image: images.allProviders,
        },
        {
            id: 5,
            name: 'Amir Khan',
            work: {
                first: "wall",
                second: "house"
            },

            image: images.allProviders,
        },
        {
            id: 6,
            name: 'Amir Khan',


            image: images.allProviders,
        },
    ];
    const { styles, colors, sizes } = useStyles();

    return (
        <FlatList
            style={{
                marginTop: sizes.HEIGHT * 0.01,
                height: sizes.HEIGHT * 0.9,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: sizes.HEIGHT * 0.1 }}
            data={providers}

            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <View style={styles.providerscard}>
                        <Image source={item.image} style={styles.providerimg} />
                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                marginLeft: sizes.WIDTH * 0.04,
                            }}>
                            <Text style={styles.providernames}>{item.name}</Text>
                            <View style={styles.services}>
                                <View style={{ display: 'flex', flexDirection: "column" }}>
                                    <Text style={{ color: colors.BLACK }}>. Wall Repair</Text>
                                    <Text style={{ color: colors.BLACK }}>. Wall Painting</Text>
                                </View>
                                <View
                                    style=
                                    {{
                                        display: 'flex',
                                        flexDirection: "column",
                                        paddingLeft: sizes.WIDTH * 0.04,
                                    }}>
                                    <Text style={{ color: colors.BLACK }}>. Wall Repair</Text>
                                    <Text style={{ color: colors.BLACK }}>. Wall Painting</Text>
                                </View>
                            </View>
                            <View style={styles.ratingContainer}>
                                <Image source={icons.Star} style={styles.star} />
                                <Text style={{ fontSize: sizes.WIDTH * 0.04, color: colors.BLACK }}>4.5</Text>
                                <View style={styles.bookbutton}>
                                    <Button

                                        text="Book"

                                        bgcolor={


                                            colors.PRIMARY
                                        }
                                        btnStyles={{ width: sizes.WIDTH * 0.2, height: sizes.HEIGHT * 0.04, }}


                                    />
                                </View>
                            </View>
                            {/* <Text style={styles.locationText}>{item.Location}</Text> */}
                        </View>

                    </View>
                </View>
            )}
        />
    );
};
export default AllProviderCards;
