import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NewPageStuff, Login} from '../page';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="NewPageStuff">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPageStuff"
        component={NewPageStuff}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
