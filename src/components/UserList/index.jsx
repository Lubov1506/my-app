import React, { Component } from 'react'
import UserCard from '../UserCard'
import UserSelectedList from '../UserSelectedList'

const userDB = [
  {
    id: 1,
    firstName: 'Gary',
    lastName: 'Grey'
  },
  {
    id: 2,
    firstName: 'Rob',
    lastName: 'Wil'
  },
  {
    id: 3,
    firstName: 'Mivert',
    lastName: 'Lokins'
  },
  {
    id: 4,
    firstName: 'Shon',
    lastName: 'Chan'
  },
  {
    id: 5,
    firstName: 'Kris',
    lastName: 'Simon'
  }
]
class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: userDB.map(user=> ({...user,isSelected:false}))

    }
  }
  mapUsers = ({firstName, lastName, id, isSelected}) => (
    <UserCard
      firstName={firstName}
      lastName={lastName}
      id={id}
      key={id}
      isSelected={isSelected}
      callbackSelected={this.setSelected}
    />
  )
  setSelected = (id)=>{
    const {users} = this.state;
    const copyUsers = [...users]

    this.setState({
        users:   copyUsers.map((user)=>({
            ...user,
            isSelected: user.id === id ? !user.isSelected : user.isSelected
        }))
    })
  }
  selectedList=()=>{
    const {users} = this.state;
    const filtered = users.filter((user)=>user.isSelected
    )
    this.setState({
        users: filtered
    })
  }
  render () {
    const { users } = this.state
    return <>
    <UserSelectedList selectedListCallback={this.selectedList}/>
    <ul>{users.map(this.mapUsers)}</ul>
    </>
  }
}

export default UserList
