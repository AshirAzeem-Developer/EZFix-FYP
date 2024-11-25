import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import useStyles from './styles';
import images from '../../assets/images';
import CustomModal from '../CustomModal';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {getCategories} from '../../utils/ApiCall';
import {useDispatch, useSelector} from 'react-redux';
import END_POINTS from '../../constants/apiEndPoints';
import {setSkill, setSkillId} from '../../store/reducer/job-order';

const CategoriesCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  const {styles, sizes} = useStyles();
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const dispatch = useDispatch();

  // Fetch categories only when component mounts
  useEffect(() => {
    getCategories(userToken)
      .then(res => {
        const data = res.data?.data;
        // Only update if the data is different
        if (JSON.stringify(data) !== JSON.stringify(categories)) {
          setCategories(data);
        }
      })
      .catch(err => {
        console.error(
          'Error fetching categories:',
          err?.response?.data?.message,
        );
      });
  }, [userToken]);

  // Memoized ModalView to avoid re-rendering
  const ModalView = useMemo(
    () => (
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
          initialNumToRender={6}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.categoriesContainer}
              activeOpacity={0.85}
              onPress={() => {
                navigation.navigate('WorkDetails', {
                  title: item?.attributes?.categoryId,
                });
                dispatch(setSkill(item?.attributes.name));
                dispatch(setSkillId(item?.id));
                // console.log('Selected Category ----- >>', item?.id);
              }}>
              <View style={styles.category}>
                <Image
                  source={{
                    uri: `${END_POINTS.BASE_URL}${item?.attributes?.icon?.data?.attributes?.url}`,
                  }}
                  style={styles.image}
                  tintColor={'#008000'}
                />
                <Text style={styles.catname}>{item?.attributes?.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    ),
    [categories, sizes],
  );

  // Memoized toggle function to avoid re-creation
  const toggleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  // console.log(
  //   'Categories Are-------------- >',
  //   JSON.stringify(categories, null, 2),
  // );

  return (
    <>
      {categories.slice(0, 3).map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryContainer}
          activeOpacity={0.85}
          onPress={() => {
            navigation.navigate('WorkDetails', {
              title: category?.attributes.name,
            });
            dispatch(setSkill(category?.attributes?.name));
            dispatch(setSkillId(category?.id));
            // console.log('Selected Category ----- >>', category?.id);
          }}>
          <View style={styles.category}>
            <Image
              source={{
                uri: `${END_POINTS.BASE_URL}${category.attributes?.icon?.data?.attributes?.url}`,
              }}
              style={styles.image}
              tintColor={'#008000'}
            />
            <Text style={styles.catname}>{category.attributes?.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.categoryContainer}
        activeOpacity={0.85}
        onPress={toggleModal}>
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

export default React.memo(CategoriesCard);
