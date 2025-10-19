import dayjs from 'dayjs'
import { apiConfig } from './api-config'

export async function scheduleFetchByDay({ date }) {
  // Faz a requisição
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedules) => {
      dayjs(date).isSame(schedules.when, 'day')
    })

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert('Não foi possível agendar. Tente mais tarde.')
  }
}
