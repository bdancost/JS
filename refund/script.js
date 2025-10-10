// Seleciona os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, '')

  // Converte o valor para número e divide por 100 para considerar os centavos
  value = Number(value) / 100

  // Atualiza o valor do input
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  //Formata o valor no padrão BRL de moeda
  value = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  // Retorna o valor formatado
  return value
}

// Captura o evento de submit do formulário
form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault()

  // Cria um objeto com os dados da nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    categoty_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }), // Apenas para verificar se os dados estão corretos
  }
  console.log(newExpense)
}
