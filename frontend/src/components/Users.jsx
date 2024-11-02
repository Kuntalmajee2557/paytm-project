import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Users({ token }) {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()
    function sendHandler(user) {
        navigate('/send', {state:{token: token, user:user}})
    }
    console.log(filter)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3000/app/v1/user/bulk', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    filter: filter
                }
            })

            console.log(response)
            setUsers(response.data.users || [])
        }
        fetchData()
    }, [filter])

    return (
        <div className='flex flex-col mx-5'>
            <h2 className='font-bold text-2xl'>Users</h2>
            <input type="text" placeholder='Search Users..' className='my-3 border rounded-sm border-slate-400 w-full px-2 py-1' onChange={(e) => setFilter(e.target.value)} />
            <div className='flex flex-col gap-3'>
                {
                    users.map((user, index) =>
                    (
                        <div key={index} className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='size-10 rounded-full bg-slate-200 flex justify-center items-center'>
                                    <p className=' text-black font-bold text-lg' >{user.username.charAt(0).toUpperCase()}</p>
                                </div>
                                <p className='font-bold'>{user.firstName}  {user.lastName}</p>
                            </div>
                            <button onClick={() => sendHandler(user)} className='bg-black text-white p-2 ml-1 rounded-md'>Send Money</button>
                        </div>
                    ))
                }



                {/* <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center gap-3'>
                        <div className='size-10 rounded-full bg-slate-200 flex justify-center items-center'>
                            <p className=' text-black font-bold text-lg' >U</p>
                        </div>
                        <p className='font-bold'>Kuntal Majee</p>
                    </div>
                    <button onClick={sendHandler} className='bg-black text-white p-2 ml-1 rounded-md '>Send Money</button>
                </div> */}

            </div>
        </div>
    )
}

export default Users