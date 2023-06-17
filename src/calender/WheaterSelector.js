import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Wheater = {
  SUNNY: 'sunny',
  CLOUDY: 'cloudy',
  RAINY: 'rainy',
};

const WheaterSelector = ({ setWheaterCondition, wheatersIdx }) => {
  const wheatersArr = Object.values(Wheater);
  const getLeft = () => {
    // if (isNow()) {

    // }
    return wheatersIdx == 0 ? (
      <View style={{ width: 20 }} />
    ) : (
      <Pressable
        hitSlop={4}
        onPressIn={() => {
          setWheaterCondition(wheatersIdx - 1);
        }}
      >
        <AntDesign name="left" size={20} color="#745757" />
      </Pressable>
    );
  };
  const getRight = () => {
    // if (isNow()) {

    // }
    console.log('Wheater');
    return wheatersIdx == wheatersArr.length - 1 ? (
      <View style={{ width: 20 }} />
    ) : (
      <Pressable
        hitSlop={4}
        onPressIn={() => {
          setWheaterCondition(wheatersIdx + 1);
        }}
      >
        <AntDesign name="right" size={20} color="#745757" />
      </Pressable>
    );
  };

  return (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      {getLeft()}
      <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
        {'  '}
        {wheatersArr[wheatersIdx]}
        {'  '}
      </Text>
      {getRight()}
    </View>
  );
};

WheaterSelector.propTypes = {
  setWheaterCondition: PropTypes.func.isRequired,
  wheatersIdx: PropTypes.number.isRequired,
};

export default WheaterSelector;
