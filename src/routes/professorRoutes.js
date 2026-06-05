//Importa o express
import express from "express"

//Importa o controller de professores
import * as professorController from "../controllers/professorController.js";

//Cria objeto de rotas
const router = express.Router();

//Define rota de listagem dos professores
router.get('/professores', professorController.listar);

//Define rota de busca de professor por id
router.get('/professores/:id', professorController.buscarPorId);

//Define rota de criação de registro de professor
router.post('/professores', professorController.criar);

//Define rota de atualização de registro de professor por identificador
router.put('/professores/:id', professorController.atualizar);

//Define rota de remoção de professor por identificador
router.delete('/professores/:id', professorController.remover);

//Exporta as rotas
export default router;