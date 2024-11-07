import React from 'react'
import  CardStyles from '../styles/Card.module.css'

const Card = ({nombre, color}) => {
  return (
    <div className={CardStyles.card}>
      Hola {nombre}! 
      <br />
      Tu color favorito es <div style={{ color: color , background:color}}>{color}</div>
    </div>
  )
}

export default Card
