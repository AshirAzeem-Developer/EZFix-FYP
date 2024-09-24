import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
import {getAllProviders} from '../../utils/ApiCall';
import {useSelector} from 'react-redux';
import {showError} from '../../utils/helperFunction';
import API_ENDPOINTS from '../../constants/apiEndPoints';
const TopProviderCards = () => {
  const [serviceProviders, setServiceProviders] = useState([]);

  const userToken = useSelector((state: any) => state.user?.user?.jwt);

  useEffect(() => {
    getAllProviders(userToken)
      .then(res => {
        setServiceProviders(res.data);
        console.log('All Providers:', JSON.stringify(res.data, null, 2));
      })
      .catch(err => {
        showError('Slow Network', 'Please check your internet connection');
        console.log('Error:', err);
      });
  }, [userToken]);

  const {styles, colors, sizes} = useStyles();
  // const numColumns = 2;
  return (
    <FlatList
      style={{
        marginTop: sizes.HEIGHT * 0.01,
        height: sizes.HEIGHT * 0.45,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
      data={serviceProviders}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}: {item: any}) => (
        <View>
          <View style={styles.providerscard}>
            <Image
              source={{
                uri: `${API_ENDPOINTS.BASE_URL}${item.profileImage?.url}`,
              }}
              style={styles.providerimg}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginLeft: sizes.WIDTH * 0.04,
              }}>
              <View style={styles.providerNameAndRateContainer}>
                <Text style={styles.providernames}>{item?.name}</Text>
                {/* <Text style={styles.providerRate}>{item?.ratePerHour}</Text> */}
              </View>
              {/* {item?.skills?.map((skill: any) => (
                <Text style={styles.categoryText}>{skill?.name}</Text>
              ))} */}
              <FlatList
                // key={`columns_${numColumns}`} // Change the key prop to force re-render
                style={{
                  width: sizes.WIDTH * 0.5,
                  // height: sizes.HEIGHT * 0.1,
                }}
                data={item?.skills}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <Image
                      source={icons.CHECK_BLACK}
                      style={{
                        marginRight: -sizes.WIDTH * 0.02,
                      }}
                    />
                    <Text style={styles.categoryText} numberOfLines={1}>
                      {item?.name}
                    </Text>
                  </View>
                )}
                // numColumns={numColumns}
                // columnWrapperStyle={{
                //   justifyContent: 'space-between',
                // }}
              />

              <View style={styles.ratingContainer}>
                <Image source={icons.Star} style={styles.star} />
                <Text style={{fontSize: sizes.WIDTH * 0.04}}>4.5</Text>
              </View>
              {/* <Text style={styles.locationText}>{item.Location}</Text> */}
            </View>
          </View>
        </View>
      )}
    />
  );
};
export default TopProviderCards;
