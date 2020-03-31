import React from 'react';

import Home from './screens/Home';
import Recipes from './screens/Recipes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                title: 'Title Global',
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen
                name="Home"
                options={{title: 'Welcome', headerShown: false}}
                component={Home} />
            <Stack.Screen
                name="Recipes"
                options={{title: 'Recipes'}}
                component={Recipes} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}