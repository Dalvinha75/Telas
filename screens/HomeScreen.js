import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏡 Tela Inicial</Text>

      <TouchableOpacity
        style={[styles.button, styles.buttonFrases]}
        onPress={() => navigation.navigate('Frases')}
      >
        <Text style={styles.buttonText}>IR PARA FRASES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonTarefas]}
        onPress={() => navigation.navigate('Tarefas')}
      >
        <Text style={styles.buttonText}>IR PARA TAREFAS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonTemperatura]}
        onPress={() => navigation.navigate('Temperatura')}
      >
        <Text style={styles.buttonText}>IR PARA TEMPERATURA</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎨 Estilos (apenas CSS da Home)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  button: {
    width: '70%',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonFrases: {
    backgroundColor: '#7A5CFF',
  },
  buttonTarefas: {
    backgroundColor: '#00D4C6',
  },
  buttonTemperatura: {
    backgroundColor: '#FF8A65',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
