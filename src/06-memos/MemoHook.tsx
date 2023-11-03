import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber: number = 100 ) => {
    for( let i=0; i<iterationNumber; i++ ){
        console.log('Que onda');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(400);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] );

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />
            <h4>{ memorizedValue }</h4>
            <button 
                onClick={ increment }
                className="btn btn-primary mt-2"
            >
                +1
            </button>

            <button
                onClick={ () => setShow( !show ) }
                className="btn btn-outline-primary mt-2"
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}
