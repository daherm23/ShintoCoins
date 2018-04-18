const express = require('express');
const app = express();
const port = 8000;

var path = require('path')
app.use(express.static(path.join(__dirname+'/angular/dist')));

app.all('*', (req, res, next)=>{
	res.sendFile(path.resolve("./angular/dist/index.html"))
})
app.listen(port, function(){
	console.log("Listening on port: ", port)
})