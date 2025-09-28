// Selecionando os elementos
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Função para buscar as cotações da API
async function getExchangeRates(baseCurrency = 'BRL') {
  // Baseando a busca em BRL para simplificar o cálculo
  // A AwesomeAPI retorna BRL como base
  const url = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erro na rede: ${response.status}`)
    }
    const data = await response.json()

    // A API retorna objetos como 'USDBRL', 'EURBRL', etc.
    // O valor da cotação é o campo 'ask' (preço de venda)
    return {
      USD: parseFloat(data.USDBRL.ask),
      EUR: parseFloat(data.EURBRL.ask),
      GBP: parseFloat(data.GBPBRL.ask),
      ARS: parseFloat(data.ARSBRL.ask),
    }
  } catch (error) {
    console.error('Erro ao buscar cotações da API:', error)
    // Retorna valores padrões caso a API falhe, para evitar quebrar o código
    // ATENÇÃO: Estes são os valores 'marretados' de fallback, que ainda seriam estáticos.
    // Em um ambiente de produção, você pode querer um mecanismo melhor de cache ou alerta.
    return {
      USD: 5.4,
      EUR: 6.2,
      GBP: 7.2,
      ARS: 0.015,
    }
  }
}

// Manipulando input amount para receber somente números
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Capturando o evento de submit do formulário
form.onsubmit = async (event) => {
  // Tornar a função assíncrona para usar await
  event.preventDefault()

  // 1. Buscando as cotações atualizadas
  const rates = await getExchangeRates()

  // 2. Definindo o símbolo da moeda
  let price = 0
  let symbol = ''

  switch (currency.value) {
    case 'USD':
      price = rates.USD // Pega o valor dinâmico
      symbol = 'US$'
      break
    case 'EUR':
      price = rates.EUR // Pega o valor dinâmico
      symbol = '€'
      break
    case 'GBP':
      price = rates.GBP // Pega o valor dinâmico
      symbol = '£'
      break
    case 'ARS':
      price = rates.ARS // Pega o valor dinâmico
      symbol = '$'
      break
  }

  // Se o preço for válido, converte
  if (price > 0) {
    convertCurrency(amount.value, price, symbol)
  } else {
    console.error('Cotação não encontrada ou inválida.')
    footer.classList.remove('show-result')
  }
}

// Função de conversão (mantida a lógica interna)
function convertCurrency(amount, price, symbol) {
  try {
    // Atualizando a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    // Atualizando o resultado total
    result.textContent = formatCurrencyBRL(total)

    // Exibindo o resultado
    footer.classList.add('show-result')
  } catch (error) {
    footer.classList.remove('show-result')
    console.log(error)
  }
}

// Formatando o valor para BRL (mantida)
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
