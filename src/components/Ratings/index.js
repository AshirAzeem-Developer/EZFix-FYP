import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import TapRating from 'react-native-ratings/dist/TapRating';

const Ratings = () => {
  return (
    <TapRating
      ratingCount={5}
      style={{alignSelf: 'flex-end'}}
      defaultRating={2} ````````````````
      imageSize={20}
      onStartRating={rating => console.log('Rating is', rating.value)}
    />
  );
};

export default Ratings;

const styles = StyleSheet.create({});
