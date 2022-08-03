import '../../App.css'
import React from 'react'
import AlohaList from '../AlohaList'
import { Fragment } from 'react'
class AlohaDashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDirectSort: true,
      users: [
        {
          id: 1,
          firstName: 'Vlad',
          lastName: 'Doe'
        },
        {
          id: 2,
          firstName: 'Mike',
          lastName: 'Mohg'
        },
        {
          id: 3,
          firstName: 'Fred',
          lastName: 'Klick'
        },
        {
          id: 4,
          firstName: 'John',
          lastName: 'Rizzen'
        },
        {
          id: 5,
          firstName: 'Rob',
          lastName: 'Gun'
        }
      ]
    }
  }
  sortUser = () => {
    const { users, isDirectSort } = this.state
    const copyArray = [...users]
    this.setState({
      users: copyArray.sort((a, b) =>
        isDirectSort ? b.id - a.id : a.id - b.id
      ),

      isDirectSort: !isDirectSort
    })
  }

  formSubmitHandler = (event) =>{
event.preventDefault()
const {users} = this.state
const [firstName, lastName] = event.target.userName.value.split(' ')
const userObj = {
    firstName,
    lastName,
    id: users.length+1
}

this.setState({
    users: [...users, userObj]
})
  }
  render () {
    const { users } = this.state

    return (
      <Fragment>
        <button onClick={this.sortUser}>Sort users</button>
        <AlohaList users={users} />
        <form onSubmit={this.formSubmitHandler}>
          <input type='text' name='userName' placeholder='Type your name' />
          <button type='submit'>Add user</button>
        </form>
      </Fragment>
    )
  }
}
export default AlohaDashboard
