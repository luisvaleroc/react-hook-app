import React from 'react'

export const TodoListItem = ({ todo: { id, done, desc }, index, handleTogle, handleDelete }) => {
    return (
        <li
            key={id}
            className="list-group-item"
        >
            <p onClick={() => handleTogle(id)} className={`${done && 'complete'}`}>{index + 1}.{desc}</p>

            <button
                onClick={() => handleDelete(id)}
                className="btn btn-danger"
            >
                borrar
                    </button>
        </li>
    )
}
