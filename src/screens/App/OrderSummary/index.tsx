import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

// Local imports
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import SearchComponent from '../../../components/SearchComponent';
import {FadeInDown} from 'react-native-reanimated';
import CategoriesCard from '../../../components/CategoriesCard';
import TopProviderCards from '../../../components/TopProviderCards';
import AllProviderCards from '../../../components/AllProvidersCard';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import { Button, Input } from 'react-native-elements';
const OrderSummary = () => {

    const {styles, colors, sizes} = useStyles();
 const work = [
    {
      id: 1,
      job: 'Wall Repair',
      work:"Leaks in the Bathroom",
      time:'Jan 21,2022 at 4pm',
      Price:'RS 250/hr',
      image: images.allProviders,
    },
   
  ];
  const Handyman=[
    
      {
        id: 1,
        name:'HandyMan',
        subname:"Thomas Luke",
      image: images.allProviders,
        
      },
     
    
  ]

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      {/* ==== HEADER ==== */}
      {/* Categories */}
   

      {/* Providers */}
      <View>
      <FlatList
      style={{
        marginTop: sizes.HEIGHT * 0.01,
        height: sizes.HEIGHT * 0.9,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
      data={work}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View>
          <View style={styles.providerscard}>
            <Image source={item.image} style={styles.providerimg} />
            <View
              style={{
                marginLeft: sizes.WIDTH * 0.02,
                marginTop: sizes.WIDTH * 0.03,

                
              }}>
              <Text style={styles.job}>{item.job}</Text>
              <View style={styles.services}>
                <View >
                <Text style={styles.work}>{item.work}</Text>
                <View style={styles.time}>
                <Image source={icons.Clock}/>
                <Text  style={{color:colors.BLACK,paddingLeft:sizes.WIDTH*0.01}}>{item.time}</Text>
                <Text  style={styles.price}>{item.Price}</Text>
                </View>
                </View>
                
              </View>
            </View>
          </View>
          {/* -------------------------HandyMan------------------------------ */}
          <FlatList
      style={{
        marginTop: sizes.HEIGHT * 0.01,
        height: sizes.HEIGHT * 0.9,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
      data={Handyman}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View>
          <View style={styles.providerscard}>
            <Image source={item.image} style={styles.handymanimg} />
            <View
              style={{
                marginLeft: sizes.WIDTH * 0.02,
                marginTop: sizes.WIDTH * 0.03,

                
              }}>
              <Text style={styles.job}>{item.name}</Text>
              <View style={styles.services}>
                <View >
                <Text style={styles.work}>{item.subname}</Text>
                <View style={styles.rating}>
                <Image source={icons.Star} style={styles.star}/>
                <Text  style={{color:colors.BLACK,paddingLeft:sizes.WIDTH*0.01}}>4.5</Text>
                
                </View>
                </View>
                
              </View>
            </View>
          </View>
          {/* ----------------------------------Adress--------------------- */}
          <View>
          <View style={styles.providerscard}>
            <View style={styles.locationcard}>
            <Image source={icons.Location}/>
            <View >
             <Text style={styles.address}>Address</Text>
             <View style={{flexDirection:"row",width:sizes.WIDTH*0.5}}>
             <Text style={{color:colors.BLACK}}>38 Chestnut StreetStaunton</Text>

             {/* <Input /> */}
             <Image source={icons.EDIT} style={{marginLeft:sizes.WIDTH*0.2}}/>
              </View>
             
            </View>
            </View>
          </View>
          
        </View>
        </View>
        
      )}
      
    />
    
        </View>
                 

      )}
      
    />
    
        
      </View>
          

    </ParentView>
  );
};

export default OrderSummary;
