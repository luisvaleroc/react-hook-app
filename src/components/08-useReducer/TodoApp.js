import React, { useEffect, useReducer } from 'react'
//import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


/*const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]
*/

const init = () => {
    

    return JSON.parse(localStorage.getItem('todos')) || [];
   /* return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];*/
}

export const TodoApp = () => {


//    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
   
   // const [formValues, handleInputChange]
   /*const [{ description, id }, handleInputChange, reset] = useForm({
        description: '' 
    })*/


    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    console.log(todos)
   // console.log(description)

  /*  const handleSubmit = (e) => {
        
        
        
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

        dispatch(action);
        reset();
    }*/

    const handleDelete = (todoId) => {
        console.log(todoId)
        const action = {
            type: 'delete',
            payload: todoId
        }
        
        dispatch(action)
    } 

    const handleTogle = (todoId) => {
        
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    //optimizando
    const handleAddTodo = ( newTodo ) => {
      

        dispatch({
            type: 'add',
            payload: newTodo
        });
        
    }
    
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                {/* TodoList, todos,*/ }
                    <TodoList todos={todos}  handleDelete={handleDelete} handleTogle={handleTogle} />
                </div>
                <div className="col">
                   <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>

            </div>
        </div>
    )
}



/*
  <ul className="list-group list-group-flush">
                        {
                            todos.map(({ id, desc, done }, i) => (
                              
                                 // TodoListItem, index, handleTogle, handleDelete
                                <li
                                    key={id}
                                    className="list-group-item"
                                >
                                    <p onClick={() => handleTogle(id)} className={ `${done && 'complete'}`}>{i + 1}.{desc}</p>

                                    <button
                                        onClick={() => handleDelete(id)}
                                        className="btn btn-danger"
                                    >
                                        borrar
                    </button>
                                </li>


                            ))
                        }
                    </ul>*/