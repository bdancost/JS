import dayjs from '../libs/dayjs.js'
import Swal from 'sweetalert2'

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
  if (conflict) return false // indica falha

  appointments.push(app)
  renderAppointments(app.date)
  return true
}

// Deletar agendamento
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.closest('li')
    const id = li.dataset.id

    const result = await Swal.fire({
      title: 'Excluir agendamento?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
    })

    if (result.isConfirmed) {
      appointments = appointments.filter((a) => a.id !== id)
      li.remove()
      Swal.fire('Removido!', 'Agendamento excluído com sucesso.', 'success')
    }
  }
})
