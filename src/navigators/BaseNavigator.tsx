import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Routes from '../utilities/Routes';
import BottomTabNavigator from './BottomTabNavigator';
import SideDrawerNavigator from './SideDrawerNavigator';

const BaseNavigator: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        headerLeft: () => null,
      }}>
      <Stack.Screen
        name={Routes.SideDrawerNavigator}
        component={SideDrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default BaseNavigator;
