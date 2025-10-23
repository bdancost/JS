export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available')
  hours.forEach((hour) => {
    hour.addEventListener('click', (event) => {
      // Remove seleção de todos
      hours.forEach((h) => h.classList.remove('hour-selected'))
      // Adiciona seleção no clicado
      event.currentTarget.classList.add('hour-selected')
    })
  })
}
