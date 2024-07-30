import { useState } from 'react'

const formHandler = () => {
    const [user, setUser] = useState({fname:"kamal",lname:"raj",age:22});
    function changeHandler(e){
        setUser ({...user,[e.target.name] : e.target.value})
    }
  return (
    <><div>
{user.fname}{user.lname}{user.age}</div>
      <input type="text" name="fname" onChange={changeHandler} placeholder='enter fname'/>
      <input type="text" name="lname" onChange={changeHandler} placeholder='enter lname'/>
      <input type="text" name="age" onChange={changeHandler} placeholder='enter age'/>
    </>
  )
}

export default formHandler
