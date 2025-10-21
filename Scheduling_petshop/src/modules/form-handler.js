import { addAppointment } from './appointments.js'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'

const form = document.getElementById('appointment-form')
const hourSelect = document.getElementById('appointment-hour')

// Popula horas válidas
const hours = [
  `'09:00','10:00','11:00','12:00','13:00','14:00',
  '15:00','16:00','17:00','18:00','19:00','20:00','21:00'`,
]
hours.forEach((h) => (hourSelect.innerHTML += `<option value="${h}">${h}</option>`))

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const newApp = {
    id: uuidv4(),
    tutor: document.getElementById('tutor').value.trim(),
    pet: document.getElementById('pet').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    service: document.getElementById('service').value.trim(),
    date: document.getElementById('appointment-date').value,
    hour: hourSelect.value,
  }

  for (let key in newApp) {
    if (!newApp[key]) {
      return Swal.fire('Atenção', 'Preencha todos os campos corretamente.', 'warning')
    }
  }

  const added = addAppointment(newApp)
  if (!added) {
    return Swal.fire('Ops!', 'Já existe um agendamento nesse horário.', 'error')
  }

  Swal.fire('Sucesso', 'Agendamento criado com sucesso!', 'success')
  form.reset()
  document.getElementById('appointment-modal').classList.add('hidden')
})
