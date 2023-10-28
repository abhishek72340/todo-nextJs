'use client'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/slice'
const AddUsers = () => {
 const [input,setInput]=useState<string>('')

 const dispatch:any=useDispatch();
 const submitHandler=(event)=>{
  event.preventDefault();
  input.trim()?dispatch(addUser(input)):null
  setInput('')
 }
  return (
    <div className={'w-[90vw] border border-orange-400 h-[15rem] p-5 flex flex-col space-y-5'}>
         <h1 className={'text-xl text-orange-400 italic'}>Add Users</h1>

         <form  onSubmit={submitHandler} className={'flex flex-col space-y-5 '} >
         <input type='text' placeholder='add user' value={input} onChange={(e)=>setInput(e.target.value)} className={'border border-black outline-none w-72 h-8'}/>
         <input type='submit' value='add user' className={'border border-gray-200 bg-gray-200 w-72 cursor-pointer' }/>
         </form>
    </div>
  ) 
}

export default AddUsers;