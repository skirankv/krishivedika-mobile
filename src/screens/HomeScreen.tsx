import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ToggleMenu from '../components/common/ToggleMenu';

const HomeScreen = () => {
  return (
    <View>
      <ToggleMenu />
      <Text style={{ color: '#000' }}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
