import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [name, setname] = useState("")
    const [lastname, setlastname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")

    const formsub = async (e) => {
        e.preventDefault()
        console.log(name, lastname, password, email)
    }
    return (
        <div>
            <form action="" method="post" onSubmit={formsub}>
                <h1>Signup</h1>
                <input type="text" name="userName" id="userName" placeholder='User Name' required onChange={(e) => setname(e.target.value)} /> <br /><br />
                <input type="text" name="userLastName" id="userLastName" placeholder='User Last Name' required onChange={(e) => setlastname(e.target.value)} /> <br /><br />
                <input type="password" name="userPassword" id="userPassword" placeholder='Password' required onChange={(e) => setpassword(e.target.value)} /> <br /><br />
                <input type="email" name="useremail" id="useremail" placeholder='User Email' required onChange={(e) => setemail(e.target.value)} /> <br /><br />
                <button className='btn'>Signup</button>
            </form>
        </div>
    )
}

export default Signup