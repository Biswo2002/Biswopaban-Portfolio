import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import PrivateRoutes from '../private';
import {Platform} from 'react-native';

const Drawer = createDrawerNavigator();
type Colors = {
  bg: string;
  active: string;
  inactive: string;
  transparent: string;
};
const Colors: Colors = {
  bg: '#e2e8f0',
  active: '#fff',
  inactive: '#f3f4f6',
  transparent: 'transparent',
};
export default function DrawerLayout() {
  return (
    <Drawer.Navigator
      // drawerType="slide"
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '80%',
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}>
      <Drawer.Screen name="PrivateRoutes" component={PrivateRoutes} />
    </Drawer.Navigator>
  );
}
