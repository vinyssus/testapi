import React from 'react'
import './DeleteButton.css'
import { AiOutlineMinusCircle } from 'react-icons/ai';

function DeleteButton() {
  return (
    <div className='delete'>
        <div className='icon-minus'>
         <AiOutlineMinusCircle style={{width:'30px',height:'30px',color:'white'}}/>
        </div>
        <div className='text'>
            <p style={{color:'white'}}>Delete</p>
        </div>
   
    </div>
  )
}

export default DeleteButton