/* global dayjs */

import { scheduleNew } from '../../services/schedules-new.js'
import { schedulesDay } from '../schedules/load.js'

const form = document.querySelector('.form')
const clientName = document.getElementById('client')
const namePet = document.getElementById('pet')
const service = document.getElementById('service')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()
    const pet = namePet.value.trim()
    const services = service.value.trim()

    if (!name) {
      return alert('Informe o nome do cliente')
    }

    if (!pet) {
      return alert('Informe o nome do pet')
    }

    if (!services) {
      return alert('Selecione um serviço')
    }

    //Recuperando o horário selecionado
    const hourSelected = document.querySelector('.hour-selected')

    if (!hourSelected) {
      return alert('Selecione um horário')
    }

    // Recuperando somente a hora
    const [hour] = hourSelected.innerText.split(':')

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, 'hour')

    // Faz o agendamento
    await scheduleNew({ name, pet, services, when })

    // Recarrega os agendamentos
    await schedulesDay()

    // Limpa o input de nome do cliente
    clientName.value = ''
  } catch (error) {
    alert('Ops, algo deu errado!')
    console.log(error)
  }
}
