import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreenRoute } from '../../navigations/routes';

const MyPageButton = ({ navigation }) => {
  return (
    <Pressable onPressIn={() => navigation.navigate(HomeScreenRoute.MYPAGE)}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="account-circle"
          size={40}
          color="#745757"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginRight: 10,
  },
});

export default MyPageButton;
