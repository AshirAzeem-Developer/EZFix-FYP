import { View, Text, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'
import style from './style';
import icons from '../../../assets/icons';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const category=[
    {
      img: icons.Electrician, 
      name: "Mechanics"
    },
    {
      img: icons.Plumber, 
      name: "Plumber"
    },
    {
      img: icons.Mechanic,
      name: "Electrician"
    },
   
  ]
  
  return (
    <View style={style.container}>
      <View style={style.categoryheading}>
        <Text style={{color:'black',fontSize:20,fontWeight:"bold"}}>Categories</Text>
      </View>
      <View style={style.listcontainer}>
        <FlatList
          data={category}
          horizontal
          renderItem={({ item }) => (
            <View style={style.categoryList}>
              <Image source={item.img} style={{ width: 70, height: 70 ,alignSelf:"center"}} />
              <Text style={style.txt1}>{item.name}</Text>
              
            </View>
            
          )}
          
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
      
    </View>
  )
}

export default Home;
