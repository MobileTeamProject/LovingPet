/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoldText from '../components/checkList/BoldText';

const HeaderComp = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }} />
      <View style={styles.titleView}>
        <BoldText style={styles.headerTitle}>{title}</BoldText>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    color: '#000000',
  },
  header: {
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 3,
  },
  titleView: {
    flex: 4,
    alignItems: 'center',
  },
  logoutView: {
    width: 63,
    borderRadius: 12,
    backgroundColor: '#D2B48C',
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 5,
  },
  logoutTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default HeaderComp;
