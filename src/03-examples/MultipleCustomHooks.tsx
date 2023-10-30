import { Character } from "../types/rickandmorty.types"
import { useFetch, useCounter } from '../hooks';
import { LoadingData, Image } from "./components";

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const url = `https://rickandmortyapi.com/api/character/${ counter }`;

  const { data, isLoading } = useFetch<Character>(url);

  return (
    <>
        <h1>Rick and Morty Characters</h1>
        <hr />

        {
          isLoading 
            ? <LoadingData/>
            : <Image imageUrl={ data?.image } name={ data?.name }/>
        }

        <button 
          className="btn btn-primary mt-2" 
          onClick={increment}
          disabled={ isLoading }>
          Next character
        </button>
    </>
  )

}
