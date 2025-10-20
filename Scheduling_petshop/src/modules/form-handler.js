import { addAppointment } from './appointments.js'
import dayjs from '../libs/dayjs.js'

const form = document.getElementById('appointment-form')
const hourSelect = document.getElementById('appointment-hour')

// Popula horas válidas
const hours = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
]
hours.forEach((h) => (hourSelect.innerHTML += `<option value="${h}">${h}</option>`))

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const newApp = {
    id: Date.now(),
    tutor: document.getElementById('tutor').value,
    pet: document.getElementById('pet').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    date: document.getElementById('appointment-date').value,
    hour: hourSelect.value,
  }

  for (let key in newApp) {
    if (!newApp[key]) {
      return alert('Preencha todos os campos corretamente.')
    }
  }

  addAppointment(newApp)
  form.reset()
  document.getElementById('appointment-modal').classList.add('hidden')
})
