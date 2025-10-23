import { schedulesDay } from './load.js'
import { scheduleCancel } from '../../services/schedule-cancel.js'

const periods = document.querySelectorAll('.period')

// Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  period.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      const item = event.target.closest('li')

      // Pega o id do agendamento para remover
      const { id } = item.dataset

      // Confirma que o id foi selecionado
      if (id) {
        // Confirma se o usuário quer cancelar
        const isConfirm = confirm('Deseja realmente cancelar o agendamento?')

        if (isConfirm) {
          await scheduleCancel({ id })

          schedulesDay()
        }
      }
    }
  })
})
