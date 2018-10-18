const btn = document.querySelector('#btn')
let on = false
const server = axios.create({
  baseURL: 'http://localhost:4600/'
})

function resetButton () {
  btn.disabled = true
  btn.innerHTML = '...'
}

function updateButton (onOff) {
  on = onOff
  btn.disabled = false
  if (on) {
    btn.innerHTML = 'Eteindre'
  } else {
    btn.innerHTML = 'Allumer'
  }
  // btn.innerHTML = on ? 'Eteindre' : 'Allumer'
}

server.get('on').then((res) => {
  updateButton(res.data.on)
})

btn.addEventListener('click', () => {
  resetButton()
  server.post('on').then(res => {
    updateButton(res.data.on)
  })
})
