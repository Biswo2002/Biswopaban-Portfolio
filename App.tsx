import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import React from 'react';
import {PublicRoutes} from '~/routes';
import DrawerLayout from '~/routes/layouts/DrawerLayout';
import PrivateRoutes from '~/routes/private';
import CustomTheme from '~/styles';

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider
      theme={CustomTheme}
      config={{
        dependencies: {
          'linear-gradient': require('react-native-linear-gradient').default,
        },
      }}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#1e40af'} barStyle={'light-content'} />
        {true ? <DrawerLayout /> : <PublicRoutes />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
