<!-- ...existing code... -->

# Hairday

<!-- Badges / Shields das ferramentas usadas -->

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/Editor-VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)
![Day.js](https://img.shields.io/badge/Day.js-1.x-4A90E2?logo=day.js&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.x-ff3e00?logo=postcss&logoColor=white)
![Git](https://img.shields.io/badge/Git-CLI-F05032?logo=git&logoColor=white)

Pequeno front-end para gerenciar agendamentos, consumindo uma API REST (por padrão em http://localhost:3333). Organiza agendamentos por períodos (manhã, tarde, noite) e permite cancelar agendamentos.

Principais ferramentas usadas

- Node / npm (dependências / scripts)
- JavaScript (ES6+)
- Visual Studio Code (edição)
- Day.js (manipulação de datas)
- PostCSS / CSS para estilos
- Git para versionamento

Como rodar (resumo)

1. Ajuste a URL da API em `src/services/api-config.js` se necessário.
2. Abra o projeto no VS Code.
3. Se houver dependências, rode:
   npm install
4. Inicie o servidor/host conforme sua configuração (ou abra o HTML com Live Server).

Depuração rápida do problema de DELETE 404

- Verifique se o campo de id retornado pela API é `id` ou `_id` e ajuste `schedulesShow` para usar `data-id` correto.
- Use DevTools → Network para conferir a URL do DELETE e o id enviado.
- Teste no terminal:
  curl -i -X DELETE "http://localhost:3333/schedules/ID_AQUI"

- Projeto pessoal —
