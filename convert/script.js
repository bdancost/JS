const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const result = document.getElementById('result')

// Manipulando input amount para receber somente números
amount.addEventListener('input', (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})
