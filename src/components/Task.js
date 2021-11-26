import React from 'react'
import {FaTimes} from 'react-icons/fa';

const Task = ({text,day,delTask,onToggle,task}) => {

    
    return (        <div className={`task ${task.reminder ?'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{text} <FaTimes style={{color:'red'}} onClick={()=>delTask(task.id)}/></h3>
            <p>{day}</p>
            
        </div>
    )
}

export default Task
