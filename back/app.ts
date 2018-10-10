import * as gpio from 'rpi-gpio'
import { Router } from 'express'
const router = Router()

let on = false

const GPIO_3 = gpio.setup(3, gpio.DIR_OUT, () => {
  console.log('GPIO ready')
})

function setGPIO (onOff) {
  gpio.set()
}

router.get('/', (req, res) => {
  console.log(on)
  res.send({on: on})
})

router.post('/', (req, res) => {
  on = !on
  console.log(on)
  res.send({on: on})
})

export default router