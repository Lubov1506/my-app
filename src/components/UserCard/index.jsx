import React from 'react'
import './UserCard.css'

const UserCard = props => {
  const { firstName, lastName, isSelected, callbackSelected, id } = props
  const cN = isSelected ? 'selected' : ''
  const btnHandler = () => callbackSelected(id)
  return (
    <div className={cN} onClick={btnHandler}>
      {firstName} {lastName}
    </div>
  )
}

export default UserCard
