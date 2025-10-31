import { schedulesDay } from './load.js'
import { scheduleCancel } from '../../services/schedule-cancel.js'

const periods = document.querySelectorAll('.appointments')

periods.forEach((period) => {
  period.addEventListener('click', async (event) => {
    const target = event.target

    if (target.classList.contains('cancel-icon')) {
      const item = target.closest('li')
      const id = item?.dataset?.id

      if (!id) return console.warn('ID do agendamento não encontrado.')

      const isConfirm = confirm('Deseja realmente cancelar o agendamento?')
      if (!isConfirm) return

      try {
        // Adiciona animação de remoção
        item.classList.add('fade-out')

        // Espera a animação terminar antes de remover
        setTimeout(async () => {
          await scheduleCancel({ id })
          await schedulesDay() // Atualiza a lista
        }, 400) // Duração da animação (ms)
      } catch (error) {
        console.error('Erro ao cancelar agendamento:', error)
        alert('Não foi possível cancelar o agendamento. Tente novamente.')
      }
    }
  })
})
