import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './src/screens/principal';
import SignUpScreen from './src/screens/signup';
import ElectionScreen from './src/screens/election';
import LoginScreen from './src/screens/login';
import HomeCapacitorScreen from './src/screens/homeC';
import CreateVacancyScreen from './src/screens/createVac';
import CreateVacancyScreenTwo from './src/screens/createVac2';
import NotificationScreen from './src/screens/notifications';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="election" component={ElectionScreen}/>
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="homeC" component={HomeCapacitorScreen} />
        <Stack.Screen name="createVac" component={CreateVacancyScreen} />
        <Stack.Screen name="createVac2" component={CreateVacancyScreenTwo} />
        <Stack.Screen name="notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}