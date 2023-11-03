import { FC } from "react"

interface ShowIncrementProps {
    increment: ( value: number ) => void
}

export const ShowIncrement: FC<ShowIncrementProps> = ({ increment }) => {
    return (
        <button 
            onClick={ () => increment( 5 ) }
            className="btn btn-primary mt-2"
        >
            Incrementar
        </button>
    )
}
