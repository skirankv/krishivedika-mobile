import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ToggleMenu from '../components/common/ToggleMenu';
// import { MapView } from '@rnmapbox/maps';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ToggleMenu />
      <Text style={{ color: '#000000' }}>HomeScreen</Text>
      <View style={{ flex: 1 }}>{/* <MapView style={{ flex: 1 }} /> */}</View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
