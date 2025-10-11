// Seleciona os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul')

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
  // Chama a função para adicionar a nova despesa
  expenseAdd(newExpense)

  // Reseta o formulário
  form.reset()
}

function expenseAdd(newExpense) {
  try {
    // Cria o elemento para adiciona o item (li) na lista (ul)
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

    // Cria o ícone da despesa
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute('src', `./img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute('alt', newExpense.categoty_name)

    // Cria o infor da despesa
    const expenseInfo = document.createElement('div')
    expenseInfo.classList.add('expense-info')

    // Cria o nome da despesa
    const expenseName = document.createElement('strong')
    expenseName.textContent = newExpense.expense

    // Cria a categoria da despesa
    const expenseCategory = document.createElement('span')
    expenseCategory.textContent = newExpense.categoty_name

    // Adiciona o nome e a categoria na div de info das despesas
    expenseInfo.append(expenseName, expenseCategory)

    // Cria o valor da despesa
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add('expense-amount')
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`

    // Cria o botão de remover
    const removeIcon = document.createElement('img')
    removeIcon.classList.add('remove-icon')
    removeIcon.setAttribute('src', './img/remove.svg')
    removeIcon.setAttribute('alt', 'remover')

    // Adiciona as informaoes no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)
    // Adiciona o item na lista
    expenseList.append(expenseItem)
  } catch (error) {
    alert('Não foi possível adicionar a despesa')
    console.error(error)
  }
}
