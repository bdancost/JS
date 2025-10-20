const newAppointmentBtn = document.getElementById('new-appointment-btn')
const modal = document.getElementById('appointment-modal')
const closeModalBtn = document.getElementById('close-modal')
const firstInput = document.getElementById('tutor')

// Abrir modal
newAppointmentBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')
  firstInput.focus()
})

// Fechar modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
})

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden')
  }
})
