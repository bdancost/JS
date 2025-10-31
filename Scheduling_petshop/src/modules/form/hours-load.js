/* global dayjs */
import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

const hoursList = document.getElementById('hours')

export function hoursLoad({ date, dailySchedules = [] }) {
  if (!hoursList) return

  // Limpa horários anteriores
  hoursList.innerHTML = ''

  // Converter todos os horários ocupados para formato HH:mm
  const unavailableHours = dailySchedules.map((s) => dayjs(new Date(s.when)).format('HH:mm'))

  openingHours.forEach((hour) => {
    const [hourNumber] = hour.split(':')

    // Cria uma data completa com a hora atual
    const hourDate = dayjs(date).hour(parseInt(hourNumber)).minute(0).second(0)

    // Verifica se o horário já passou (somente se for o dia de hoje)
    const isToday = dayjs(date).isSame(dayjs(), 'day')
    const isPast = isToday && hourDate.isBefore(dayjs())

    // Verifica se o horário está disponível
    const available = !unavailableHours.includes(hour) && !isPast

    // Cria o elemento <li>
    const li = document.createElement('li')
    li.classList.add('hour', available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

    // Adiciona títulos de período
    if (hour === '09:00') addPeriodHeader('Manhã')
    if (hour === '13:00') addPeriodHeader('Tarde')
    if (hour === '18:00') addPeriodHeader('Noite')

    hoursList.appendChild(li)
  })

  hoursClick()
}

function addPeriodHeader(title) {
  const li = document.createElement('li')
  li.classList.add('hour-period')
  li.textContent = title
  hoursList.appendChild(li)
}
