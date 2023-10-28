import React from 'react'
import {useSelector} from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
import {removeUser} from '../redux/slice'
import {useDispatch} from 'react-redux';
const DisplayUsers:React.FC = () => {
  const users:string=useSelector((state:(string | number)[])=>state.user)
const dispatch:any=useDispatch();
  const removeHandler=(event):void=>{
dispatch(removeUser())
  }
  return (
    <div className={'w-[90vw] h-[15rem] border border-sky-400 p-5'}>
  <span className={'text-xl text-sky-400 italic'}>Display Users</span>
      {
        users.map((user)=>{
          return(
            <div key={user.id}>
 <span>{user.name}<AiOutlineDelete onClick={()=>dispatch(removeUser(user.id))} className={'inline cursor-inline'}/></span>

            </div>
          )
        })
      }
    
    </div>
  )
}

export default DisplayUsers




