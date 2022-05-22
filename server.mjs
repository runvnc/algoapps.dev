import express from 'express'
const app = express()
const port = 7386
import esc from 'shell-escape'
import child_process from 'child_process'
import {promisify} from 'util'

const exec = promisify(child_process.exec)

const print = console.log
const printerr = console.error


app.use(express.static('public'))


app.get("/compile/:addr/:fname", async (req, res) => {
  let {addr, fname} = req.params
  let args = [`data/${addr}/${fname}`]
  args = esc(args)
  if (Array.isArray(args)) args = args.join(' ')
  print({args})
  // this needs to execute in their container
  // `docker run dev_${addr} --exec genpyteal ${args} > `
  let {stdout, stderr} = await exec(`genpyteal ${args} > ${args}.pyteal.py`)
  res.json({stdout, stderr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

