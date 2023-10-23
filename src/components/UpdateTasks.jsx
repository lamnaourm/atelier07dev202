import React from 'react'
import { MdPublishedWithChanges } from 'react-icons/md';

export default function UpdateTasks(props) {
    return (
        <fieldset className='modification'>
            <legend>Modification</legend>
            <button onClick={props.modifTermine}><MdPublishedWithChanges /> Terminé</button>
            <button onClick={props.modifEncours}><MdPublishedWithChanges /> En cours</button>
        </fieldset>
    )
}
