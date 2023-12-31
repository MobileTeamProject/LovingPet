import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import FeelSelector from './FeelSelector';

const ContentHeader = ({ year, month, day, setFeelCondition, feelsIdx }) => {
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;
  const dayNow = new Date().getDate();
  const isNow = () => {
    return year == yearNow && month == monthNow && day == dayNow;
  };
  const isSelectorShow = () => {
    if (year < yearNow) return true;
    else if (year > yearNow) return false;

    if (month < monthNow) return true;
    else if (month > monthNow) return false;

    if (day <= dayNow) return true;
    else return false;
  };
  const getFeelSelector = () => {
    if (isSelectorShow()) {
      return (
        <View style={styles.feelWheaterView}>
          <Text style={styles.todayFeelWheater}>오늘 기분은?</Text>
          <FeelSelector
            isNow={isNow}
            setFeelCondition={setFeelCondition}
            feelsIdx={feelsIdx}
          />
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>
          선택 날짜 : {year}년 {month}월 {day}일
        </Text>
      </View>
      {getFeelSelector()}
    </View>
  );
};

ContentHeader.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  setFeelCondition: PropTypes.func.isRequired,
  feelsIdx: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 7,
  },
  dateView: {
    flex: 1,
  },
  feelWheaterView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  todayFeelWheater: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default ContentHeader;
