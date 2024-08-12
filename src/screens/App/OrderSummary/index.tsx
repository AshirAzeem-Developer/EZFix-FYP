import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

// Local imports
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import {FadeInDown} from 'react-native-reanimated';
import icons from '../../../assets/icons';
import images from '../../../assets/images';

const OrderSummary = () => {

    const {styles, colors, sizes} = useStyles();
 const work = [
    {
      id: 1,
      job: 'Wall Repair',
      work:"Leaks in the Bathroom",
      time:'Jan 21,2022 at 4pm',
      Price:'RS 250/hr',
      image: images.handyman,
    },
   
  ];
  const Handyman=[
    
      {
        id: 1,
        name:'HandyMan',
        subname:"Thomas Luke",
      image: images.handyman,
        
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
            <View style={styles.imgview}>
            <Image source={item.image} style={styles.providerimg} />
            </View>
            <View>
              <Text style={styles.job}>{item.job}</Text>
                <Text style={styles.work}>{item.work}</Text>
                <View style={styles.time}>
                <Image source={icons.Clock} style={styles.clock}/>
                <Text  style={styles.timer}>{item.time}</Text>
                <Text  style={styles.price}>{item.Price}</Text>
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
            <View  style={styles.imgview}>
            <Image source={item.image} style={styles.handymanimg} />
            </View>
            <View>
              <View style={{flexDirection:"row",padding:sizes.WIDTH*0.02,paddingBottom:0}}>
              <Text style={styles.handy}>{item.name}</Text>
              <View style={styles.rating}>
                <Image source={icons.Star} style={styles.star}/>
                <Text  style={styles.rate}>4.5</Text>
                </View>
              </View>
                <Text style={styles.subname}>{item.subname}</Text>
            </View>
          </View>
          {/* ----------------------------------Adress--------------------- */}
        
          <View style={styles.providerscard}>
            <View   style={styles.locimgview}>
            <Image source={icons.Location} style={styles.locationimg} />
            </View>
            <View style={{
     paddingLeft:sizes.WIDTH*0.1,
            }} >
             <Text style={styles.address}>Address</Text>
             <View style={{flexDirection:"row",width:sizes.WIDTH*0.5}}>
             <Text style={{color:colors.BLACK}}>38 Chestnut StreetStaunton</Text>

             {/* <Input /> */}
             <Image source={icons.EDIT} style={{marginLeft:sizes.WIDTH*0.05}}/>
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
