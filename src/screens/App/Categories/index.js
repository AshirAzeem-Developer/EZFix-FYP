// Categories.js
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import style from './style';
import icons from '../../../assets/icons';
import AppHeader from '../../../components/AppHeader';
import size from '../../../constants/size';
import {TouchableOpacity} from 'react-native';
import images from '../../../assets/images';

const {width, height} = Dimensions.get('window');

const Categories = ({navigation}) => {
  const category = [
    {img: images.Electrician, name: 'Electrician'},
    {img: images.Painter, name: 'Painter'},
    {img: images.Plumber, name: 'Plumber'},
    {img: images.PersonalDriver, name: ' Driver'},
    {img: images.Gardner, name: 'Gardener'},
    {img: images.Carpenter, name: 'Carpenter'},
    {img: images.Waiter, name: 'Waiter'},
    {img: images.Chef, name: 'Chef'},
    {img: images.ComputerTechnician, name: 'Computer'},
    {img: images.BandGroup, name: 'Band'},
    {img: images.CarMechanic, name: 'Car Mech'},
    {img: images.HouseHelper, name: 'House Helper'},
    {img: images.BikeRepair, name: 'Bike Mech'},
  ];

  return (
    <View style={style.container}>
      <AppHeader
        onPressBackButton={() => navigation.goBack()}
        title={'Categories'}
      />

      <View style={style.listcontainer}>
        <FlatList
          data={category}
          numColumns={3}
          renderItem={({item}) => (
            <View style={style.categoryList}>
              <TouchableOpacity>
                <Image
                  source={item.img}
                  style={{
                    width: size.ICON * 1.7,
                    height: size.ICON * 1.4,
                    alignSelf: 'center',
                  }}
                />
                <Text style={style.txt1}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{alignItems: 'flex-start'}}
        />
      </View>
    </View>
  );
};

export default Categories;
