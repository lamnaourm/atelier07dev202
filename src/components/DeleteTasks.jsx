import React from 'react'
import { AiFillDelete } from 'react-icons/ai';


export default function DeleteTasks(props) {
    return (
        <fieldset className='supression'>
            <legend>Suppression</legend>
            <button onClick={props.deleteAll}><AiFillDelete /> Tous</button>
            <button onClick={props.deleteTermine}><AiFillDelete /> Terminé</button>
            <button onClick={props.deleteEncours}><AiFillDelete /> En cours</button>
        </fieldset>
    )
}
