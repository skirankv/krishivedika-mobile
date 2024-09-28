import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import TabIcon from '../components/common/TabIcon';
import CustomDrawer from '../components/common/CustomDrawer';
import ProfileScreen from '../screens/ProfileScreen';

const SideDrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Main Screen"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#B666D2',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="Main Screen"
        component={BottomTabNavigator}
        options={{
          title: 'Main Screen',
          drawerIcon: ({ focused, color }) => (
            <TabIcon focused={focused} color={color} tab="Main" />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, color }) => (
            <TabIcon focused={focused} color={color} tab="Profile" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideDrawerNavigator;
