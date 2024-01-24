const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

todo_list = [];
done_list = [];

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

//render indexx page
app.get('/', (req, res) => { 
  res.render('index.ejs') 
})


app.post('/to', (req, res) => {   
	// push think to do inside todo_list
	if (req.body.todo) {
		todo_list.push(req.body.todo);
	 }
	
	// push think done inside "done_list" and delete from "todo_list" 
	if (req.body.element_todo){
		const index = todo_list.indexOf(req.body.element_todo);
		done_list.push(req.body.element_todo)	
		todo_list.splice(index, 1);
	}

	res.render('index.ejs', {todo:todo_list, done:done_list})

})

app.post('/clear', (req, res) => {   	
	
	// delete "done_list"
	if (req.body.clear_list){
		done_list.splice(0,done_list.length)
	}

	res.render('index.ejs', {todo:todo_list})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
