import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Modules/Auth/LoginScreen';
import HomeNavigator from '../Modules/Home/HomeNavigator';
import SignupScreen from '../Modules/Auth/SignupScreen';
// import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

function RootStackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={HomeNavigator} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                {/* <Stack.Screen name="appnavigator" component={AppNavigator} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;
