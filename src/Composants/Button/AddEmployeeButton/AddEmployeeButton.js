import React from 'react'
import {MdAddCircleOutline} from 'react-icons/md'
import './AddEmployeeButton.css'

function AddEmployeeButton() {
  return (
    <div className='addemploye'>
        <div className='addicon'>
           <MdAddCircleOutline style={{width:'30px',height:'30px',color:'white'}}/>
        </div>
        <div className='textadd'>
            <p>Add New Employee</p>
        </div>
      

    </div>
  )
}

export default AddEmployeeButton