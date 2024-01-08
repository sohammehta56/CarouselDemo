import React from 'react';
import MainNavigation from './navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return(
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
};

export default App;
