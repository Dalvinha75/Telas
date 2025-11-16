import React from 'react';
 import { View, Text, Button, StyleSheet } from
 'react-native';
 export default function DetailsScreen({ 
navigation }) {
 return (
    <View style={styles.container}>
    <Text style={styles.text}>Tela de 
Detalhes</Text>
    <Button
    title="Voltar para Home"
    onPress={() => navigation.goBack()}
 />
    <Button title="Ir para Frases" onPress={() => navigation.navigate('Frases')} />
    <Button title="Ir para Tarefas" onPress={() => navigation.navigate('Tarefas')} />
    <Button title="Ir para Temperatura" onPress={() => navigation.navigate('Temperatura')} />

 </View>
 );
 }
 const styles= StyleSheet.create({
 container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
},
 text: { 
fontSize: 24, 
},
 });
