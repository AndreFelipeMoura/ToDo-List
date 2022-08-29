import { useState } from "react";
import { FaBeer } from 'react-icons/fa';
import Header from "../header/Header";


const List = () => {
const [list, setList] = useState([]);
const [newTask, setNewTask] = useState("");
const [newDesc, setNewDesc] = useState("");


function addNewTask () {
const task = {
id: Math.random(),
title: newTask,
desc: newDesc,
isComplet: false,
};

if (task.title === "" || task.desc === "") {
return alert("Preencha os dois campos para concluir!");
}

setList([...list, task ]);
setNewTask("");
setNewDesc("");
}

function deleteTask(id) {
const filterTasks = list.filter((task) => task.id !== id);
setList(filterTasks);
}

function completeTask(id) {
const newTasks = list.map((task) =>
task.id === id ? {
...task,
isComplete: !task.isComplete,
}
: task
);
setList(newTasks);

}


return (
<>
  <Header />
  <FaBeer />
  <div className="container">
    <section className="list">
      <header>
        <h2 className="titulo-nova-tarefa"> NOVA TAREFA </h2>

        <div className="input-add">
          <p>Titulo</p>
          <input placeholder=" Adicione Nova Tarefa" type="text" onChange={(e)=> {
          setNewTask(e.target.value);
          }}
          value={newTask}
          />
          <p> Descrição: </p>
          <textarea onChange={(e)=> {
                  setNewDesc(e.target.value);
                }}
                value={newDesc}/>


                    <button type="submit" className="tarefa-add" onClick={addNewTask}> ADICIONAR TAREFA </button>
                    </div>
            
          </header>

            
        
    </section>
    <section>
        <div className="tarefas">
        <h2 className="titulo-tarefas"> SUAS TAREFAS </h2>
                   <ul>
                        {list.map((task) => (

                        
                        <li key={task.id}>
                            <div className={task.isComplete ? "completed" : ""}>
                                <label>
                                    <input className="checkbox" type="checkbox"
                                     checked={task.isComplete}
                                     onClick={() => completeTask(task.id)}
                                     readOnly  />
                                </label>
                                <p> OK! </p>
                                <p> Título: {task.title} </p>
                                <p className="desc"> Descrição: {task.desc} </p>
                                
                                
                                
                                <button className="delete-task" type="button" onClick={() => deleteTask(task.id)}> Excluir Tarefa </button>
                            </div>
                        </li>
                        ))};
                    </ul>

                    
                   
                
                   
                    

                    
            
        </div>
    

    </section>

    </div>
    </>
     
    )}
                        


export default List;