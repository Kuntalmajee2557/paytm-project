import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Users() {
    const navigate = useNavigate()
    function sendHandler(){
        navigate('/send')
    }
    return (
        <div className='flex flex-col mx-5'>
            <h2>Users</h2>
            <input type="text" placeholder='Search Users..' className='my-3 border rounded-sm border-slate-400 w-full px-2 py-1'/>
            <div className='flex flex-col gap-3'>

                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center gap-3'>
                        <div className='size-10 rounded-full bg-slate-200 flex justify-center items-center'>
                            <p className=' text-black font-bold text-lg' >U</p>
                        </div>
                        <p className='font-bold'>Kuntal Majee</p>
                    </div>
                    <button onClick={sendHandler} className='bg-black text-white p-2 ml-1 rounded-md'>Send Money</button>
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center gap-3'>
                        <div className='size-10 rounded-full bg-slate-200 flex justify-center items-center'>
                            <p className=' text-black font-bold text-lg' >U</p>
                        </div>
                        <p className='font-bold'>Kuntal Majee</p>
                    </div>
                    <button onClick={sendHandler} className='bg-black text-white p-2 ml-1 rounded-md '>Send Money</button>
                </div>

            </div>
        </div>
    )
}

export default Users