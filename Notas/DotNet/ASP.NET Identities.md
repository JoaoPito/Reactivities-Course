É um framework do ASP.NET para gerenciar usuários do app.
Inclui classes para representar usuários, assim como DBContexts para armazenar esses usuários.
Também tem suporte para 2-factor authentication, login usando serviços de terceiros e etc.

## Senhas
O ASP.NET consegue gerenciar e guardar senhas.
Faz isso com hashing + salting para guardar as senhas em um DB de forma segura.

## Databases
Automaticamente cria tables para vários aspectos como usuários, informações de login, tokens, etc

## Gerenciamento de usuários
O ASP.NET também nos dá uma API para gerenciar usuários (classe **UserManager**)

## DTOs
Data Transfer Objects - Em geral são objetos que transferem dados entre processos.
No app usamos para transferir objetos do user e para o user da API.