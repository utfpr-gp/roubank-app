# roubank-app

Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web inspirada em operações comuns de instituições financeiras (ex: saque, depósito, extrato, saldo, cadastro), sendo o diferencial, a cobrança de taxas de forma abusiva para cada operação realizada pelo cliente.

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy - GitHub Pages

https://utfpr-gp.github.io/roubank-app/

## Protótipo

https://www.figma.com/file/a1VDbO1aNfZyulQPxT99OE/beleza-em-dia?node-id=3%3A80

## Checklist

- [x] Criar um repositório no GitHub com a estrutura do Gitflow, incluindo pelo menos as branches principais "main" e "develop."
- [x] Utilizar componentes de um framework CSS, como Bootstrap, Materialize ou outro à sua escolha.
- [x] Apresentar as telas com layout responsivo, adaptando-se a diferentes tamanhos de tela, usando um framework CSS ou implementações personalizadas.
- [x] Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
- [x] Aplicar pelo menos dois tipos de data-binding, como Interpolation, Property Binding, Event Binding, Two-Way Data Binding, 
- [x] Empregar variáveis de template e a anotação ViewChild para interagir com elementos do DOM ou componentes diretamente no template ou no código TypeScript do aplicativo.
- [x] Estabelecer a passagem de dados entre componentes por meio da hierarquia de componentes, empregando as anotações @Input e @Output.
- [x] Transferir dados, por meio de serviços, entre componentes que não estão diretamente relacionados.
- [x] Mapear os componentes às rotas no módulo de rotas, criando uma estrutura de navegação eficiente.
- [x] Permitir a navegação fluida entre as diferentes páginas do aplicativo por meio de links e botões de navegação.
- [x] Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro.
- [x] Implementar máscaras em campos de formulário, quando necessário, para melhorar a experiência do usuário ao inserir dados.
- [x] Desabilitar o botão de envio (submit) enquanto o formulário estiver em um estado inválido.
- [x] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Promises.
- [x] Realizar requisições à API com tratamento adequado das respostas de sucesso e erro com Observables.
- [x] Criar o cadastro completo de uma entidade, incluindo operações de criação, leitura, atualização e exclusão (CRUD) utilizando uma API, como o JSON Server.
- [x] Utilizar o armazenamento local (LocalStorage ou SessionStorage) para armazenar dados temporários, quando necessário.
- [x] Aplicar a diretiva estrutural ngFor para apresentar uma lista dinâmica de dados em seu aplicativo.
- [x] Utilizar a diretiva ngIf para controlar a exibição ou ocultação de elementos com base em condições específicas.
- [x] Formatar a apresentação de dados com Pipes, de acordo com os requisitos do aplicativo.
- [x] Executar o processo de build da aplicação e realizar o deploy para tornar o aplicativo acessível online.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`
