const express = require("express");

const tasks=  [
    {
      "id": 1,
      "title": "Buy groceries",
      "description": "Buy milk, eggs, and bread",
      
    },
    {
      "id": 2,
      "title": "Finish project",
      "description": "Complete the documentation and submit the project",
      
    }
  ]
const app= express();
const routes = require('./routes');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', routes);
app.listen(process.env.PORT || 3001,()=>{
    console.log(`run on ${process.env.PORT || 3001}`);
});

app.get("/tasks",(req,res)=>{
 
  res.send(tasks);
})

app.get('/tasks/:id',(req,res)=>{
   console.log(req.params);
   const {id}= req.params;
   const task = tasks.find((item)=> item.id===id);
   res.send(task);

})

app.post("/tasks",(req,res)=>{
    console.log(req.body);
    const {task}=req.body;
    const newTask={
        id:tasks.length + 1,
        title:'clean the house' ,
        description:'floor and desk'

    }
    tasks.push(newTask);
    res.json(tasks);
})

app.put("/tasks/:id",(req,res)=>{
    const {id} = req.params;
    const {title,description}=req.body
    const index= tasks.findIndex((item)=> item.id==id);

    tasks[index]={...tasks[index],title,description};
    res.json(tasks);
})

app.delete("/tasks/:id",(req,res)=>{
    const {id} = req.params;
    const index= tasks.findIndex((item)=> item.id==id);
    tasks.splice(index,1);
    res.json(tasks)

})