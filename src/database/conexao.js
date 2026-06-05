//Importa o msql2 com suporte a promises
import mysql from "mysql2/promise"

//Cria e exporta a conexao com o banco de dados
export const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '27122004',
    database: 'escola'
})

