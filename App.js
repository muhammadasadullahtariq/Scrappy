/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Tab from './Navigation/tabNavigation';//Import Tab Navigator
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#007AFF" />
      <Tab />
    </NavigationContainer>
  );
};

export default App;
