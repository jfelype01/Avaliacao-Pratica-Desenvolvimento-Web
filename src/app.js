//Importa o express
import express from "express";
//Importa as rotas da aplicação
import router from "./routes/professorRoutes.js";

//Cria a aplicação express
const app = express();

//Habilita o recebimento de JSON nas requisições
app.use(express.json());

//Registra as rotas da aplicação
app.use(router);

//Exporta a aplicação
export default app;