const express=require('express')
const app=express()
const port=8000

 app.get('/', (req,res) => {
    res.send(`
    <!doctype html>
    <html>
    <head>
    <title>Node.js</title>
    </head>
    <body>
<h3>Welcome to Node.js</h3>
<b>Node.js runs JavaScript on Server-Side</b>
 </body>
</html>
`)
})
app.listen(port), ()=>console.log('Server listening on port '+port)