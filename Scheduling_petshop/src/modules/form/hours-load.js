/* global dayjs */

import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

const hoursList = document.getElementById('hours')

export function hoursLoad({ date, dailySchedules = [] }) {
  if (!hoursList) return

  // Limpa horários anteriores
  hoursList.innerHTML = ''

  const unavailableHours = dailySchedules.map((s) => dayjs(s.when).format('HH:mm'))

  openingHours.forEach((hour) => {
    // Verifica se a hora já passou
    const [hourNumber] = hour.split(':')
    const isPast = dayjs(date).hour(parseInt(hourNumber)).isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isPast

    const li = document.createElement('li')
    li.classList.add('hour', available ? 'hour-available' : 'hour-unavailable')
    li.textContent = hour

    // Adiciona título do período
    if (hour === '09:00') addPeriodHeader('Manhã')
    if (hour === '13:00') addPeriodHeader('Tarde')
    if (hour === '18:00') addPeriodHeader('Noite')

    hoursList.appendChild(li)
  })

  hoursClick() // Adiciona eventos de clique
}

function addPeriodHeader(title) {
  const li = document.createElement('li')
  li.classList.add('hour-period')
  li.textContent = title
  hoursList.appendChild(li)
}
