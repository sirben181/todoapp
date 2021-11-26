
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc  } from "firebase/firestore"; 
import AddTask from './components/AddTask'; 
import db from './components/firebase'

import Login from './components/Login';

function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([])


  

  //adding task
  const addTask= (task)=>{
   const newTask={...task}
   setTasks([...tasks,newTask])
  getTasks(tasks)
  }
   const getTasks=async(tasks)=>{
    try{const docRef = await addDoc(collection(db, "tasks"), {
      texto: tasks.text,
      day: tasks.day,
     reminder:tasks.reminder
    });
    console.log('document written with id:',docRef.ID)
  }catch(error){
    console.error('error adding document:',error)
  } 
   }
    
  
  
  //deleteTask
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}:task))
  }
  useEffect(async()=>{
    const querySnapshot = await getDocs(collection(db, "tasks"));
    setTasks(querySnapshot.docs.map(doc => ({
      // console.log(`${doc.id} => ${doc.data()}`);
    id:doc.id,
    data:doc.data()
     
    })));
    
  },[])
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
  );
}

export default App;
