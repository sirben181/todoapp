
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask'; 
import {auth} from './components/firebase.js'
import { collection, addDoc } from "firebase/firestore"; 
import db from './components/firebase'
import Login from './components/Login';

const App=()=> {
  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([])
  //adding task
  const addTask=(task)=>{
   const id=Math.floor(Math.random()*10000)+1
   const newTask={id,...task}
   setTasks([...tasks,newTask])
  
    const docRef = await addDoc(collection(db, "tasks"), {
      text:tasks.text,
      day:tasks.day,
      reminder:false
    });
  
    console.log("Document written with ID: ", docRef.id);
  
  //deleteTask
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}:task))
  }
  const user=null
  
  return (
    <div className="app">
      {(!user===null) ?(<h1><Login/></h1>):( 
         <div className="container">
         <Header showAdd={showAddTask}
         onAdd={()=>setShowAddTask(!showAddTask)}/>
         { showAddTask && <AddTask onAdd={addTask}/>}
         {(tasks.length> 0)? (<Tasks tasks={tasks}
         delTask={deleteTask}
         onToggle={toggleReminder}/>)
        :('No Tasks to show')}
      </div>

      )}
    
    </div>
  )}


export default App;
