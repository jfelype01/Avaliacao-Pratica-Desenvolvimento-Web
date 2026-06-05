//Importa o model de professores
import * as professorModel from "../models/professorModel.js";

//Função responsável por listar os professores
export const listar = async (req, res) => {

    //Chama o model para buscar os registros de professores
    const professores = await professorModel.listarTodos();

    //Retorna os professores no formato JSON
    res.json(professores);
};

//Função de busca de professor pelo identificador
export const buscarPorId = async (req, res) => {

    //Resgata o registro de professor de acordo com o identificador informado
    const professor = await professorModel.buscarPorId(req.params.id);

    //Retorna o registro no formato JSON
    res.json(professor);
}

//Função de criação de novo registro de professor
export const criar = async (req, res) => {
    
    //Chama o model para inserção de novo professor
    await professorModel.criarProfessores(req.body);

    //Retorna mensagem de sucesso
    res.json({
        mensagem: "Professor cadastrado com sucesso"
    });
}

//Função de atualização de registro de professor de acordo com identificador informado
export const atualizar = async (req, res) => {

    //Chama o model para atualizar o professor com identificador informado
    await professorModel.atualizar(
        req.params.id,
        req.body
    );

    //Retorna mensagem de sucesso
    res.json({
        mensagem: "Professor atualizado com sucesso"
    });
}

//Função responsável por remover um professor de acordo com identificador informado
export const remover = async (req, res) => {

    //Chama o model para remover registro de professor com identificador informado
    await professorModel.remover(req.params.id);

    //Retorna mensagem de sucesso
    res.json({
        mensagem: "Professor removido com sucesso"
    })
}