import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ToggleMenu = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" size={30} color="#222" />
    </TouchableOpacity>
  );
};

export default ToggleMenu;

const styles = StyleSheet.create({});
