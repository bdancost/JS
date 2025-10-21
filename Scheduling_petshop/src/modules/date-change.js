import { renderAppointments } from './appointments.js'
import dayjs from '../libs/dayjs.js'

const dateInput = document.getElementById('date')
dateInput.value = dayjs().format('YYYY-MM-DD')
renderAppointments(dateInput.value)

dateInput.addEventListener('change', () => {
  renderAppointments(dateInput.value)
})
