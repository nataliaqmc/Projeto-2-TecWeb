
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './src/App';
import Favoritar from './src/Favoritar'

const Stack = createStackNavigator();

export default function Main() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='App'>
                <Stack.Screen name='Tela de início' component={App}/>
                <Stack.Screen name='Tela favoritos' component={Favoritar}/>
            </Stack.Navigator>
        </NavigationContainer>

);
}