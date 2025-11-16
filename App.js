import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FrasesScreen from './screens/FrasesScreen';
import index from './screens/index';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

import TarefasScreen from './screens/TarefasScreen';
import TemperaturaScreen from './screens/TemperaturaScreen';

import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function DetalhesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalhes</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="index"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Frases" component={FrasesScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
        <Stack.Screen name="Temperatura" component={TemperaturaScreen} />
        <Stack.Screen name="Login" component={index} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
