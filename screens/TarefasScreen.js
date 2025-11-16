import React from 'react';
import { useState } from 'react';
import { criarTabela } from '../database/bancoDados'; 
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';

import {
  adicionarTarefa,
  listarTarefas,
  atualizarTarefa,
  deletarTarefa
} from '../database/bancoDados';

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks([...tasks, {key: Math.random().toString(), value: task}]);
 
    setTask("");
 
    }
	return(
<View style={estilos.app}>
<Text style={estilos.titulo}>Lista de Tarefas</Text>
<TextInput
       style={estilos.input}placeholder="Adicionar Nova Tarefa"
       onChangeText={setTask}
       value={task}/>
<Button title="Adicionar" onPress={addTask}></Button>
 
       <FlatList 
       data={tasks}
       renderItem={({item}) =>
        ( <View>
<Text style={estilos.tarefas}>{item.value}</Text>
</View>)
       }/>
</View>
 
  )
 
}
 
const estilos = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f6fc', // fundo suave
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
    marginBottom: 40,
    color: '#1e3a8a', // azul elegante
  },
  input: {
    borderRadius: 12,
    width: 300,
    borderWidth: 1.5,
    borderColor: '#60a5fa', // azul claro moderno
    height: 55,
    marginBottom: 40,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: '#111827',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  tarefas: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#3b82f6',
    marginBottom: 20,
    paddingBottom: 5,
    color: '#374151',
  },
  botao: {
    backgroundColor: '#3b82f6', // azul médio
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});