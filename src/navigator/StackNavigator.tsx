import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import page1 from '../screens/page1';
import page3 from '../screens/page3';
import page2 from '../screens/page2';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        // <Stack.Navigator initialRouteName="page2">

        <Stack.Navigator initialRouteName="page1">
            <Stack.Screen name="page1" component={page1} />
            <Stack.Screen name="page2" component={page2} />
            <Stack.Screen name="page3" component={page3} />
        </Stack.Navigator>

    )
}

export default StackNavigator
