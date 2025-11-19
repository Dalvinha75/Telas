import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PRIMARY_COLOR = '#3498db'; // Azul principal

export default function HomeScreen({ navigation }) {
  const navigateToFeature = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Minhas Ferramentas</Text>
      <Text style={styles.headerSubtitle}>Escolha uma funcionalidade para começar.</Text>

      {/* Cartão de Tarefas */}
      <TouchableOpacity 
        style={[styles.card, styles.tasksCard]} 
        onPress={() => navigateToFeature('Tarefas')}
      >
        <Text style={styles.cardTitle}>Gerenciador de Tarefas</Text>
        <Text style={styles.cardSubtitle}>Organize seus compromissos e afazeres.</Text>
      </TouchableOpacity>

      {/* Cartão de Frases */}
      <TouchableOpacity 
        style={[styles.card, styles.phrasesCard]} 
        onPress={() => navigateToFeature('Frases')}
      >
        <Text style={styles.cardTitle}>Frases Motivacionais</Text>
        <Text style={styles.cardSubtitle}>Comece o dia com inspiração e foco.</Text>
      </TouchableOpacity>

      {/* Cartão de IMC */}
      <TouchableOpacity 
        style={[styles.card, styles.imcCard]} 
        onPress={() => navigateToFeature('IMC')}
      >
        <Text style={styles.cardTitle}>Calculadora IMC</Text>
        <Text style={styles.cardSubtitle}>Monitore seu Índice de Massa Corporal.</Text>
      </TouchableOpacity>
      
      {/* Cartão de Temperatura */}
      <TouchableOpacity 
        style={[styles.card, styles.tempCard]} 
        onPress={() => navigateToFeature('Temperatura')}
      >
        <Text style={styles.cardTitle}>Conversor de Temperatura</Text>
        <Text style={styles.cardSubtitle}>Converta Celsius e Fahrenheit rapidamente.</Text>
      </TouchableOpacity>

      {/* Cartão de Detalhes e Sair */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity 
          style={[styles.detailButton, { backgroundColor: PRIMARY_COLOR }]} 
          onPress={() => navigateToFeature('Detalhes')}
        >
          <Text style={styles.buttonText}>Detalhes do App</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.detailButton, styles.logoutButton]} 
          onPress={() => navigation.navigate('Login')} // Volta para a tela de Login
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f7f9',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  card: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  // Estilos de cor para os cartões
  tasksCard: {
    backgroundColor: '#1abc9c', // Turquesa
  },
  phrasesCard: {
    backgroundColor: '#9b59b6', // Amarethisa
  },
  imcCard: {
    backgroundColor: '#e67e22', // Laranja
  },
  tempCard: {
    backgroundColor: '#34495e', // Azul Escuro
  },
  bottomButtons: {
    marginTop: 20,
  },
  detailButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c', // Vermelho para Sair
  }
});