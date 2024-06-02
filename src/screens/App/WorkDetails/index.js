

import React from 'react';
import { View, Text, Dimensions, FlatList, Image, ScrollView, Pressable, TextInput } from 'react-native';
import style from './style';
import images from '../../../assets/images';
import size from '../../../constants/size';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/Button';
import icons from '../../../assets/icons';

const { width, height } = Dimensions.get('window');

const WorkDetails = () => {
    const category = [
     { id: 1,
      name: 'Bashir Ahmed',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    
     
      ];
  return (
    <View style={style.container}>
        <View >
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold',alignSelf:"center" }}>Orders</Text>
        </View>
    
        <View style={style.cardStyles}>
          <View >
            <Text
              style={{
                fontSize: width * 0.05,
                marginLeft: width * 0.02,
                color: 'black',
                alignSelf:"center",
                paddingTop:height*0.02
              }}>
             Enter Work Details:
            </Text>
           <View>
            <TextInput style={style.TextInput}>

            </TextInput>
           </View>
          
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
        
              <Pressable style={style.buttonStyle}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                 confirm
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
     
      </View>
  )
}

export default WorkDetails

