import React from 'react'
import { BsFillBarChartFill } from 'react-icons/bs';

export default function StateTasks(props) {
    return (
        <div className='info'>
            <BsFillBarChartFill />
            <div>
                {props.taches.length} Taches <br />
                {props.taches.filter(t => t.completed).length} Terminé <br />
                {props.taches.filter(t => !t.completed).length} En cours
            </div>
        </div>
    )
}
