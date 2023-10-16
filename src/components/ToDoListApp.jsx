import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { MdOutlinePending, MdAdd } from 'react-icons/md';

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        {desricption:'Réviser HTML/CSS', completed:true},
        {desricption:'Réviser mongodb', completed:false},
        {desricption:'Réviser Javascript', completed:false}
    ])
    const [task, setTask] = useState('');

    const addTache = (e) => {
        if(task.trim()==='')
            alert('Description de tache vide');
        else 
            setTaches(taches => [...taches, {desricption:task, completed:true }]);
    }

  return (
    <div className='content'>
        <div>
            <fieldset className='ajout'>
                <legend>Ajout</legend>
                <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)} placeholder='saisir descrition ...'/>
                <button onClick={addTache}><MdAdd /> Add</button>
            </fieldset>
        </div>

        <div className='list-tasks'>
            {taches.map((t, index) => <div key={index} className='task'>
                <h3>{t.desricption}</h3>
                {
                    t.completed ? <AiOutlineCheck /> : <MdOutlinePending />
                }   
            </div> )}
        </div>
    </div>
  )
}
