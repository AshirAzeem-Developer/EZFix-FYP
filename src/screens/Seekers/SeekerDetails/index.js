import React from 'react';
import { View, Text, Dimensions, FlatList, Image, ScrollView, Pressable } from 'react-native';
import style from './style';
import images from '../../../assets/images';
import size from '../../../constants/size';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/Button';
import icons from '../../../assets/icons';
const { width, height } = Dimensions.get('window');
const SeekerDetails = () =>{
    const category = [
     { id: 1,
      name: 'Hafiz Naeem',
      image: images.SeekerImg,
      location: 'Saddar,Karachi',
      category: 'Carpenter',
      ratings: "4.5"+"(150 Reviews)" ,
      reviews:[{
     
        review1:"Providing services as a carpenter. ",
        review2:"Available all 7 days",
        review3:"Work Experience: 1.5 years"
     
      },],
      comments:[{
        comment1:"Hafiz Naeem  provides the best services and works on a reasonable price. Rated 10/10 for his services",
      }]
    },
    
     
      ];
  return (
    <View style={style.container}>
        <View style={style.categoryheading}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Profile</Text>
        </View>
        <View style={style.listcontainer}>
        <View style={{alignSelf:"center"}}>
            <Image source={images.DemoSeeker} style={style.image} />
          </View>

          {/* list for seker details */}
        <FlatList
      data={category}
      renderItem={({item}) => (
        <View style={style.cardStyles}>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: width * 0.06,
                marginLeft: width * 0.01,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <View >
              <Text style={{
                fontSize: width * 0.05,
                marginLeft: width * 0.01,
                color: 'black',
              }}>{item.category}</Text>
            </View>
            <View style={style.locationContainer}>
              <Image source={icons.Location} style={style.locationImage} />
              <Text style={{marginLeft: width * 0.02}}>{item.location}</Text>
            </View>
            <View style={style.ratingsContainer}>
              <Image source={icons.Star} style={style.ratingImage} />
              <Text
               style={{
                fontSize: width * 0.04,
                marginLeft: width * 0.01,
                paddingTop:height*0.01,
                color: 'black',
              }}>
                {item.ratings}
              </Text>
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
    {/* list for comments and about  */}
    <FlatList data={category}
      renderItem={({item}) => (
        <View style={style.cardStyles}>
          <Text
              style={{
                fontSize: width * 0.05,
                marginLeft: width * 0.001,
                color: 'black',

              }}>
             About
            </Text>
          {item.reviews.map((data,index)=>(
            <View key={index} style={{
            }}>
               <Text >{data.review1}</Text>
               <Text >{data.review2}</Text>
               <Text >{data.review3}</Text>
            </View>
            
                ))}
          <View>
          <Text
              style={{
                fontSize: width * 0.05,
                marginLeft: width * 0.001,
                color: 'black',
                paddingTop:height*0.03

              }}>
             Comments
            </Text>
            {item.comments.map((data,index)=>(
               <View key={index} style={{
              }}>
                 <Text >{data.comment1}</Text>
      
              </View>
            ))}
             
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
    <Pressable style={style.buttonStyle}>
                <Text
                  style={{
                    color: 'white',
                    fontSize:20,
                    alignSelf:"center"
                  }}>
                  Book Now
                </Text>
              </Pressable>
        </View>
        
      </View>
  )
}

export default SeekerDetails