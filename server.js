//Importa a aplicação configurada
import app from "./src/app.js"

//Define porta do servidor
const PORT  = 3000;

//Inicia o servidor na porta definida
app.listen(PORT, () => {

    //Exibe mensagem informando que o servidor foi iniciado
    console.log(`Servidor funcionando na porta ${PORT}`)
})