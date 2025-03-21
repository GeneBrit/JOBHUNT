import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './src/screens/principal';
import SignUpScreen from './src/screens/sign up';
import ElectionScreen from './src/screens/election';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="election" component={ElectionScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}