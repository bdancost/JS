/* global dayjs */

// Seleciona as ULs (listas) dentro de cada período
const periodMorning = document.querySelector('#period-morning .appointments')
const periodAfternoon = document.querySelector('#period-afternoon .appointments')
const periodNight = document.querySelector('#period-night .appointments')

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as listas, não as seções
    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''

    // Renderiza os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')

      item.setAttribute('data-id', schedule.id)

      time.textContent = dayjs(schedule.when).format('HH:mm')
      name.textContent = `${schedule.name} 🐾 ${schedule.pet} (${schedule.services})`

      // Ícone de cancelar
      const cancelIcon = document.createElement('img')
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttribute('src', './src/assets/cancel.svg')
      cancelIcon.setAttribute('alt', 'Cancelar agendamento')

      item.append(time, name, cancelIcon)

      // Define o período
      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert('Não foi possível carregar os agendamentos. Tente mais tarde.')
    console.log(error)
  }
}
