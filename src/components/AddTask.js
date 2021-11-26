import React, { useState } from 'react'
const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(false)
    const onSubmit=(e)=>{
      e.preventDefault();
      if(!text){
          alert('Pliz add task')
          return
      }
     onAdd({text,day,reminder})
      setText('')
      setDay('')
      setReminder(false)
    }
    


    return (
        <div className="add-form">
            <form action="" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="Task">Task</label>
                    <input type="text" placeholder="Add Task" value={text} 
                    onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="Task">Day & Time</label>
                    <input type="text" placeholder="Add day" value={day} 
                    onChange={(e)=>setDay(e.target.value)}/>
                </div>
                <div className="form-control form-control-check">
                    <label htmlFor="Task">set reminder</label>
                    <input type="checkbox"  value={reminder} 
                    checked={reminder}
                    onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                </div>
                <button className="btn-block btn" type="submit"> Submit</button>
            </form>
            
        </div>
    )
}

export default AddTask
