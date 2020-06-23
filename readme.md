
<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src="https://i.imgur.com/RSswOY2.png" width="300px" />
</h1>
<h3 align="center">
  GoStack: GoBarber Backend - API Rest com NodeJS/Express desenvolvido em TypeScript
</h3>
GoBarber é o projeto desenvolvido durante o BootCamp GoStack da Rocketseat. Uma aplicação completa feita com Node, ReactJS e React Native para gestão de uma barbearia.

## :rocket: Tecnologias
- CRUD Users
- Crud Appointments
- Arquitetura DDD e SOLID
- Test-driven development


## :rocket: Tecnologias
- [**NodeJS**](https://nodejs.org/en/)
- [**TypeScript*](https://nodejs.org/en/)
- [**Docker**](https://www.docker.com/)
- [**Postgres**](https://www.postgresql.org/)
- [**Jest**](https://jestjs.io/)
- [**MongoDB**](https://www.mongodb.com/)
- [**Redis**](https://redis.io/)
---


## **Bibliotecas**
- [**Express**](https://expressjs.com/pt-br/)
- [**Yup**](https://github.com/jquense/yup)
- [**Jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken)
- [**typeorm**](https://typeorm.io//)
- [**Bcryptjs**](https://www.npmjs.com/package/bcryptjs)
- [**Date-fns**](https://date-fns.org/)
- [**Multer**](https://www.npmjs.com/package/multer)
- [**Nodemailer**]
- [**Date-fns**](https://date-fns.org/)
- [**Dotenv**](https://www.npmjs.com/package/dotenv)
- [**Handlebars**](https://handlebarsjs.com/)

---

## **Lint**
- [**ESLint**](https://www.npmjs.com/package/eslint) — [**Airbnb style guide (Javascript)**](https://github.com/airbnb/javascript)
- [**Prettier**](https://www.npmjs.com/package/prettier)
- [**EditorConfig**]() — Extension for VSCode.

---
## **Funcionalidades**
<h3>1. Criação e autenticação de usuários </h3>
Criação de usuários que podem ser usuários normais ou fornecedores (Provider). Ambos possuem e-mail e senha, além de dados pessoais, e são autenticados na aplicação com o uso do JWT.

<h3>2. Agendamentos</h3>
Os usuários podem fazer o agendamento com um prestador de serviço, de acordo com os horários disponíveis do prestador em questão. O prestador de serviço é notificado na aplicação quando recebe um novo agendamento e também é notificado por e-mail quando um agendamento é cancelado.
<h3>3. Listagens</h3>
Os usuários podem listar todos seus agendamentos feitos. Já os prestadores podem verificar sua agenda para o dia em questão, como todos os agendamentos dos dia passados, atuais e futuros.


---
# Instalando Dependências

```

$ git clone https://github.com/mailsongarcia/gobarber-backend
$ cd gobarber-backend
$ yarn
# Configurar a database
$yarn typeorm

# Iniciar o servidor
$yarn dev:server

# Rodar os testes
yarn test


```

