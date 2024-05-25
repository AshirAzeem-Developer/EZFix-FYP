import React from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './style';
import images from '../../../assets/images';
import size from '../../../constants/size';
import {TouchableOpacity} from 'react-native';
import CustomButton from '../../../components/Button';
import icons from '../../../assets/icons';
import Ratings from '../../../components/Ratings';
const {width, height} = Dimensions.get('window');
import RNICons from 'react-native-vector-icons/FontAwesome6';
import CustomButtonComponent from '../../../components/CustomButtonComponent';
const SeekerDetails = () => {
  const category = [
    {
      id: 1,
      name: 'Hafiz Naeem',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Carpenter',
      ratings: '4.5' + '(150 Reviews)',
      reviews: [
        {
          review1: 'Providing services as a carpenter. ',
          review2: 'Available all 7 days',
          review3: 'Work Experience: 1.5 years',
        },
      ],
      comments: [
        {
          comment1:
            'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services',
        },
      ],
    },
  ];

  const services = [
    'Providing services as a carpenter.',
    'Available all 7 days',
    'Work Experience: 1.5 years',
  ];
  const reviews = [
    {
      id: 1,
      userName: 'Kabeer Mansoor',
      review:
        'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services.',
    },
    {
      id: 2,
      userName: 'Kabeer Mansoor',
      review:
        'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services.',
    },
    {
      id: 3,
      userName: 'Kabeer Mansoor',
      review:
        'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services.',
    },
    {
      id: 4,
      userName: 'Kabeer Mansoor',
      review:
        'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services.',
    },
    {
      id: 5,
      userName: 'Kabeer Mansoor',
      review:
        'Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services.',
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Image source={images.DemoSeeker} style={styles.image} />
        <View style={styles.profileDetails}>
          <Text
            style={{
              fontSize: size.FONTSIZE_NAME,
              fontFamily: 'Dubai-Bold',
              marginLeft: width * 0.04,
              marginTop: height * 0.02,
              color: size.color,
            }}>
            Hafiz Naeem
          </Text>
          <Text
            style={{
              fontSize: size.FONTSIZE_CATEGORY,
              marginLeft: width * 0.04,
              color: 'black',
              fontFamily: 'Dubai-Regular',
            }}>
            Carpenter
          </Text>
          <View style={styles.locationContainer}>
            <RNICons
              name="location-dot"
              size={18}
              color={'red'}
              style={{marginLeft: width * 0.03, marginTop: height * 0.01}}
            />
            <Text
              style={{
                fontFamily: 'Dubai-Regular',
                marginTop: height * 0.01,
                marginLeft: width * 0.02,
                color: 'black',
              }}>
              Malir, Karachi{' '}
            </Text>
          </View>
          <View style={styles.ratingsContainer}>
            <RNICons
              name="star"
              solid
              color={'yellow'}
              size={18}
              style={{marginLeft: width * 0.02}}
            />
            <Text
              style={{
                marginLeft: width * 0.02,
                color: 'black',
                fontFamily: 'Dubai-Regular',
              }}>
              4.5 (150 Reviews)
            </Text>
          </View>
          <View style={styles.aboutContainer}>
            <Text
              style={{
                fontSize: size.FONTSIZE_MEDIUM,

                color: 'black',
                fontFamily: 'Dubai-Bold',
              }}>
              About
            </Text>

            {services.map((serv, ind) => {
              return (
                <View
                  key={ind}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RNICons
                    name="check-double"
                    color={'green'}
                    style={{marginRight: width * 0.02}}
                  />
                  <Text
                    style={{
                      fontSize: size.FONTSIZE_SMALL,
                      color: 'black',
                      fontFamily: 'Dubai-Regular',
                    }}>
                    {serv}
                  </Text>
                </View>
              );
            })}

            <View style={styles.reviewsContainer}>
              <Text
                style={{
                  fontSize: size.FONTSIZE_MEDIUM,
                  fontFamily: 'Dubai-Bold',

                  color: 'black',
                }}>
                Reviews
              </Text>
              <FlatList
                data={reviews}
                scrollEnabled={true}
                style={{height: height * 0.19}}
                renderItem={({item}) => {
                  return (
                    <View style={styles.reviews}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: height * 0.03,
                        }}>
                        <View
                          style={{
                            borderRadius: 100,
                            backgroundColor: 'grey',
                            padding: 8,
                          }}>
                          <RNICons name="user" solid size={16} />
                        </View>
                        <Text
                          style={{
                            fontSize: size.FONTSIZE_SMALL,
                            fontFamily: 'Dubai-Bold',

                            textTransform: 'capitalize',
                            marginLeft: width * 0.02,
                            color: 'black',
                          }}>
                          {item.userName}
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginLeft: width * 0.1,
                          marginRight: width * 0.04,
                          color: 'black',
                        }}>
                        {item.review}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          zIndex: 40,
          height: height * 0.1,
          elevation: 1,

          marginTop: -90,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: width * 0.2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RNICons
            name="comments"
            size={30}
            color={'green'}
            style={{marginLeft: width * 0.06}}
          />
          <Text
            style={{
              color: 'black',
              marginLeft: width * 0.06,
              fontSize: size.FONTSIZE_X_SMALL,
            }}>
            Chat Now
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: width * 0.8,
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginRight: width * 0.05,
          }}>
          <CustomButton
            text={'Book Now'}
            myStyles={{marginBottom: height * 0.012}}
            ButtonWidth={width * 0.5}
            ButtonHeight={height * 0.07}
          />
        </View>
      </View>
    </View>
  );
};

export default SeekerDetails;
