# Atividade Guiada Aula 06 — Frameworks I

Aplicação React com Vite e React Router, baseada no guia da atividade do Unilavras.

## Requisitos

- Node.js instalado
- npm

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

Depois, abra o endereço mostrado pelo Vite no terminal.

## Build de produção

```bash
npm run build
```

## Rotas

- `/` — Página Inicial
- `/sobre` — Sobre Nós
- `/contato` — Página de Contato
- `/produtos` — Lista de produtos
- `/produtos/1` — Notebook Gamer
- `/produtos/2` — Mouse sem fio
- `/produtos/3` — Teclado Mecânico

## Desafio final

A rota dinâmica usa `useParams()`, converte o `id` da URL para número e procura o produto no array com `find()`. Quando não encontra o produto, a aplicação exibe uma mensagem de erro e um link para voltar à lista.
