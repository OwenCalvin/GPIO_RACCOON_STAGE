import * as path from 'path'
import { createServer } from 'http'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import api from './app'

const host = 'localhost'
const port = 4600
const app = express()
const server = createServer(app)

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/on', api)
app.use('/', express.static('./front'))

// Ignore the host value error
// @ts-ignore
server.listen(port, host, () => {
  console.log(`\nStarted on ${host}:${port}\n`)
})
