import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const PRIMARY_COLOR = '#8e44ad'; // Roxo

export default function IMCscreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [status, setStatus] = useState('');

  const calcularImc = () => {
    // 1. Validação dos inputs
    if (!peso || !altura) {
      Alert.alert('Erro', 'Por favor, preencha o peso e a altura.');
      return;
    }

    const pesoFloat = parseFloat(peso.replace(',', '.'));
    const alturaFloat = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat <= 0) {
      Alert.alert('Erro', 'Valores inválidos. Use apenas números, e a altura deve ser maior que zero.');
      return;
    }

    // A altura deve estar em metros. Se o usuário digitar 175, assumimos cm e dividimos por 100.
    const alturaMetros = alturaFloat > 3 ? alturaFloat / 100 : alturaFloat;

    // Fórmula IMC: peso / (altura * altura)
    const resultado = pesoFloat / (alturaMetros * alturaMetros);
    
    const imcFormatado = resultado.toFixed(2);
    setImc(imcFormatado);
    setStatus(classificarImc(resultado));
  };

  const classificarImc = (valor) => {
    if (valor < 18.5) return 'Abaixo do peso';
    if (valor >= 18.5 && valor <= 24.9) return 'Peso normal';
    if (valor >= 25 && valor <= 29.9) return 'Sobrepeso';
    if (valor >= 30 && valor <= 34.9) return 'Obesidade Grau I';
    if (valor >= 35 && valor <= 39.9) return 'Obesidade Grau II (Severa)';
    return 'Obesidade Grau III (Mórbida)';
  };

  const handleClear = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setStatus('');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Calculadora de IMC</Text>

        <TextInput
          style={styles.input}
          placeholder="Peso (ex: 70.5 em kg)"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura (ex: 1.75 em metros)"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={calcularImc}>
            <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {imc !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Seu IMC é:</Text>
            <Text style={styles.resultValue}>{imc}</Text>
            <Text style={styles.statusText}>Status: {status}</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    flex: 2,
    backgroundColor: PRIMARY_COLOR,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#95a5a6', // Cinza
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
  },
  resultLabel: {
    fontSize: 20,
    color: '#34495e',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});