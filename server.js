const express = require('express')
const path = require('path')
const app = express()

app.set('path', process.env.PORT || 8080)

// serve static assets normally
app.use(express.static(__dirname))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(app.get('path'))
console.log('Test server listening on port ' + app.get('path'))
