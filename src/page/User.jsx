import React, { useEffect, useState } from 'react'

const User = () => {
 const [username, setUsername] = useState()
 useEffect(() => {
  const url = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      
    
       setUsername(json)
    } catch (error) {
      console.log("error", error);
     
    }
  };

  fetchData();
}, []);
  return (
   <>
       <div>User</div>
    <h2>{username}</h2>
   </>

    
  )
}

export default User