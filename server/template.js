const template = ({ html, style }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR</title>
      ${style}
    </head>
    <body style="margin:0">
      <div id="server">${html}</div>
      <div id="client"></div>

      <script src='/vendors~main.js'></script>
      <script src='/main.js'></script>
    </body>
  </html>
`

export default template