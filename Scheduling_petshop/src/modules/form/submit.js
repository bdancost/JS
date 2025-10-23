import dayjs from 'dayjs'
import { hoursLoad } from './hours-load.js'
import { scheduleNew } from '../../services/schedule-new.js'
import { schedulesDay } from '../schedules/load.js'

const form = document.querySelector('.form')
const clientInput = document.getElementById('client')
const dateInput = document.getElementById('date')

const today = dayjs().format('YYYY-MM-DD')
dateInput.value = today
dateInput.min = today

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const clientName = clientInput.value.trim()
  if (!clientName) return alert('Informe o nome do cliente')

  const selectedHour = document.querySelector('.hour-selected')
  if (!selectedHour) return alert('Selecione um horário')

  // Pega hora como número
  const [hourNumberStr] = selectedHour.textContent.split(':')
  const hourNumber = parseInt(hourNumberStr, 10)

  const when = dayjs(dateInput.value).hour(hourNumber).minute(0)

  try {
    await scheduleNew({ name: clientName, when })
    await schedulesDay() // Atualiza agendamentos na tela

    // Limpa form
    clientInput.value = ''
    document
      .querySelectorAll('.hour-selected')
      .forEach((li) => li.classList.remove('hour-selected'))

    // Recarrega horários (opcional)
    hoursLoad({ date: dateInput.value, dailySchedules: [] })
  } catch (err) {
    console.error(err)
    alert('Ops, algo deu errado!')
  }
})
