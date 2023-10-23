import React from 'react'
import Task from './Task';

export default function ListTasks(props) {
    return (
        <div className='list-tasks'>
            {props.taches.map((t, index) =>
                <Task key={index} index={index} tache={t} modifTache={props.modifTache} deleteTache={props.deleteTache}/>
                )}
        </div>
    )
}
