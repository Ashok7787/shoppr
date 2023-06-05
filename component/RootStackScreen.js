import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductWrapper from './Product/ProductWrapper';
import UserList from './UserList';

const Stack = createStackNavigator();

function RootStackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="User" component={UserList} />
      
                {/* <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={HomeNavigator} />
                <Stack.Screen name="Signup" component={SignupScreen} /> */}
                {/* <Stack.Screen name="appnavigator" component={AppNavigator} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;
