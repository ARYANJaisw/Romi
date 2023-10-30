const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')

if (toastTrigger2) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')

if (toastTrigger3) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
  toastTrigger3.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


