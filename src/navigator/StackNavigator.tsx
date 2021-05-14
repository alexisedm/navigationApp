import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import page1 from '../screens/page1';
import page3 from '../screens/page3';
import page2 from '../screens/page2';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={page1} />
            <Stack.Screen name="Profile" component={page2} />
            <Stack.Screen name="Settings" component={page3} />
        </Stack.Navigator>

    )
}

export default StackNavigator
