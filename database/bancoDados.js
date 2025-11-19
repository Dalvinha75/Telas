import * as SQLite from 'expo-sqlite';

let banco;

// Abre ou cria banco
export async function conectarBanco() {
  if (!banco) {
    banco = SQLite.openDatabaseSync('users.db'); 
    await banco.execAsync(`PRAGMA journal_mode = WAL`);
  }
  return banco;
}

/* ======================================================
      TABELA DE TAREFAS
====================================================== */

// Cria tabela de tarefas 
export async function criarTabelaTarefas() {
  const db = await conectarBanco();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL
    );
  `);
}

// Adicionar tarefa
export async function adicionarTarefa(titulo) {
  const db = await conectarBanco();
  const resultado = await db.runAsync(
    'INSERT INTO tarefas (titulo) VALUES (?);',
    titulo
  );
  return resultado.lastInsertRowId;
}

// Listar tarefas
export async function listarTarefas() {
  const db = await conectarBanco();
  const tarefas = await db.getAllAsync('SELECT * FROM tarefas;');
  return tarefas;
}

// Atualizar tarefa
export async function atualizarTarefa(id, novoTitulo) {
  const db = await conectarBanco();
  await db.runAsync(
    'UPDATE tarefas SET titulo = ? WHERE id = ?;',
    novoTitulo,
    id
  );
}

// Excluir tarefa
export async function deletarTarefa(id) {
  const db = await conectarBanco();
  await db.runAsync(
    'DELETE FROM tarefas WHERE id = ?;',
    id
  );
}

/* ======================================================
      TABELA DE USUÁRIOS
====================================================== */

export async function criarTabelaUsers() {
  const db = await conectarBanco();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    );
  `);
}

// Criar usuário
export async function createUser(usuario, senha) {
  const db = await conectarBanco();
  await db.runAsync(
    'INSERT INTO users (usuario, senha) VALUES (?, ?);',
    usuario,
    senha
  );
}

// Deletar tabela de usuários (para testes)
export async function delBd() {
  const db = await conectarBanco();
  await db.runAsync('DROP TABLE IF EXISTS users;');
}

// Login
export async function getUser(usuario, senha) {
  try {
    const db = await conectarBanco();
    const users = await db.getAllAsync(
      'SELECT * FROM users WHERE usuario = ? AND senha = ?;',
      usuario,
      senha
    );
    return users.length > 0;
  } catch (error) {
    console.log('Erro ao buscar usuário:', error);
    return false;
  }
}

// Verificar se usuário já existe
export async function usuarioExiste(usuario) {
  try {
    const db = await conectarBanco();
    const users = await db.getAllAsync(
      'SELECT * FROM users WHERE usuario = ?;',
      usuario
    );
    return users.length > 0;
  } catch (error) {
    console.log('Erro ao verificar usuário:', error);
    return false;
  }
}
