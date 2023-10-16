import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { MdOutlinePending } from 'react-icons/md';

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        {desricption:'Réviser HTML/CSS', completed:true},
        {desricption:'Réviser mongodb', completed:false},
        {desricption:'Réviser Javascript', completed:false}
    ])

  return (
    <div>
        {taches.map(t => <div className='task'>
            <h3>{t.desricption}</h3>
            {
                t.completed ? <AiOutlineCheck /> : <MdOutlinePending />
            }   
        </div> )}
    </div>
  )
}
