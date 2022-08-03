import '../../App.css'
import React from 'react'
import Greeting from '../Greeting'

class AlohaDashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isDirectSort: true,
            users : [
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
    sortUser = () =>{
        const {users, isDirectSort} = this.state
        const copyArray = [...users]
        this.setState({
          users: copyArray.sort((a,b)=>
            isDirectSort ? b.id - a.id : a.id - b.id
            ),
        
        isDirectSort: !isDirectSort})
      }
      render () {
        const { users } = this.state
        const liArray  = users.map(({firstName, lastName, id})=>{
          return <li key={id} >
          <Greeting name = {`${firstName} ${lastName}`} isGreeting />
          </li> 
        })
        return (
          <>
          <button onClick={this.sortUser}>Sort users</button>
          <ul>
            {liArray}
          </ul>
              </>
              )
      }
}
export default AlohaDashboard