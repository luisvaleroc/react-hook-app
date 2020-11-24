import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForn = () => {
    

const [formState, setFormState] = useState({
    name: '',
    email: ''
});

const {name, email} = formState;

    useEffect(() => {
        console.log('hey');
       // console.log(name);
    }, []); // [] solo una vez   
    

    useEffect(() => {

    },[formState]);    

    useEffect(() => {
 
     },[email]);    


    const handleInputChange = ({target}) => { //(e)
       //console.log(e.target.name);
     
       setFormState({
           ...formState,
            [target.name]: target.value,
            
       })
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className="form-group">
                <input
                typr="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= { name }
                onChange={ handleInputChange } 
                />
            
            </div>
            <div className="form-group">
                <input
                typr="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= { email }
                onChange={ handleInputChange } 
                />
            
            </div>

            {(name === '123') && <Message />
            }

        </>
    )
}
