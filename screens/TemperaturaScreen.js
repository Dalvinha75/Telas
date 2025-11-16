import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [input, setInput] = useState('');
  const [scale, setScale] = useState('C');

  const parseInput = parseFloat(input);

  const celsius = scale === 'C' ? parseInput : 
                  scale === 'F' ? (parseInput - 32) * 5/9 : 
                  scale === 'K' ? parseInput - 273.15 : 0;

  const fahrenheit = celsius * 9/5 + 32;
  const kelvin = celsius + 273.15;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Temperatura</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite a temperatura"
        value={input}
        onChangeText={setInput}
      />

      <Picker
        selectedValue={scale}
        style={styles.picker}
        onValueChange={(itemValue) => setScale(itemValue)}
      >
        <Picker.Item label="Celsius" value="C" />
        <Picker.Item label="Fahrenheit" value="F" />
        <Picker.Item label="Kelvin" value="K" />
      </Picker>

      {isNaN(parseInput) ? (
        <Text style={styles.result}>Digite um número válido</Text>
      ) : (
        <View style={styles.resultBox}>
          <Text style={styles.result}>Celsius: {celsius.toFixed(2)}°C</Text>
          <Text style={styles.result}>Fahrenheit: {fahrenheit.toFixed(2)}°F</Text>
          <Text style={styles.result}>Kelvin: {kelvin.toFixed(2)}K</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  resultBox: {
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    marginVertical: 4,
  },
});