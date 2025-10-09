const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, '')

  amount.value = value
}
