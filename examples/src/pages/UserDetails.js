import React from 'react'
import useUser from '../hooks/useUser'

const UserDetails = () => {

    const user = useUser()
    console.log(user,"user")

  return (
    <div>
        UserDetails : 
        <p>{user?.name?.firstname} {user?.name?.lastname}</p>
        <p>{user?.email}</p>
    </div>
  )
}

export default UserDetails