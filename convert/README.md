# Convert — Conversor para BRL

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![VS%20Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)
![Live%20Server](https://img.shields.io/badge/Live%20Server-%23FF3E00?logo=visual-studio-code&logoColor=white)
![AwesomeAPI](https://img.shields.io/badge/AwesomeAPI-API-blue)

## Descrição

Aplicativo simples em uma página para converter valores de USD, EUR, GBP e ARS para BRL usando cotações da AwesomeAPI.

## Como executar (rápido)

1. Abrir `index.html` no navegador ou usar Live Server (VS Code).
2. Inserir valor numérico.
3. Selecionar moeda (USD, EUR, GBP, ARS).
4. Clicar em "Converter em reais".

Ex: servir localmente

npx http-server .

## abrir http://localhost:8080

## Estrutura de arquivos

---

- index.html — interface e formulário
- styles.css — estilos
- script.js — lógica de busca e conversão
- img/ — imagens usadas na UI

## API usada

---

Cotações:  
https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL

## Passo a passo — como a lógica foi criada

---

```
1. Captura dos elementos DOM
   - Selecionar input de valor, select de moeda, botão e área de resultado.
2. Validação do input
   - Verificar se o valor é número válido > 0; caso contrário, exibir mensagem de erro e impedir a conversão.
3. Função getExchangeRates()
   - Monta a URL da AwesomeAPI com os pares desejados.
   - Faz fetch / await para obter JSON.
   - Extrai a taxa de conversão relevante (campo `bid` por par p.ex. `USDBRL`).
   - Implementa fallback: se a requisição falhar ou formato inesperado, retorna um objeto com taxas pré-definidas (valores seguros para evitar quebra da UI).
   - Trata erros com try/catch e fornece sinais ao usuário (mensagem de erro / console).
4. Função convertCurrency(value, rate)
   - Recebe valor numérico e taxa (bid).
   - Faz conversão simples: resultado = value \* rate.
   - Retorna número em ponto flutuante (ou arredondado conforme necessidade).
5. Função formatCurrencyBRL(amount)
   - Usa Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }) para formatar a saída com separadores corretos e símbolo "R$".
6. Interação final
   - Ao clicar em converter:
     - Bloqueia o botão enquanto busca as cotações.
     - Chama getExchangeRates(), seleciona a taxa conforme moeda escolhida.
     - Chama convertCurrency() e formatCurrencyBRL().
     - Atualiza o DOM com o resultado formatado e reativa o botão.
7. Usabilidade e UX
   - Exibição de carregamento/feedback durante fetch.
   - Tratamento de erros amigável (mensagem no rodapé).
   - Input configurado para aceitar apenas números (type="number", step e pattern).
8. Pontos de melhoria possíveis
   - Cache das cotações por X segundos/minutos para reduzir chamadas.
   - Suporte a mais moedas e atualização automática.
   - Testes unitários para funções de conversão e formatação.
   - Tratamento de locais/idiomas diferentes.

## Notas finais

- Projeto educativo; adaptar e melhorar conforme necessidade.

```
