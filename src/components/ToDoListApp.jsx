import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { MdOutlinePending, MdAdd } from 'react-icons/md';
import { BsFillBarChartFill } from 'react-icons/bs';

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Réviser HTML/CSS', completed: true },
        { description: 'Réviser mongodb', completed: false },
        { description: 'Réviser Javascript', completed: true }
    ])
    const [task, setTask] = useState('');

    const addTache = (e) => {
        if (task.trim() === '') {
            alert('Description de tache vide');
            return
        }

        if (taches.filter(t => t.desricption.toUpperCase() === task.toUpperCase()).length > 0) {
            alert('Tache existe deja');
            return
        }

        setTaches(taches => [...taches, { description: task, completed: false }]);
        setTask('')
        document.getElementById('task').focus()
    }

    return (
        <div className='content'>
            <div>
                <fieldset className='ajout'>
                    <legend>Ajout</legend>
                    <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)} placeholder='saisir descrition ...' />
                    <button onClick={addTache}><MdAdd /> Add</button>
                </fieldset>
            </div>
            <div>
                <div className='info'>
                    <BsFillBarChartFill />
                    <div>
                        {taches.length} Taches <br />
                        {taches.filter(t => t.completed).length} Terminé <br />
                        {taches.filter(t => !t.completed).length} En cours
                    </div>
                </div>
                <div className='list-tasks'>
                    {taches.map((t, index) => <div key={index} className='task'>
                        <h3>{index + 1} - {t.desricption}</h3>
                        {
                            t.completed ? <AiOutlineCheck /> : <MdOutlinePending />
                        }
                    </div>)}
                </div>
            </div>
        </div>
    )
}
