import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Routes from './Routes';

const BaseNavigator: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        headerLeft: () => null,
      }}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default BaseNavigator;
