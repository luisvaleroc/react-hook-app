import React, {useEffect, useState} from 'react'

export const Message = () => {



    const [coords, setcoords] = useState({x: 0, y: 0});
    const { x,y } = coords;
    useEffect(() => {

        const mouseMove = (e) => {
            //console.log(e);
            const coords = {x: e.x, y: e.y};
            setcoords( coords );
            console.log(coords);
        }


        //console.log('componente montado')
        window.addEventListener("mousemove", mouseMove);
        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres  genial</h3>
            <p>
                x:{x} y y:{y}
            </p>
        </div>
    )
}


/*

        //console.log('componente montado')
        window.addEventListener("mousemove", (e) => {
            //console.log(e);
            const coors = {x: e.x, y: e.y};
            console.log(coors);
        });

        */