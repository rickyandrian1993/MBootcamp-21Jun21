import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const UserDetail = () => {
  const puid  = useParams();
  const [ userDetail, setUserDetail ] = useState(null);
  console.log(puid, "uid");

  // useEffect(() => {
  //   fetch(`https://randomuser.me/api/?uid=${puid}`)
  //   .then(response => response.json())
  //   .them(data => {
  //     console.log(data);
  //   })
  // })
  
  return (
    <div>
      <h1>Detail User</h1>
    </div>
  )
}

export default UserDetail;
