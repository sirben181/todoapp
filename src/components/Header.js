import React from 'react'
import Button from './Button'
import '../index.css';


const Header = ({onAdd,showAdd}) => {
    return (
        <div className="header">
             <h1> Tasks</h1>  
                <Button  
                 text={showAdd ? 'close' :'add'}  
                color={ showAdd ? 'red':'green'} 
                onAdd={onAdd}/>
              

        </div>
    )
}

export default Header
