# NestJS Product CRUD

Este projeto é uma API RESTful desenvolvida com **NestJS** e **PostgreSQL** (via Docker), para gerenciamento de produtos (CRUD). Inclui TypeORM, Migrations e configuração de ambiente com `.env`.

---

## 🧰 Requisitos

Antes de começar, você precisará ter instalado:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) (recomendado: v18+)
- [NPM](https://www.npmjs.com/)
- [Nest CLI](https://docs.nestjs.com/cli/overview)

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nestjs-product-crud.git
cd nestjs-product-crud
```

## 2. Crie o arquivo .env

Crie um arquivo .env na raiz do projeto com o conteúdo abaixo:

```
# App
PORT=3001

# Banco de Dados - usado pela aplicação NestJS
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=products_db
DB_SCHEMA=public

# Variáveis para o container do Postgres
POSTGRES_DB=products_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

🔁 O DB_HOST deve ser db para que o serviço NestJS se conecte ao banco de dados via Docker Compose.

### 🐳 Rodando com Docker

## 3. Inicie os containers

```bash
docker-compose up -d
```

## 📦 Scripts disponíveis (dentro do container ou localmente)

Instalar dependências (apenas localmente)

```bash
npm install
```

Rodar o projeto localmente (sem Docker)

```bash
npm run start:dev
```

Gerar uma nova migration

```bash
npm run migration:generate -- -n CreateProductTable
```

Executar as migrations

```bash
npm run migration:run
```

# 📁 Estrutura do Projeto
```
nestjs-product-crud/
├── src/
│ ├── product/
│ │ ├── entities/
│ │ │ └── product.entity.ts
│ │ ├── product.controller.ts
│ │ ├── product.service.ts
│ │ └── product.module.ts
│ ├── app.module.ts
│ ├── main.ts
│ └── data-source.ts
├── .env
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠 Tecnologias utilizadas
```
NestJS
TypeORM
PostgreSQL
Docker
Node.js
```
