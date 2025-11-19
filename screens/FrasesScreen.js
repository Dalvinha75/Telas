import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { criarTabelaFrases, salvarFrase, listarFrases } from '../database/frasesDB';

export default function FrasesScreen() {
  const [frase, setFrase] = useState('');
  const [frases, setFrases] = useState([]);

  useEffect(() => {
    async function iniciar() {
      await criarTabelaFrases();
      const todas = await listarFrases();
      setFrases(todas);
    }
    iniciar();
  }, []);

  // Gera frase aleatória
  const gerarFrase = async () => {
    const frasesBase = [
      "Acredite no seu potencial!",
      "Você é capaz de grandes coisas.",
      "Nunca desista dos seus sonhos.",
      "A persistência leva ao sucesso.",
      "O importante é continuar tentando."
    ];

    const novaFrase = frasesBase[Math.floor(Math.random() * frasesBase.length)];
    setFrase(novaFrase);

    try {
      await salvarFrase(novaFrase);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a nova frase");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Frase Motivacional do Dia</Text>

      <Text style={styles.frase}>
        {frase || "Clique no botão para gerar uma frase!"}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={gerarFrase}>
        <Text style={styles.botaoTexto}>Gerar Nova Frase</Text>
      </TouchableOpacity>

      <Text style={styles.subtitulo}>Frases já geradas:</Text>
      {frases.map((f, index) => (
        <Text key={index} style={styles.listaItem}>• {f.texto}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  frase: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 30,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  listaItem: {
    fontSize: 16,
    marginTop: 5,
  },
});
