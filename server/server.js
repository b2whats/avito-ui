import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import createEmotionServer from 'create-emotion-server'
import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import App from './App'
import template from './template'

const port = 3000
const server = express()

server.get('/', (req, res) => {
  let cache = createCache()
  let { extractCritical } = createEmotionServer(cache)

  let { html, css, ids } = extractCritical(
    renderToString(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    )
  )

  let style = `<style data-emotion-css="${ids.join(' ')}">${css}</style>`

  res.send(
    template({
      html,
      style,
    })
  )
})

server.listen(port)
console.log(`Serving at http://localhost:${port}`)