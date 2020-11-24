import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCUstomHooks } from '../03-examples/MultipleCUstomHooks'

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCUstomHooks /> }
            
            <button 
            
            onClick={ () => {
                setShow( !show );
            }}
            className="btn btn-primary mt-5">
                Show/Hide
            </button>
        </div>
    )
}
