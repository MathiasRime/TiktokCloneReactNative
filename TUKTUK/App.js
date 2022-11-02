import React from "react";

import Home from './src/screen/home/index';
import Profil from './src/screen/Profil/index';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator inititalRouteName='Home'  screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Profil' component={Profil}/>
      </Stack.Navigator>      
    </NavigationContainer>
  ) 
}
/**<Home/> */
export default App;