import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import images from '../../assets/images';
import CustomModal from '../CustomModal';

import {AppStackParamsList} from '../../navigators/navigator.seeker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import apiEndPoints from '../../constants/apiEndPoints';
import {getCategories} from '../../utils/ApiCall';
import {useSelector} from 'react-redux';
import END_POINTS from '../../constants/apiEndPoints';

const CategoriesCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleModal = () => setModalVisible(!modalVisible);

  const navigation = useNavigation();
  const {styles, colors, sizes} = useStyles();
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  let categoriesData;
  // console.log('userToken', userToken);

  useEffect(() => {
    getCategories(userToken)
      .then(res => {
        setCategories(res.data?.data);
        // console.log('res', JSON.stringify(categoriesData, null, 2));
      })
      .catch(err => {
        console.log('err', err.data.message);
      });
  }, []);

  const allCategories = [
    {
      id: 1,
      name: 'Mechanic',
      image: images.MECHANIC,
      onPress: () => navigation.navigate('WorkDetails', {title: 'Mechanic'}),
    },
    {
      id: 2,
      name: 'Plumber',
      image: images.PLUMBER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Plumber'});
      },
    },
    {
      id: 3,
      name: 'Electrician',
      image: images.ELECTRICIAN,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Electrician'});
      },
    },
    {
      id: 5,
      name: 'Painter',
      image: images.PAINTER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Painter'});
      },
    },
    {
      id: 6,
      name: 'Carpenter',
      image: images.CARPENTER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Carpenter'});
      },
    },
    {
      id: 7,
      name: 'Gardener',
      image: images.GARDNER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Gardener'});
      },
    },
    {
      id: 8,
      name: 'Cleaner',
      image: images.CLEANER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Cleaner'});
      },
    },
    {
      id: 9,
      name: 'Tutor',
      image: images.TUTOR,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Tutor'});
      },
    },
    {
      id: 10,
      name: 'Chef',
      image: images.CHEF,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Chef'});
      },
    },
    {
      id: 11,
      name: 'Photographer',
      image: images.PHOTOGRAPHER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Photographer'});
      },
    },
    {
      id: 12,
      name: 'Band Master',
      image: images.BAND_MASTER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Band Master'});
      },
    },
    {
      id: 13,
      name: 'Computer Technician',
      image: images.COMP_TECH,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Computer Technician'});
      },
    },
    {
      id: 14,
      name: 'Babysitter',
      image: images.BABY_SITTER,
      onPress: () => {
        navigation.navigate('WorkDetails', {title: 'Babysitter'});
      },
    },
  ];

  console.log('CatgoriesData', JSON.stringify(categories, null, 2));
  const ModalView = (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Image
          source={images.DOWN}
          style={{
            width: sizes.WIDTH * 0.05,
            height: sizes.HEIGHT * 0.05,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.allCategories}>All Categories</Text>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={3}
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: any}) => (
          <TouchableOpacity
            style={styles.categoriesContainer}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate('WorkDetails', {
                title:any: item?.attributes?.categoryId,
              })
            }>
            <View style={styles.category}>
              <Image
                source={{
                  uri: `${END_POINTS.BASE_URL}${
                    (item as any)?.attributes?.icon?.data?.attributes?.url
                  }`,
                }}
                style={styles.image}
                tintColor={'#008000'}
              />
              <Text style={styles.catname}>
                {(item as any)?.attributes?.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <>
      {allCategories.slice(0, 3).map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryContainer}
          activeOpacity={0.85}
          onPress={category.onPress}>
          <View style={styles.category}>
            <Image
              source={category.image}
              style={styles.image}
              tintColor={'#008000'}
            />
            <Text style={styles.catname}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.categoryContainer}
        activeOpacity={0.85}
        onPress={() => setModalVisible(true)}>
        <View style={styles.category}>
          <Image
            source={images.VIEW_ALL}
            style={styles.image}
            tintColor={'#008000'}
          />
          <Text style={styles.catname}>View all</Text>
        </View>
      </TouchableOpacity>
      <CustomModal
        showModal={modalVisible}
        hideModal={toggleModal}
        modalView={ModalView}
      />
    </>
  );
};
export default CategoriesCard;
