import dayjs from '../libs/dayjs.js'

let appointments = []

const morningList = document.querySelector('#period-morning .appointments')
const afternoonList = document.querySelector('#period-afternoon .appointments')
const nightList = document.querySelector('#period-night .appointments')

export function renderAppointments(date) {
  const selectedDate = dayjs(date)
  morningList.innerHTML = ''
  afternoonList.innerHTML = ''
  nightList.innerHTML = ''

  const filtered = appointments.filter((app) => dayjs(app.date).isSame(selectedDate, 'day'))
  filtered.sort((a, b) => a.hour.localeCompare(b.hour))

  filtered.forEach((app) => {
    const li = document.createElement('li')
    li.dataset.id = app.id
    li.innerHTML = `
      <strong>${app.hour}</strong>
      <span>${app.pet} (${app.tutor})</span>
      <small>${app.service}</small>
      <button class="delete-btn">X</button>
    `
    const hour = parseInt(app.hour.split(':')[0])
    if (hour < 12) morningList.appendChild(li)
    else if (hour >= 12 && hour < 18) afternoonList.appendChild(li)
    else nightList.appendChild(li)
  })
}

export function addAppointment(app) {
  const conflict = appointments.find((a) => a.date === app.date && a.hour === app.hour)
  if (conflict) return alert('Já existe um agendamento nesse horário.')

  appointments.push(app)
  renderAppointments(app.date)
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.closest('li')
    const id = li.dataset.id
    appointments = appointments.filter((a) => a.id != id)
    li.remove()
  }
})
