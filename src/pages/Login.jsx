import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState()
    const [pswd, setPswd] = useState()
    const navigate=useNavigate()
    // console.log(login);

    const storeData = () => {
        if (!username || !pswd) {
            alert('please fill the form!')
        } else {
            localStorage.setItem("Name", pswd)
            localStorage.setItem("Password", username)
            navigate('/products')
        }

    }
    return (
        <>
            <div className='flex justify-center'>
                <div className='mt-28 shadow p-5'>
                    <h1 className='text-center text-3xl font-serif'>Welcome</h1>
                    <input onChange={(e) => setUsername(e.target.value)} className='inputbox w-[300px] bord form-control mt-10' type="text" placeholder='username' /><br />
                    <input onChange={(e) => setPswd(e.target.value)} className='inputbox w-[300px] bord form-control mt-1' type="password" placeholder='password' />
                    <div className='flex justify-center'>
                        <button onClick={() => storeData()} className='btn btn-primary mt-8'>Login</button>
                    </div>
                </div>

            </div>
        </>)
}

export default Login