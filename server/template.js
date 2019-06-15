const template = ({ html, style }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR</title>
      ${style}
    </head>
    <body style="margin:0">
      <div id="app">${html}</div>
    </body>
  </html>
`

export default template