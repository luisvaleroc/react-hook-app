import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleDelete,handleTogle}) => {
    return (
        <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                              
                                 // TodoListItem, index, handleTogle, handleDelete
                                <TodoListItem todo={todo} handleDelete={handleDelete} handleTogle={handleTogle} index={i} key={todo.id} />


                            ))
                        }
                    </ul>
    )
}
