import React, { useState } from 'react'
import { AiOutlineCheck, AiFillDelete } from 'react-icons/ai';
import { MdOutlinePending, MdAdd, MdPublishedWithChanges } from 'react-icons/md';
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

    const deleteAll = () => {
        setTaches([])
    }

    const deleteTermine = () => {
        setTaches(taches => taches.filter(t => !t.completed))
    }

    const deleteEncours = () => {
        setTaches(taches => taches.filter(t => t.completed))
    }

    const modifTermine = () => {
        setTaches(taches => taches.map(t => ({ ...t, completed: true })))
    }

    const modifEncours = () => {
        setTaches(taches => taches.map(t => ({ ...t, completed: false })))
    }

    const deleteTache = (ind) => {
        setTaches(taches => taches.filter((t, index) => index !== ind))
    }

    const modifTache = (ind) => {
        setTaches(taches => taches.map((t, index) => index !== ind? t: {...t, completed:!t.completed}))
        
    }

    return (
        <div className='content'>
            <div className='actions'>
                <fieldset className='ajout'>
                    <legend>Ajout</legend>
                    <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)} placeholder='saisir descrition ...' />
                    <button onClick={addTache}><MdAdd /> Add</button>
                </fieldset>
                <fieldset className='supression'>
                    <legend>Suppression</legend>
                    <button onClick={deleteAll}><AiFillDelete /> Tous</button>
                    <button onClick={deleteTermine}><AiFillDelete /> Terminé</button>
                    <button onClick={deleteEncours}><AiFillDelete /> En cours</button>
                </fieldset>

                <fieldset className='modification'>
                    <legend>modification</legend>
                    <button onClick={modifTermine}><MdPublishedWithChanges /> Terminé</button>
                    <button onClick={modifEncours}><MdPublishedWithChanges /> En cours</button>
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
                        <h3> {
                                t.completed ? <AiOutlineCheck /> : <MdOutlinePending />
                            }  
                         {t.description}
                        </h3>
                        <div className='actionstask'>
                            <button onClick={() => modifTache(index)}><MdPublishedWithChanges /></button>
                            <button onClick={() => deleteTache(index)}><AiFillDelete /></button>
                        </div>

                    </div>)}
                </div>
            </div>
        </div>
    )
}
