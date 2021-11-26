import React from 'react'
import {FaTimes} from 'react-icons/fa';

const Task = ({task,delTask,onToggle}) => {

    
    return (
        <div className={`task ${task.reminder ?'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.data.text} <FaTimes style={{color:'red'}} onClick={()=>delTask(task.id)}/></h3>
            <p>{task.data.day}</p>
            
        </div>
    )
}

export default Task
