import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

   /* const increment = () => {
        setCounter( counter + 1);
    }*/

    const increment = useCallback( (num) => {

        //setCounter(counter + 1);
        setCounter(c => c + num);

    }, [setCounter] )

    return (
        <div>
            <h1>useCallBack Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment } />
        </div>
    )
}
