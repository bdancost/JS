import dayjs from 'dayjs'

// Seleciona as sessões
const periodMorning = document.getElementById('period-morning')
const periodAfternoon = document.getElementById('period-afternoon')
const periodNight = document.getElementById('period-night')

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as sessões
    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''

    // Renderiza os agendamentos por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')

      // Adiciona id do agendamento
      item.setAttribute('data-id', schedule.id)

      time.textContent = dayjs(schedule.when).format('HH:mm')
      name.textContent = schedule.name

      // Criar icone de cancelar o agendamento
      const cancelIcon = document.createElement('img')
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttibute('src', './scr/assets/cancel.svg')
      cancelIcon.setAttibute('alt', 'Cancelar agendamento')

      // Adiciona o tempo, nome e icone no item
      item.append(time, name, cancelIcon)

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour()

      // Renderiza o agendamento na sessão (manha, tarde ou noite)
      if (hour >= 9 && hour < 13) {
        periodMorning.appendChild(item)
      } else if (hour >= 13 && hour < 19) {
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
