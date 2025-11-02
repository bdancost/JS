# Pet Shop Scheduler

Aplicação web para agendamento de serviços em um pet shop. Projeto leve em JavaScript puro (ES Modules) com UI simples, persistência via json-server e gerenciamento de horários disponíveis.

## Principais funcionalidades

- Seleção de data e horários disponíveis (bloqueia horários passados e já ocupados).
- Criação de agendamentos (POST).
- Listagem diária de agendamentos por período (Manhã / Tarde / Noite).
- Cancelamento de agendamento com animação de remoção (DELETE).
- Feedback visual (toasts / confirmações).

## Tecnologias

- JavaScript (ES Modules)
- dayjs (datas)
- json-server (API de desenvolvimento)
- HTML / CSS (sem frameworks)
- Ferramentas: ESLint, Prettier

## Pré-requisitos

- Node.js (recomendado >= 18)
- npm

## Instalação e execução

1. Instale dependências:
   - npm install

2. Inicie a API de desenvolvimento (json-server):
   - npm run server
   - A API ficará disponível em: http://localhost:3333

3. Abra o navegador em `http://localhost:3333` (ou a porta do seu servidor estático).

Scripts úteis (definidos em package.json):

- npm run server — inicia json-server (server.json, porta 3333)
- npm run lint — roda ESLint
- npm run format — formata com Prettier

---

## Estrutura do projeto (resumida)

- index.html — entrada da aplicação
- src/
  - main.js — inicialização e import dos módulos
  - modules/
    - form/ — lógica do formulário (date-change, hours-load, hours-click, submit)
    - schedules/ — carregamento, render e cancelamento de agendamentos
  - services/ — chamadas HTTP (fetch) para a API (list, create, delete)
  - utils/ — dados utilitários (ex: opening-hours)
  - styles/ — CSS (global, form, schedules)
  - assets/ — imagens e ícones

---

## Formato do servidor (exemplo server.json)

```json
// filepath: [server.json](http://_vscodecontentref_/0)
{
  "schedules": [
    {
      "id": "uuid-1",
      "name": "Ana",
      "pet": "Rex",
      "services": "Banho grande",
      "when": "2025-11-02T09:00:00.000Z"
    }
    // ...
  ]
}
```
