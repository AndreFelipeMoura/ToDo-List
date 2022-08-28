import React from "react";
import Header from "../header/Header";



function List() {
return(
<>
    <Header />
    <div className="container">
        <section className="list">

            <h2 className=""> NOVA TAREFA </h2>
            <form className="form-input-add">
                <div>
                    <input placeholder='adicione nova tarefa' type="text" />
                    <p> Descrição: </p>
                    <textarea />


                    <button> ADICIONAR TAREFA </button>
                    </div>
            </form>
        
    </section>
    <section>
    <h2 className=""> TAREFAs </h2>
            <form className = "form-input-task">
                <div>
                    <ul>
                        <li>
                            <div>
                                <label>
                                    <input></input>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <input type="checkbox"  />
                    <p> Descrição: </p>
                    <textarea />
                    

                    </div>
            </form>

    </section>

    </div></>
     
    )
}

export default List;