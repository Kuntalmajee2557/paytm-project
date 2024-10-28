import React from 'react'

function SendMoney() {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className='bg-white h-1/2 w-1/3 rounded-lg flex flex-col p-14 justify-between drop-shadow-2xl'>
        <div>
          <h1 className='text-center text-5xl font-bold'>Send Money</h1>
        </div>
        <div className='flex flex-col justify-end gap-2'>
          <div className='flex flex-row items-center gap-3 '>
            <div className='size-14 rounded-full bg-green-500 flex justify-center items-center'>
              <p className=' text-white font-bold text-3xl' >U</p>
            </div>
            <p className='text-4xl font-bold'>Kuntal Majee</p>
          </div>

          <label for='amount' className='font-bold text-xl text'>Amount (in RS)</label>
          <input id='amount' type="text" className=' border rounded-sm border-input w-full px-2 py-1' />
          <button className='bg-green-500 text-white p-2 m-1 rounded-md mt-4 '>Initiate Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default SendMoney