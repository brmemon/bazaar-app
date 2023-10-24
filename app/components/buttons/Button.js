import React from 'react'
// import "../Navbars./navbar.css"

const Button = ({text,className}) => {
  return (
    <div>
      <button className={className}> {text} </button>
    </div>
  )
}

export default Button
