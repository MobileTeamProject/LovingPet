import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const WeatherIcon = ({ weatherType }) => {
  let iconName = '';

  if (weatherType == 'sunny') {
    iconName = 'sun';
  } else if (weatherType == 'cloudy') {
    iconName = 'cloud';
  } else if (weatherType == 'rainy') {
    iconName = 'tint';
  }

  return <Icon name={iconName} size={50} />;
};

export default WeatherIcon;
