import React from 'react'
import Greeting from '../Greeting'

function AlohaList(props){

    const mapAloha =({firstName, lastName, id})=><Greeting name = {`${firstName} ${lastName}`} isGreeting key={id} id={id}/>

        const {users} = props
    return <section>
        {users.map(mapAloha)}
      </section>
    
}
export default AlohaList