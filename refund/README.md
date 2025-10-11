# Refund

Aplicação web para controle de reembolso de despesas, com cadastro, listagem, remoção e cálculo automático de totais.

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visual-studio-code&logoColor=white)

---

## 📋 Funcionalidades

- Cadastro de despesas com nome, categoria e valor.
- Listagem dinâmica das despesas cadastradas.
- Remoção individual de despesas.
- Cálculo automático do total e quantidade de despesas.
- Formatação automática do valor para padrão BRL.
- Interface responsiva e intuitiva.

---

## 🧩 Estrutura do Projeto

```
refund/
├── index.html
├── styles.css
├── script.js
├── img/
│   ├── food.svg
│   ├── accommodation.svg
│   ├── services.svg
│   ├── transport.svg
│   ├── others.svg
│   ├── chevron-down.svg
│   └── remove.svg
└── README.md
```

---

## ⚙️ Lógica de Desenvolvimento

- **Formulário:** Usuário informa nome, categoria e valor da despesa. O valor é formatado automaticamente para BRL.
- **Adição:** Ao submeter, um objeto despesa é criado e adicionado à lista, exibindo ícone, nome, categoria e valor.
- **Remoção:** Cada despesa possui ícone de remoção. Ao clicar, o item é excluído e os totais são atualizados.
- **Totais:** Sempre que uma despesa é adicionada ou removida, o total em reais e a quantidade de despesas são recalculados.
- **Responsividade:** Layout adaptável para diferentes tamanhos de tela.

---

## 🚀 Como Executar

1. Clone o repositório.
2. Abra o projeto no VSCode.
3. Utilize a extensão **Live Server** para rodar localmente.
4. Acesse `http://localhost:5500` no navegador.

---

## 👨‍💻 Autor

Daniel
