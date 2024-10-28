import React from 'react'

function InputBox({label, content, setValue}) {
  return ( 
    <div className='flex flex-col items-start w-72 py-1 gap-1'>
    <label for='inputValue' className='font-bold'>{label}</label>
    <input id='inputValue' type="text" className=' border rounded-sm border-slate-400 w-full px-2 py-1' placeholder={content} onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

export default InputBox