import './libs/dayjs.js'

// Módulos
import './modules/form/date-change.js'
import './modules/schedules/cancel.js'
import './modules/schedules/load.js'
import './modules/form/submit.js'
import { hoursLoad } from './modules/form/hours-load.js'

document.addEventListener('DOMContentLoaded', () => {
  // Carrega horários iniciais
  hoursLoad({ date: new Date(), dailySchedules: [] })
})
