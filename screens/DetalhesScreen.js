import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export default function DetalhesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.appTitle}>Meu App Multifuncional</Text>
      <Text style={styles.appVersion}>Versão 1.0.0</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sobre o Aplicativo</Text>
        <Text style={styles.cardContent}>
          Este aplicativo foi desenvolvido como um projeto prático para demonstrar proficiência em 
          React Native e Expo, utilizando gerenciamento de estado e persistência de dados (SQLite).
        </Text>
        <Text style={styles.cardContent}>
          Funcionalidades incluídas: 
        </Text>
        <View style={styles.list}>
            <Text style={styles.listItem}>• Gerenciamento de Tarefas (CRUD com SQLite)</Text>
            <Text style={styles.listItem}>• Gerador de Frases Motivacionais (Persistência com SQLite)</Text>
            <Text style={styles.listItem}>• Calculadora de IMC</Text>
            <Text style={styles.listItem}>• Conversor de Temperatura</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informações do Desenvolvedor</Text>
        <Text style={styles.cardContent}>
          Nome: [Lindalva]
        </Text>
        <Text style={styles.cardContent}>
          Contato: [dalva@gmail.com]
        </Text>
        <Text style={styles.cardContent}>
          Projeto Acadêmico: [ Disciplina de Dispositivos Móveis ]
        </Text>
      </View>
      
      {/* Seção de Navegação Rápida */}
      <Text style={styles.sectionTitle}>Navegação Rápida</Text>
      
      <TouchableOpacity 
        style={[styles.navButton, styles.primaryButton]} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navButton, styles.secondaryButton]} 
        onPress={() => navigation.navigate('Frases')}
      >
        <Text style={styles.buttonText}>Ir para Frases</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.navButton, styles.secondaryButton]} 
        onPress={() => navigation.navigate('Tarefas')}
      >
        <Text style={styles.buttonText}>Ir para Tarefas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eef2f5', // Fundo leve
    padding: 20,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  appVersion: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 8,
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    marginBottom: 10,
  },
  list: {
    marginTop: 5,
    marginLeft: 10,
  },
  listItem: {
    fontSize: 15,
    color: '#34495e',
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 10,
    marginBottom: 15,
  },
  // Botões
  navButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#2ecc71', // Verde para ação principal
  },
  secondaryButton: {
    backgroundColor: '#3498db', // Azul para navegação
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});