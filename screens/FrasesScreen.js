import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [frase, setFrase] = useState("Toque no botão para gerar");

  const frases = [
    'Acredite em você',
    'Você pode tudo',
    'A vida não é fácil',
    'Tudo é possível para aquele que crê',
    'Você consegue',
    'A vida não é um morango',
    'O único lugar onde o sucesso vem antes do trabalho é no dicionário',
    'O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum',
    'Coragem não é ausência de medo, mas a habilidade de agir apesar dele',
    'Seja a mudança que você quer ver no mundo',
    'A persistência é o caminho do êxito',
    'Não espere por uma oportunidade, crie-a',
    'Acredite nos seus sonhos e eles se tornarão realidade',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia',
    'Tudo o que você precisa já está dentro de você',
    'Você não é derrotado quando perde, mas quando desiste',
    'A maior vitória é a vitória sobre si mesmo',
    'Os obstáculos são aquelas coisas assustadoras que você vê quando tira os olhos de seu objetivo',
    'A única maneira de fazer um ótimo trabalho é amar o que você faz',
    'O futuro pertence àqueles que acreditam na beleza dos seus sonhos',
    'Sua vida é seu reflexo, se você quer mudá-la, mude sua atitude',
    'Não conte os dias, faça os dias contarem',
    'Não desista. Geralmente é a última chave no chaveiro que abre a fechadura',
  ];

  const gerarFrase = () => {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
  };

  const limparFrase = () => {
    setFrase("");
  };

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}>FRASES</Text>

      <View style={styles.card}>
        <Text style={styles.frase}>{frase}</Text>
      </View>

      <View style={styles.boxBtn}>
        <Pressable
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
          onPress={gerarFrase}
        >
          <Text style={styles.textBtn}>Gerar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, styles.secBtn, pressed && { opacity: 0.8 }]}
          onPress={limparFrase}
        >
          <Text style={styles.textBtn}>Limpar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  titulo: {
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  card: {
    width: '100%',
    minHeight: 140,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    elevation: 10,
    marginBottom: 20,
  },
  frase: {
    fontSize: 22,
    textAlign: 'center',
    color: '#444',
    marginVertical: 10,
    fontStyle: 'italic',
  },
  boxBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20,
  },
  btn: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#3498db',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  textBtn: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  secBtn: {
    backgroundColor: '#e74c3c',
  },
});