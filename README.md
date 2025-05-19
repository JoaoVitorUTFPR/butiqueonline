# Butique Online

É uma loja de varejo que comercializa de escala pequena que comercializa produtos de alta qualidade e elegante com artigos finos.

## Ferramentas e Tecnologias

### Frontend

- HTML
- CSS

### Backend

- Node.js
- MongoDB

### Versionamento de Código

- Git
- GitHub

## Atributos

**Produtos**

- Nome
- Preço
- Categoria

## Requisitos Funcionais

- Cadastro de produtos: Deve permitir cadastrar produtos com nome, categoria e preço.

- Validações obrigatórias: Nome, categoria e preço devem ser preenchidos. O preço deve ser um número maior que zero.

- Listagem de produtos: Deve exibir todos os produtos cadastrados com seus respectivos dados.

- Exclusão de produtos: Deve permitir remover produtos pelo ID.

- Interface Web: Deve ter páginas HTML/CSS para cadastro, visualização e exclusão de produtos.

- Validação no backend: O backend deve validar dados e retornar erros claros ao usuário.

- Conexão com MongoDB: A aplicação deve se conectar ao banco MongoDB local (mongodb://localhost:27017/butique).

- Arquitetura em camadas: Separar as responsabilidades em dados, lógica e interface.

## Como instalar e executar o projeto

--
npm install

--
npm run start

[Endpoints]

- Criar -> [POST] http://localhost:3000/produtos
- Atualizar -> [PUT] http://localhost:3000/produtos/[_ID_PRODUTO]
- Deletar -> [DELETE] http://localhost:3000/produtos/[_ID_PRODUTO]
- Listar -> [GET] http://localhost:3000/produtos
- Buscar -> [GET] http://localhost:3000/produtos?nome=
- Encontrar único produto -> [GET] http://localhost:3000/produtos/[_ID_PRODUTO]

### Clonar repositório:

git clone https://github.com/JoaoVitorUTFPR/butiqueonline
