import { apiConfig } from './api-config.js'

export async function scheduleNew({ name, when }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, when }),
    })

    if (!response.ok) {
      throw new Error('Erro ao criar agendamento')
    }

    const data = await response.json()
    return data // retorna o agendamento com o ID verdadeiro
  } catch (error) {
    console.log(error)
    alert('Não foi possível criar o agendamento.')
  }
}
