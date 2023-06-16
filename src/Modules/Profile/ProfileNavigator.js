import React from 'react';
import Profile from './Profile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ProfileNavigator(props) {
    //console.log(props);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Profile"
        >
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}