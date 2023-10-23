import React from 'react'
import { AiOutlineCheck, AiFillDelete } from 'react-icons/ai';
import { MdOutlinePending, MdPublishedWithChanges } from 'react-icons/md';

export default function Task(props) {
    return (
        <div className='task'>
            <h3> {
                props.tache.completed ? <AiOutlineCheck /> : <MdOutlinePending />
            }
                {props.tache.description}
            </h3>
            <div className='actionstask'>
                <button onClick={() => props.modifTache(props.index)}><MdPublishedWithChanges /></button>
                <button onClick={() => props.deleteTache(props.index)}><AiFillDelete /></button>
            </div>
        </div>
    )
}
