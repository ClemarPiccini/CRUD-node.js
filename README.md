**Projeto Teste CRUD**

*link mostrando o funcionamento do código*

https://share.vidyard.com/watch/hhvUTSSJUoBtMyyq7Gds7Y?

**API NODE.JS**

*PARA USAR A API:*

-CLONAR O CODIGO;

-ABRIR NO VSCODE;

-ABRIR UM TERMINAL INTEGRADO (ctrl + j);

-PASSAR O COMANDO: npm install

-CRIAR ARQUIVO .env E CONFIGURAR AS VARIAVEIS DE AMBIENTE ABAIXO:

MYSQL_DATABASE="db_teste"

MYSQL_USER="user"

MYSQL_PASSWORD="password"

MYSQL_ROOT_PASSWORD="password"

MYSQL_PORT= 3306

ADMINER_PORT= 8080

SECRET_KEY= "chavedesegurancaultrasecreta"

-INICIAR O CONTAINER NO TERMINAL COM O COMANDO: docker compose up

-EM UM NOVO TERMINAL: npm start

*APÓS ISSO A API ESTARA RODANDO NA PORTA 3005 E O CONTAINER COM BANCO DE DADOS MYSQL NA PORTA 8080.*

**ARQUIVO JSON DOS MODELOS DE TESTE NA PASTA insomnia**