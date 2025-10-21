import MicroModal from 'micromodal'

MicroModal.init({
  openTrigger: 'data-micromodal-trigger',
  closeTrigger: 'data-micromodal-close',
  disableScroll: true,
  awaitCloseAnimation: true,
})

// botão abrir modal
const newAppointmentBtn = document.getElementById('new-appointment-btn')
const firstInput = document.getElementById('tutor')

newAppointmentBtn.addEventListener('click', () => {
  MicroModal.show('appointment-modal', {
    onShow: () => firstInput.focus(),
  })
})
