import React, { useState } from 'react'
import AddTask from './AddTask';
import DeleteTasks from './DeleteTasks';
import UpdateTasks from './UpdateTasks';
import StateTasks from './StateTasks';
import ListTasks from './ListTasks';

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Réviser HTML/CSS', completed: true },
        { description: 'Réviser mongodb', completed: false },
        { description: 'Réviser Javascript', completed: true }
    ]);

    const [task, setTask] = useState('');

    const addTache = (e) => {
        if (task.trim() === '') {
            alert('Description de tache vide');
            return
        }

        if (taches.filter(t => t.description.toUpperCase() === task.toUpperCase()).length > 0) {
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
        setTaches(taches => taches.map((t, index) => index !== ind ? t : { ...t, completed: !t.completed }))

    }

    return (
        <div className='content'>
            <div className='actions'>
                <AddTask handleClick={addTache} tache={task} handleChange={(e) => setTask(e.target.value)} />
                <DeleteTasks deleteAll={deleteAll} deleteTermine={deleteTermine} deleteEncours={deleteEncours} />
                <UpdateTasks modifTermine={modifTermine} modifEncours={modifEncours} />
            </div>

            <div>
                <StateTasks taches={taches} />
                <ListTasks taches={taches} modifTache={modifTache} deleteTache={deleteTache}/>
            </div>
        </div>
    )
}
