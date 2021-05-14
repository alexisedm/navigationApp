//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackNavigator from './navigator/StackNavigator';


//const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>

        // <Stack.Navigator>
        //     <Stack.Screen name="Home" component={Home} />
        //     <Stack.Screen name="Notifications" component={Notifications} />
        //     <Stack.Screen name="Profile" component={Profile} />
        //     <Stack.Screen name="Settings" component={Settings} />
        // </Stack.Navigator>
    )
}

export default App
