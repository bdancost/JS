const periods = document.querySelectorAll('.period')

// Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  period.addEventListener('click', (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      const item = event.target.closet('li')
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm('Deseja realmente cancelar o agendamento?')

        if (isConfirm) {
        }
      }
    }
  })
})
