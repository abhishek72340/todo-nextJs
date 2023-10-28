import React from 'react'
import {useSelector} from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
import {removeUser} from '../redux/slice'
import {useDispatch} from 'react-redux';

type RootState = {
  user:any;
};
const DisplayUsers:React.FC = () => {
  const users:(string | number)[]=useSelector((state:RootState)=>state.user)
const dispatch=useDispatch();
  const removeHandler=()=>{
dispatch(removeUser())
  }
  return (
    <div className={'w-[90vw] h-[15rem] border border-sky-400 p-5'}>
  <span className={'text-xl text-sky-400 italic'}>Display Users</span>
      {
        users.map((user,index)=>{
          return(
            <div key={index}>
 <span>{user.name}<AiOutlineDelete onClick={()=>dispatch(removeUser(user.id))} className={'inline cursor-pointer'}/></span>

            </div>
          )
        })
      }
    
    </div>
  )
}

export default DisplayUsers




