import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      alert('Por favor, digite seu e-mail.');
      return;
    }
    alert(`Um link de redefinição foi enviado para: ${email}`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Enviar link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Voltar ao login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '90%', height: 45, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 10, marginBottom: 15, borderWidth: 1, borderColor: '#ccc' },
  button: { backgroundColor: '#1976d2', width: '90%', height: 45, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#1976d2', marginTop: 15, fontWeight: 'bold' },
});
