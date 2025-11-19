import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  criarTabelaTarefas,
  adicionarTarefa,
  listarTarefas,
  atualizarTarefa,
  deletarTarefa,
} from '../database/bancoDados'; 

const PRIMARY_COLOR = '#ff6347';

export default function TarefasScreen() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function inicializar() {
      await criarTabelaTarefas();
      await carregarTarefas();
    }
    inicializar();
  }, []);

  async function carregarTarefas() {
    try {
      const dados = await listarTarefas();
      setTarefas(dados);
    } catch (error) {
      console.log("Erro ao carregar tarefas:", error);
    }
  }

  async function handleAdicionarTarefa() {
    if (novaTarefa.trim() === '') {
      Alert.alert('Aviso', 'Digite o nome da tarefa.');
      return;
    }

    try {
      await adicionarTarefa(novaTarefa);
      setNovaTarefa('');
      carregarTarefas();
    } catch (error) {
      console.log("Erro ao adicionar tarefa:", error);
    }
  }

  function editarTarefa(id, tituloAtual) {
    Alert.prompt(
      "Editar tarefa",
      "Digite o novo título:",
      async (novoTitulo) => {
        if (novoTitulo && novoTitulo.trim() !== "") {
          await atualizarTarefa(id, novoTitulo);
          carregarTarefas();
        }
      }
    );
  }

  function excluir(id) {
    Alert.alert(
      "Excluir tarefa",
      "Tem certeza que deseja excluir?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            await deletarTarefa(id);
            carregarTarefas();
          }
        }
      ]
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.tarefaItem}>
      <Text style={styles.tarefaTexto}>{item.titulo}</Text>

      <TouchableOpacity
        style={styles.editarBtn}
        onPress={() => editarTarefa(item.id, item.titulo)}
      >
        <Text style={styles.btTxt}>✎</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.excluirBtn}
        onPress={() => excluir(item.id)}
      >
        <Text style={styles.btTxt}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          placeholderTextColor="#999"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAdicionarTarefa}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyList}>Nenhuma tarefa cadastrada.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 26,
    color: '#fff',
  },
  tarefaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: PRIMARY_COLOR,
  },
  tarefaTexto: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  editarBtn: {
    paddingHorizontal: 10,
  },
  excluirBtn: {
    paddingHorizontal: 10,
  },
  btTxt: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    fontWeight: 'bold'
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#777',
  },
});
