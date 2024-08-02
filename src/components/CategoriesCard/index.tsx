import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../assets/icons';
import useStyles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ParentView} from '../common/ParentView/ParentView';
import images from '../../assets/images';
import {useGenericModal} from '../../hooks/useGenericModal/useGenericModal';
import CustomModal from '../CustomModal';

const CategoriesCard = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const serviceCategories = [
    {
      id: 1,
      name: 'Mechanic',
      image: images.MECHANIC,
      onPress: () => {},
    },
    {
      id: 2,
      name: 'Plumber',
      image: images.PLUMBER,
      onPress: () => {},
    },
    {
      id: 3,
      name: 'Electrician',
      image: images.ELECTRICIAN,
      onPress: () => {},
    },
    {
      id: 4,
      name: 'View all',
      image: images.VIEW_ALL,
      onPress: () => {
        setModalVisible(true);
      },
    },
  ];
  const {styles, colors} = useStyles();

  const allCategories = [
    {
      id: 5,
      name: 'Painter',
      image: images.PAINTER,
      onPress: () => {},
    },
    {
      id: 6,
      name: 'Carpenter',
      image: images.CARPENTER,
      onPress: () => {},
    },
    {
      id: 7,
      name: 'Gardener',
      image: images.GARDNER,
      onPress: () => {},
    },
    {
      id: 8,
      name: 'Cleaner',
      image: images.CLEANER,
      onPress: () => {},
    },
    {
      id: 9,
      name: 'Tutor',
      image: images.TUTOR,
      onPress: () => {},
    },
    {
      id: 10,
      name: 'Chef',
      image: images.CHEF,
      onPress: () => {},
    },
    {
      id: 11,
      name: 'Photographer',
      image: images.PHOTOGRAPHER,
      onPress: () => {},
    },
    {
      id: 12,
      name: 'Band Master',
      image: images.BAND_MASTER,
      onPress: () => {},
    },
    {
      id: 13,
      name: 'Computer Technician',
      image: images.COMP_TECH,
      onPress: () => {},
    },
    {
      id: 14,
      name: 'Babysitter',
      image: images.BABY_SITTER,
      onPress: () => {},
    },
  ];

  const ModalView = (
    <View style={{flex: 1}}>
      <Text style={styles.allCategories}>All Categories</Text>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={3}
        data={allCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.categoriesContainer}
            activeOpacity={0.85}
            onPress={item.onPress}>
            <View style={styles.category}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.catname}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <>
      {serviceCategories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryContainer}
          activeOpacity={0.85}
          onPress={category.onPress}>
          <View style={styles.category}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.catname}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <CustomModal
        showModal={modalVisible}
        hideModal={toggleModal}
        modalView={ModalView}
      />
    </>
  );
};
export default CategoriesCard;
