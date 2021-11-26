import React from 'react'


const Button = ({color,text,onAdd}) => {
    return (
        <div>
            <button style={{background:color}}  className="btn"
            onClick={onAdd}>{text}</button>
        </div>
    )
}

export default Button
