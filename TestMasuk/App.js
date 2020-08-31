//import liraries
import React from 'react';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';
// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
