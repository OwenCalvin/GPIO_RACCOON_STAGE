import * as gpio from 'rpi-gpio'
import { Router } from 'express'
const router = Router()

let on = false
const pin = 40

gpio.setup(pin, gpio.DIR_OUT, () => {
  console.log(`Pin ${pin} ready`)
})

router.get('/', (req, res) => {
  console.log(on)
  res.send({on: on})
})

router.post('/', (req, res) => {
  on = !on
  console.log(on)
  gpio.write(pin, on, (err) => {
    if (err) {
      console.error(err)
    }
  })
  res.send({on: on})
})

export default router
