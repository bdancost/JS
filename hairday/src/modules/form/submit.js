import dayjs from 'dayjs'
import { scheduleNew } from '../../services/schedule-new.js'
import { schedulesDay } from '../schedules/load.js'

const form = document.querySelector('.form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()

    if (!name) {
      return alert('Informe o nome do cliente')
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

    //Gera um ID
    const id = new Date().getTime()

    // Faz o agendamento
    await scheduleNew({ id, name, when })

    // Recarrega os agendamentos
    await schedulesDay()

    // Limpa o unput de nome do cliente
    clientName.value = ''
  } catch (error) {
    alert('Ops, algo deu errado!')
    console.log(error)
  }
}
