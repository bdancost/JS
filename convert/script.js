// Cotaao demoeda do dia
const USD = 5.4
const EUR = 6.2
const GBP = 7.2

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
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
    case 'BRL':
      convertCurrency(amount.value, 1, 'BRL')
  }

  //Função de conversão
  function convertCurrency(amount, price, symbol) {}
}
