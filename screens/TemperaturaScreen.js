import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function TemperaturaScreen() {
  const [input, setInput] = useState('');
  const [scale, setScale] = useState('C');

  // Garante que o input seja um número válido
  const parseInput = parseFloat(input.replace(',', '.')); // Permite vírgula ou ponto

  // 1. Converte a temperatura de entrada para Celsius (base)
  const celsius = scale === 'C' 
    ? parseInput 
    : scale === 'F' 
      ? (parseInput - 32) * 5/9 
      : scale === 'K' 
        ? parseInput - 273.15 
        : 0;

  // 2. Converte a temperatura base (Celsius) para as outras escalas
  const fahrenheit = celsius * 9/5 + 32;
  const kelvin = celsius + 273.15;

  // Verifica se a entrada é válida (não é NaN)
  const isInputValid = !isNaN(parseInput) && input.trim() !== '';

  // Função auxiliar para formatar o resultado
  const formatResult = (temp) => {
    // Retorna a temperatura formatada, ou '---' se inválida
    return isInputValid ? temp.toFixed(2) : '---';
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conversor de Temperatura</Text>

      {/* Campo de Entrada */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite a temperatura"
          value={input}
          onChangeText={setInput}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={scale}
            style={styles.picker}
            onValueChange={(itemValue) => setScale(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Celsius (°C)" value="C" />
            <Picker.Item label="Fahrenheit (°F)" value="F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
        </View>
      </View>


      {/* Caixa de Resultados */}
      <View style={styles.resultBox}>
          {
            !isInputValid && input.trim() !== '' ? (
              <Text style={styles.errorText}>Digite um número válido</Text>
            ) : (
              <>
                <Text style={styles.resultLabel}>Resultados da Conversão:</Text>
                
                <View style={styles.conversionItem}>
                    <Text style={styles.resultText}>Celsius</Text>
                    <Text style={styles.resultValue}>{formatResult(celsius)}°C</Text>
                </View>
                
                <View style={styles.conversionItem}>
                    <Text style={styles.resultText}>Fahrenheit</Text>
                    <Text style={styles.resultValue}>{formatResult(fahrenheit)}°F</Text>
                </View>

                <View style={styles.conversionItem}>
                    <Text style={styles.resultText}>Kelvin</Text>
                    <Text style={styles.resultValue}>{formatResult(kelvin)}K</Text>
                </View>
              </>
            )
          }
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007AFF', // Azul primário
    marginBottom: 40,
    textAlign: 'center',
  },
  inputGroup: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  pickerContainer: {
    width: '90%',
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    height: '100%',
  },
  resultBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    paddingBottom: 5,
  },
  conversionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  resultText: {
    fontSize: 18,
    color: '#495057',
  },
  resultValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  errorText: {
    fontSize: 18,
    color: '#dc3545',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});