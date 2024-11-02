import React from 'react'

function Appbar({user}) {
    const avatar = user.username.charAt(0).toUpperCase() || "U"
    return (
        <div className='flex flex-row justify-between h-14'>
            <h1 className='text-4xl flex justify-center items-center font-bold'>PayTM App</h1>
            <div className='flex justify-center items-center gap-3'>
                <p className='text-lg font-bold'>Hello</p>
                <div className='size-14 rounded-full bg-slate-200 flex justify-center items-center'>
                    <p className=' text-black font-bold text-3xl' >{avatar}</p>
                </div>

            </div>
        </div>
    )
}

export default Appbar