import React from 'react'

export default function Card(props) {
  return (
    <div className={`shadow-md rounded-md ${props.className}`} onClick={props.onClick} >
      {props.children}
    </div>
  )
}
