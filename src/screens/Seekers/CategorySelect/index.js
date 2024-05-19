

import React from 'react';
import { View, Text, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import style from './style';
import images from '../../../assets/images';
import size from '../../../constants/size';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/Button';


const { width, height } = Dimensions.get('window');

const CategorySelect = () => {
    const category = [
        { img: images.Seekerimg, name: "Bashir Ahmed" },
    
     
      ];
  return (
    <View style={style.container}>
        <View style={style.categoryheading}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Electrician</Text>
        </View>
        <View style={style.listcontainer}>
          <FlatList
            data={category}
            renderItem={({ item }) => (
              <View style={style.categoryList}>
                
                <Image source={item.img} style={{ width: size.ICON * 3.9, height: size.ICON *3.9, alignSelf: 'flex-start' }} />
                <Text style={style.txt1}>{item.name}</Text>
                <CustomButton text={'BookNow'}
                
                ButtonWidth={width * 0.3} ButtonHeight={height*0.07} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ alignItems: 'flex-start' }}
          />
        </View>
      </View>
  )
}

export default CategorySelect

