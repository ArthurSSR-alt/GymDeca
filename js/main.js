const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const toastTrigger2nd = document.getElementById('liveToast2ndBtn')
const toastLiveExample2nd = document.getElementById('liveToast2nd')

const toastTrigger3rd = document.getElementById('liveToast3rdBtn')
const toastLiveExample3rd = document.getElementById('liveToast3rd')

const toastTrigger4th = document.getElementById('liveToast4thBtn')
const toastLiveExample4th = document.getElementById('liveToast4th')

const toastTrigger5th = document.getElementById('liveToast5thBtn')
const toastLiveExample5th = document.getElementById('liveToast5th')

const toastTrigger6th = document.getElementById('liveToast6thBtn')
const toastLiveExample6th = document.getElementById('liveToast6th')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger2nd) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2nd)
  toastTrigger2nd.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger3rd) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample3rd)
  toastTrigger3rd.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger4th) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample4th)
  toastTrigger4th.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger5th) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample5th)
  toastTrigger5th.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger6th) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample6th)
  toastTrigger6th.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

