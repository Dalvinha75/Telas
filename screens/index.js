import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { conectarBanco, getUser, criarTabelaUsers, createUser, usuarioExiste } from '../database/bancoDados';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

 const handleLogin = async () => { // ✅ Tornar a função async
  if (!usuario || !senha) {
    Alert.alert('Erro', 'Preencha todos os campos');
    return;
  }

  try {
    const usuarioExiste = await getUser(usuario, senha); // ✅ Usar await
    
    if (usuarioExiste) {
      Alert.alert('Sucesso', 'Login realizado!');
      navigation.navigate('Inicio'); // ✅ Navega quando usuário EXISTE
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  } catch (error) {
    Alert.alert('Erro', 'Falha ao fazer login');
    console.log(error);
  }
};

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vinda(o)!</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />



      <Text> {getUser.valueOf() } </Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '90%', height: 45, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 10, marginBottom: 15, borderWidth: 1, borderColor: '#ccc' },
  button: { backgroundColor: '#1976d2', width: '90%', height: 45, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#1976d2', marginTop: 15, fontWeight: 'bold' },
});
