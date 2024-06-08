

import React from 'react';
import { View, Text, Dimensions, FlatList, Image, ScrollView, Pressable } from 'react-native';
import style from './style';
import images from '../../../assets/images';
import size from '../../../constants/size';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/Button';
import icons from '../../../assets/icons';

const { width, height } = Dimensions.get('window');

const Order = () => {
    const category = [
     { id: 1,
      name: 'Bashir Ahmed',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    { id: 2,
      name: 'Bashir Ahmed',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    } ,{ id: 3,
      name: 'Bashir Ahmed',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    }
     
      ];
  return (
    <View style={style.container}>
        <View style={style.categoryheading}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Orders</Text>
        </View>
        <View style={style.listcontainer}>
        <FlatList
      data={category}
      renderItem={({item}) => (
        <View style={style.cardStyles}>
          <View>
            <Image source={item.image} style={style.image} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: width * 0.05,
                marginLeft: width * 0.02,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <View style={style.locationContainer}>
              <Text style={{marginLeft: width * 0.03,fontSize:width*0.05,fontWeight:"bold"}}>{item.category}</Text>
            </View>
            <View style={style.ratingsContainer}>
              <Image source={icons.Star} style={style.ratingImage} />
              <Text
                style={{
                  marginLeft: width * 0.02,
                  color: 'black',
                  fontSize: width * 0.035,
                }}>
                {item.ratings}
              </Text>
            </View>
            <View style={style.locationContainer}>
              <Image source={icons.Location} style={style.locationImage} />
              <Text style={{marginLeft: width * 0.02}}>{item.location}</Text>
            </View>
           
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  marginLeft: width * 0.04,
                  fontSize: width * 0.07,
                  fontWeight: 'bold',
                }}>
                  <View style={{flexDirection:"row"}}>
                  <Text>Status: </Text>
                  <Text>Pending / </Text>
                  <Text style={{color:"green"}}>Approval </Text>
                   
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={style.buttonStyle}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                 Track
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
        </View>
      </View>
  )
}

export default Order

