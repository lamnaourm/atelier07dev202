import React from 'react'
import { MdAdd } from 'react-icons/md';



export default function AddTask(props) {
    return (
        <fieldset className='ajout'>
            <legend>Ajout</legend>
            <input type="text" name="task" id="task" value={props.tache} onChange={props.hancleChange} placeholder='saisir descrition ...' />
            <button onClick={props.handleClick}><MdAdd /> Add</button>
        </fieldset>
    )
}
