// Categories.js
import React from 'react';
import { View, Text, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import style from './style';
import icons from '../../../assets/icons';
import size from '../../../constants/size';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const Categories = () => {
  const category = [
    { img: icons.Electrician, name: "Electrician" },
    { img: icons.Painter, name: "Painter" },
    { img: icons.Plumber, name: "Plumber" },
    { img: icons.Plumber, name: " Driver" },
    { img: icons.Plumber, name: "Gardener" },
    { img: icons.Plumber, name: "Carpenter" },
    { img: icons.Plumber, name: "Waiter" },
    { img: icons.Plumber, name: "Chef" },
    { img: icons.Plumber, name: "Computer" },
    { img: icons.Plumber, name: "Band" },
    { img: icons.Plumber, name: "Car Mech" },
    { img: icons.Plumber, name: "Helper" },
    { img: icons.Plumber, name: "Bike Mech" },
  ];

  return (
    
      <View style={style.container}>
        <View style={style.categoryheading}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Categories</Text>
        </View>
        <View style={style.listcontainer}>
          <FlatList
            data={category}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={style.categoryList}>
                <TouchableOpacity>
                <Image source={item.img} style={{ width: size.ICON * 1.7, height: size.ICON *1.7, alignSelf: 'center' }} />
                <Text style={style.txt1}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ alignItems: 'flex-start' }}
          />
        </View>
      </View>
 
  );
};

export default Categories;
