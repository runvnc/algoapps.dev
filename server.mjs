import express from 'express'
const app = express()
const port = 7386
import esc from 'shell-escape'
import child_process from 'child_process'
import {promisify} from 'util'
import fs from 'fs/promises'

const exec = promisify(child_process.exec)

const print = console.log
const printerr = console.error


app.use(express.static('public'))

app.get("/save/:addr/:fname", async (req, res) => {
  let {addr, fname} = req.params
  await fs.writeFile(`data/${addr}/${fname}`, req.query.source, 'utf8')
  res.json({ok:true})
})

app.get("/compile/:addr/:fname", async (req, res) => {
  let {addr, fname} = req.params
  let args = [`data/${addr}/${fname}`]
  args = esc(args)
  if (Array.isArray(args)) args = args.join(' ')
  print({args})
  // this needs to execute in their container
  // `docker run dev_${addr} --exec genpyteal ${args} > `
  let stdout, stderr;
  ({stdout, stderr} = await exec(`genpyteal ${args} > ${args}.pyteal.py`))
  let stdout1 = stdout
  let stderr1 = stderr;
  
  try {
    ({stdout, stderr} = await exec(`python3 ${args}.pyteal.py > ${args}.teal`))
    res.json({stdout1, stderr1, stdout, stderr})
  } catch (e) {
    res.json({pytealError:e.message})
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

