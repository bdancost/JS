/* global dayjs */
import { apiConfig } from './api-config.js'

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Se a requisição falhar (ex: 404, 500)
    if (!response.ok) {
      throw new Error(`Erro ao buscar agendamentos: ${response.status}`)
    }

    const data = await response.json()

    // Filtra os agendamentos do dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, 'day'))

    return dailySchedules
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error)
    alert('Não foi possível carregar os agendamentos. Tente mais tarde.')

    // ✅ Retorna array vazio para evitar quebra no forEach
    return []
  }
}
