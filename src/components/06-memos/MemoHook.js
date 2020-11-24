import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter2 } from '../../hooks/useCounter2'


export const MemoHook = () => {


    const { counter, increment } = useCounter2( 5000 );
    const [show, setShow] = useState(true);

   

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />
           

            <p>{ memoProcesoPesado }</p>
            <button 
            className="btn btn-primary"
            onClick={ increment }
            
            >
                +1
            </button>

            <button
            className="btn btn-outline-primary ml-3"
            onClick={ () => {
                setShow( !show );
            } }
            >
                show/hidden { JSON.stringify( show ) }
            </button>

        </div>
    )
}

// <p> { procesoPesado( counter) }</p>

/*
 const procesoPesado = ( iteraciones ) => {
        for(let i = 0; i < iteraciones; i++ ) {
            console.log('ahì vamos');
        }
        return `${ iteraciones } iteraciones realizadas `
    }
*/