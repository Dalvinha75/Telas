import { openDatabaseSync } from 'expo-sqlite';

const db = openDatabaseSync('frases.db');

// Criar tabela
export const criarTabelaFrases = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS frases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        texto TEXT NOT NULL
      );
    `);
  } catch (error) {
    console.log("Erro ao criar tabela de frases:", error);
  }
};

// Inserir frase (compatível com sua tela)
export const salvarFrase = async (texto) => {
  try {
    const resultado = await db.runAsync(
      `INSERT INTO frases (texto) VALUES (?);`,
      [texto]
    );
    return resultado.lastInsertRowId;
  } catch (error) {
    console.log("Erro ao salvar frase:", error);
    throw error; // garante que a tela mostre alerta
  }
};

// Listar frases
export const listarFrases = async () => {
  try {
    const results = await db.getAllAsync(`SELECT * FROM frases;`);
    return results;
  } catch (error) {
    console.log("Erro ao listar frases:", error);
    return [];
  }
};

export default db;
