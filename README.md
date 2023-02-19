# CRUD USER API

## EU AINDA VOU DOCUMENTAR BONITINHO O PROJETO E COMO RODAR ELE <3 =D

Este projeto é uma API desenvolvida em Node.js, utilizando o framework Express, o ORM Sequelize e o superset de JavaScript, TypeScript. O objetivo principal é fornecer um CRUD de usuários em um banco de dados MySQL, permitindo que as operações de criação, leitura, atualização e exclusão de registros sejam realizadas facilmente.

A API é construída seguindo os princípios RESTful, que definem a forma como as requisições e respostas HTTP devem ser formatadas, garantindo a padronização da comunicação entre os clientes e o servidor. Além disso, a utilização do TypeScript permite uma maior segurança e facilidade de manutenção do código, com a utilização de tipagem forte e recursos de orientação a objetos.

Para a realização das operações de banco de dados, o Sequelize é utilizado como ORM, permitindo que as consultas SQL sejam geradas de forma programática, sem a necessidade de escrever o código manualmente. Isso simplifica muito o desenvolvimento, já que a complexidade de gerenciamento de conexões e transações é abstraída pelo ORM.

Em resumo, este projeto é uma solução simples e eficiente para a criação de uma API de usuários com CRUD em Node.js, utilizando as tecnologias Express, Sequelize e TypeScript, que garantem a padronização, segurança e facilidade de manutenção do código.

<!-- Além disso, a estrutura de arquitetura MVC (Model-View-Controller) é seguida neste projeto, o que permite uma separação clara entre as camadas de apresentação, lógica de negócios e acesso a dados. Isso torna o código mais organizado e de fácil manutenção, além de melhorar a escalabilidade do projeto.

No modelo MVC, a camada de Model é responsável por representar os dados do banco de dados, enquanto a camada de View é responsável por lidar com a apresentação dos dados ao usuário. A camada de Controller atua como intermediário entre o Model e a View, processando as solicitações do usuário e fazendo as chamadas necessárias para a camada de Model, garantindo que as regras de negócios sejam seguidas.

A adoção da arquitetura MVC também permite que o projeto seja facilmente expandido, com a adição de novos modelos, visualizações e controladores, sem que isso impacte as demais partes do sistema. Isso torna a manutenção e evolução do código mais simples e eficiente. -->


Comandos

```
$ npx sequelize-cli db:create
$ npx sequelize-cli db:drop

$ npx sequelize-cli migration:generate --name nome_da_migration
$ npx sequelize-cli db:migrate

$ npx sequelize-cli seed:generate --name nome_da_seed     
$ npx sequelize-cli db:seed:all
```

Sequelize Migrate
aqui está uma lista das opções mais comuns que podem ser usadas ao definir uma coluna em uma migração do Sequelize:

```

type: especifica o tipo de dados da coluna. Alguns dos tipos suportados incluem STRING, INTEGER, BIGINT, FLOAT, DOUBLE, DECIMAL, BOOLEAN, DATE, DATEONLY, TIME, UUID, ARRAY, JSON, JSONB e outros.

allowNull: especifica se a coluna pode ser nula. Se definido como false, a coluna não pode ser nula.

defaultValue: especifica um valor padrão para a coluna. Isso só é usado se o valor não for fornecido ao inserir um registro.

primaryKey: especifica se a coluna é a chave primária da tabela.

autoIncrement: especifica se a coluna é auto-incrementável.

unique: especifica se os valores na coluna devem ser únicos.

references: especifica a tabela e a coluna à qual a coluna atual faz referência. Útil para estabelecer relações entre tabelas.

onUpdate: especifica a ação a ser executada quando o registro referenciado é atualizado. As opções incluem CASCADE, RESTRICT, NO ACTION e SET DEFAULT.

onDelete: especifica a ação a ser executada quando o registro referenciado é excluído. As opções incluem CASCADE, RESTRICT, NO ACTION e SET DEFAULT.

comment: adiciona um comentário à coluna.

validate: uma função de validação personalizada que é executada sempre que a coluna é atualizada ou criada. Essa função deve retornar um erro caso a validação não passe.


```
