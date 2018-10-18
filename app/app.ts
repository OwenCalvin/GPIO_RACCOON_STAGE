import { Router } from 'express'
import * as audioPlay from 'audio-play'
import * as audioLoader from 'audio-loader'
const router = Router()

//#region Hard
let on = false
let audio = null
audioLoader('./song.mp3').then((buffer) => {
  console.log('Song ready')
  audio = audioPlay(buffer, {
    start: 0,
    end: buffer.duration,
    loop: true,
    volume: 1,
    autoplay: false
  })
})
//#endregion

router.get('/', (req, res) => {
  console.log(on)
  res.send({on})
})

router.post('/', async (req, res) => {
  on = !on
  if (on) {
    audio.play()
  } else {
    audio.pause()
  }
  // on ? audio.play() : audio.pause()
  console.log(on)
  res.send({on})
})

export default router
