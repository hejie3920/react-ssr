//这里的node代码。会用babel处理
import React from 'react';
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express()
app.use(express.static('public'))
app.get('/', (req, res) => {
  const content = renderToString(App)
  res.send(`
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>服务端渲染</title>
      </head>
      <body>
        <div id="root" style="background:aliceblue;">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen(3370, () => {
  console.log(`server listen on: http://localhost:3370 `)
})