import React from 'react'
import { AiOutlineCheck, AiFillDelete } from 'react-icons/ai';
import { MdOutlinePending, MdPublishedWithChanges } from 'react-icons/md';

export default function ListTasks(props) {
    return (
        <div className='list-tasks'>
            {props.taches.map((t, index) => <div key={index} className='task'>
                <h3> {
                    t.completed ? <AiOutlineCheck /> : <MdOutlinePending />
                }
                    {t.description}
                </h3>
                <div className='actionstask'>
                    <button onClick={() => props.modifTache(index)}><MdPublishedWithChanges /></button>
                    <button onClick={() => props.deleteTache(index)}><AiFillDelete /></button>
                </div>

            </div>)}
        </div>
    )
}
