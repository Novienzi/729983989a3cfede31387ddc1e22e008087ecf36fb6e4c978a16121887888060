require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const readDir = require('read-dir-deep');
const path = require('path')
const routesPath = path.resolve('routes')
const filePaths = readDir.readDirDeepSync(routesPath)
filePaths.forEach((filePath) => {
  const relativeFilePath = `./${filePath}`
  console.log(`${relativeFilePath} loaded!`);
  const route = require(relativeFilePath)
  app.use(route)
})

// it's always a good idea to make a port variable
// because if you change the port, you also change the console.log()
const port = process.env.PORT
app.listen(port, () => {
  console.log(`The app was listening in http://localhost:${port}`);
})
