import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigation from './BottomNavigation'
import { createStackNavigator, } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <Stack.Navigator>

            {/* <Stack.Screen
                name="onboard"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Main"
                component={BottomNavigation}
                options={{ headerShown: false }}
            />



            {/* <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#302a69',
                    },
                }}
            /> */}
        </Stack.Navigator>
    )
}