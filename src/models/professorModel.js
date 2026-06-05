//Importa o módulo de conexão com o banco de dados MySQL
import {conexao} from "../database/conexao.js"

//Função responsável por buscar todos os registros de professores
export const listarTodos = async () => {

    //Executa a consulta SQL no banco de dados
    const [rows] = await conexao.execute(
        "Select * FROM professores"
    );

    //Retorna os registros encontrados
    return rows;
}

//Função de busca de professor por identificador
export const buscarPorId = async (id) => {

    //Executa a consulta SQL
    const [rows] = await conexao.execute(
        "Select * from professores WHERE  id = ?",
        [id]
    )

    //Retorna o registro encontrado no banco de dados
    return rows[0];
}

//Função de criação de novo registro de professor
export const criarProfessores = async (professor) => {

    //Execução da inclusão do novo registro 
    const resultado = await conexao.execute(
        `INSERT INTO 
        professores (nome, disciplina, email, salario) 
        VALUES (?, ?, ?, ?)`,
        [professor.nome,
        professor.disciplina,
        professor.email,
        professor.salario]
    );

    //Retorno do resultado da adição de novo registro
    return resultado;
}

//Função de atualização de registro de professor
export const atualizar = async (id, professor) => {

    //Executa a atualização de registro de professor
    const [resultado] = await conexao.execute(
        `UPDATE professores
        SET  nome = ?,
        disciplina = ?,
        email = ?,
        salario = ?
        WHERE id = ?`,
        [professor.nome,
        professor.disciplina,
        professor.email,
        professor.salario,
        id]
    );

    //Retorna o resultado da atualização do registro
    return resultado;
}

//Função de remoção de registro de professor
export const remover = async (id) => {

    //Executa a remoção do registro do professor
    const [resultado] = await conexao.execute(
        "DELETE FROM professores WHERE id = ?", [id]
    );

    //Retorna o resultado da remoção
    return resultado
}