import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { MdOutlinePending, MdAdd } from 'react-icons/md';
import { BsFillBarChartFill } from 'react-icons/bs';

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        {desricption:'Réviser HTML/CSS', completed:true},
        {desricption:'Réviser mongodb', completed:false},
        {desricption:'Réviser Javascript', completed:true}
    ])
    const [task, setTask] = useState('');

    const addTache = (e) => {
        if(task.trim()==='')
            alert('Description de tache vide');
        else 
            setTaches(taches => [...taches, {desricption:task, completed:false }]);
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
                    <h3>{index+1} - {t.desricption}</h3>
                    {
                        t.completed ? <AiOutlineCheck /> : <MdOutlinePending />
                    }   
                </div> )}
            </div>  
        </div>
    </div>
  )
}
