import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TELAS DE AUTENTICAÇÃO
import Index from './screens/index'; 
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

// TELAS PRINCIPAIS E FUNCIONALIDADES
import HomeScreen from './screens/HomeScreen';
import DetalhesScreen from './screens/DetalhesScreen'; // Importação do componente Detalhes finalizado
import FrasesScreen from './screens/FrasesScreen';
import TarefasScreen from './screens/TarefasScreen';
import TemperaturaScreen from './screens/TemperaturaScreen';
import IMCscreen from './screens/IMCscreen'; // Note a correção para IMCScreen

const Stack = createNativeStackNavigator();

export default function App() {
  const PRIMARY_COLOR = '#3498db'; // Azul Principal

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: PRIMARY_COLOR },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
          // Oculta o cabeçalho nas telas de autenticação
          // Você pode querer deixar o header nas telas principais, mas não no Login/Registro
          // headerShown: false, // Descomente se quiser ocultar TODOS os headers
        }}
      >
        {/* GRUPO DE AUTENTICAÇÃO */}
        <Stack.Screen 
            name="Login" 
            component={Index} 
            options={{ headerShown: false, title: 'Entrar' }} // Remove o header para login
        />
        <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ title: 'Criar Conta' }} 
        />
        <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPasswordScreen} 
            options={{ title: 'Recuperar Senha' }} 
        />

        {/* GRUPO DE FUNCIONALIDADES */}
        <Stack.Screen 
            name="Inicio" 
            component={HomeScreen} 
            options={{ title: 'Início', headerLeft: () => null }} // Remove botão de voltar da tela inicial
        />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Sobre o App' }} />
        <Stack.Screen name="Frases" component={FrasesScreen} options={{ title: 'Frases Motivacionais' }} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} options={{ title: 'Minhas Tarefas' }} />
        <Stack.Screen name="Temperatura" component={TemperaturaScreen} options={{ title: 'Conversor de Temperatura' }} />
        <Stack.Screen name="IMC" component={IMCscreen} options={{ title: 'Calculadora IMC' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}