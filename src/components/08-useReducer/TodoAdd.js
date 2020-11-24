import React from 'react'
import { useForm } from '../../hooks/useForm'



export const TodoAdd = ({handleAddTodo}) => {
    
    const [{ description, id }, handleInputChange, reset] = useForm({
        description: '' 
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1)
        {
            return;
        }
    

        const newTodo = {
            id: new Date().getTime(),
            //desc: 'Nueva tarea',
            desc: description,
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }

       // dispatch(action); cambia
       handleAddTodo(newTodo);
        reset();

    }    
    return (
        <>
           <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className=" btn btn-outline-primary mt-1 btn-block">
                            Agregar
                        </button>



                    </form>  
        </>
    )
}
