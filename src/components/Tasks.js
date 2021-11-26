import React from 'react'
import Task from './Task'

const Tasks = ({tasks,delTask,onToggle}) => {
    return (
        <div>
            {tasks.map((task)=>(
                <Task 
                delTask={delTask}
                onToggle={onToggle}
                text={task.data.text}
                day={task.data.day}
               task={task}

                 key={task.id}
                />
            ))}

            
        </div>
    )
}

export default Tasks
