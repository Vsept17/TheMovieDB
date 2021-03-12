/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  MainScreen,
  InformationAScreen,
  InformationBScreen,
  ConfirmationScreen,
  RegisterDoneScreen,
  DetailMovieScreen,
} from './Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailMovieScreen"
          component={DetailMovieScreen}
          options={{
            title: false,
            headerTintColor: 'white',
            headerStyle:{
              backgroundColor: '#22211F'
            }
          }}
        />
        <Stack.Screen
          name="InformationA"
          component={InformationAScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InformationB"
          component={InformationBScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterDone"
          component={RegisterDoneScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <MainScreen />
  );
};

export default App;
