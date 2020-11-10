<h1 align="center" > API Rest - Cadastro de motorista e veículos  </h1>

<p>O projeto é uma ideia de cadastro aonde o motorista pode colocar o seus dados como por exemplo o <strong>CPF</strong> que é único de cada pessoa, você também pode fazer o cadastro dos veículos com os dados únicos de cada veículo como <strong>renavam</strong> e a <strong>placa</strong>, depois de ter motoristas e veículos cadastrados você pode adicionar o id dos veículos ao um motorista, mas para realizar essa operação o motorista precisar estar com o <strong>status</strong> ativo no sistema.</p>

---
## Tecnologias utilizadas no projeto

- Node.js
- Express.js
- Mongodb

---
## Para executar o projeto 

<p align="center"><strong> Antes você precisar instalar o 
<a href="https://nodejs.org/en/download">Node.js</a> e o banco de dados <a href="https://www.mongodb.com/try/download/community">MongoDb</a>. Após instalar seguir o passo a passo abaixo.</strong></p>

* Você também pode usar a base de dados do MongoDb em cloud.

## Teste as rotas no Postman ou Imsomnia

### Motoristas

ROTA                  |     HTTP(Verbo)   |      Descrição        | 
 -------------------- | ----------------- | --------------------- | 
/motorists            |       GET         | Selecionar Todos      | 
/motorists            |       POST        | Cadastrar Motorista   | 
/motorists/:id        |       GET         | Selcionar por Id      | 
/motorists/:id        |       PUT         | Atualizar Por Id      |   
/motorists/:id        |       DELETE      | Excluir Por Id        |


### Veículos

ROTA                  |     HTTP(Verbo)   |      Descrição        | 
 -------------------- | ----------------- | --------------------- | 
/vehicles             |       GET         | Selecionar Todos      | 
/vehicles             |       POST        |  Cadastrar Veículo    | 
/vehicles/:id         |       GET         | Selcionar por Id      | 
/vehicles/:id         |       PUT         | Atualizar Por Id      |    
/vehicles/:id         |       DELETE      | Excluir Por Id        |
/add-vehicles         |       POST        | Adiciona Id dos veículos ao motorista |

---
## Aplicação

```bash
# Clonar o repositório
$ git clone https://github.com/Theux17/api-rest-motorist-vehicle.git

# Entrar no diretório 
$ cd api-rest-motorist-vehicle

```
* Criar um arquivo na raiz chamado `.env` e copiar os dados do `.env.example` e preencher com as informações necessária.

```bash
# Instalar todas as dependências 
$ yarn install // npm install

# Iniciar o servidor
$ yarn start // npm start
```