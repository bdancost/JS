// Cotaao demoeda do dia
const USD = 5.4
const EUR = 6.2
const GBP = 7.2

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando input amount para receber somente números
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

//Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
  }

  //Função de conversão
  function convertCurrency(amount, price, symbol) {
    try {
      //Atualizando a cotação da moeda selecionada
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

      let total = amount * price

      //Atualizando o resultado
      result.textContent = formatCurrencyBRL(total)

      // Exibindo o resultado
      footer.classList.add('show-result')
    } catch (error) {
      footer.classList.remove('show-result')
      console.log(error)
    }
  }
  // Formatando o valor para BRL
  function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }
}
