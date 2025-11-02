import { apiConfig } from './api-config.js'

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Erro ao cancelar agendamento')
    }
  } catch (error) {
    console.log(error)
    alert('Não foi possível cancelar o agendamento. Tente mais tarde.')
  }
}
