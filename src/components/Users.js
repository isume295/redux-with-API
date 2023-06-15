import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
const {users, isLoading, error } = useSelector((store) => store.user);

if(isLoading === true){
    return <h2>loading....</h2>
}
if(error !== ""){
    return <h2>{error}</h2>
}
  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.email}>{user.name.first} {user.name.last}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users