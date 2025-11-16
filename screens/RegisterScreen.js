import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { criarTabelaUsers, createUser } from '../database/bancoDados';

import { conectarBanco, getUser, usuarioExiste } from '../database/bancoDados';

export default function RegisterScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
const handleRegister = async () => { 
  if (!usuario || !senha || !confirmarSenha) {
    alert('Preencha todos os campos!');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  if (senha.length < 4) {
    alert('A senha deve ter pelo menos 4 caracteres!');
    return;
  }

  try {
    await criarTabelaUsers();
    
    // ✅ Verificar se usuário já existe
    const db = await conectarBanco();
    const usuariosExistentes = await db.getAllAsync(
      'SELECT * FROM users WHERE usuario = ?',
      usuario
    );

    if (usuariosExistentes.length > 0) {
      alert('Este usuário já existe!');
      return;
    }

    await createUser(usuario, senha);
    alert('Conta criada com sucesso!');
    navigation.navigate('index'); 
  } catch (error) {
    alert('Erro ao criar conta: ' + error.message);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

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

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
        <Text style={styles.link}>Voltar ao login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#1976d2',
    width: '90%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#1976d2', marginTop: 15, fontWeight: 'bold' },
});
