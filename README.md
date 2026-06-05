# Projeto API Professores

## Descrição

Projeto desenvolvido para a disciplina de Desenvolvimento Web.

A aplicação consiste em uma API REST para gerenciamento de professores, utilizando:

* Node.js
* Express
* MySQL
* Arquitetura MVC
* Programação assíncrona com async/await

A API permite realizar operações de CRUD (Create, Read, Update e Delete) sobre os professores cadastrados.

---

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd projeto-api-professores
```

Instale as dependências:

```bash
npm install
```

---

## Configuração do Banco de Dados

Crie o banco de dados MySQL executando o script abaixo:

```sql
CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    disciplina VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);
```

Após criar o banco, configure os dados de conexão no arquivo:

```text
src/database/conexao.js
```

Exemplo:

```javascript
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'escola'
});
```

---

## Executando o Projeto

Modo desenvolvimento:

```bash
node server.js
```

A API ficará disponível em:

```text
http://localhost:3000
```

---

## Rotas da API

### Cadastrar Professor

```http
POST /professores
```

Exemplo de corpo da requisição:

```json
{
    "nome": "João Silva",
    "disciplina": "Programação Web",
    "email": "joao@email.com",
    "salario": 5000.00
}
```

---

### Listar Todos os Professores

```http
GET /professores
```

---

### Buscar Professor por ID

```http
GET /professores/:id
```

Exemplo:

```http
GET /professores/1
```

---

### Atualizar Professor

```http
PUT /professores/:id
```

Exemplo:

```json
{
    "nome": "João Silva",
    "disciplina": "Banco de Dados",
    "email": "joao@email.com",
    "salario": 5500.00
}
```

---

### Remover Professor

```http
DELETE /professores/:id
```

Exemplo:

```http
DELETE /professores/1
```

---
