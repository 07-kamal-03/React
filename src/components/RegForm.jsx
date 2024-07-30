import {useState} from 'react'

export const RegForm = () => {
    const [user, setUser]= useState({
        name:"kamalraj",
        age:"22",
        gender:"male",
        isMarried:false
    })
  return (
    <>
    <table>
        <tr>
            <td>Name</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{user.age}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <td>Marital status</td>
            <td>{user.isMarried ? "Married" : "Unmarried"}</td>
        </tr>
    </table>
    </>
  )
}
