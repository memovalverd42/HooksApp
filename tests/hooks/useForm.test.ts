import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';
import { ChangeEvent } from "react";

interface User {
    name: string;
    age: number
}

describe('Pruebas en el useForm()', () => {

    const user: User = {
        name: "Guillermo",
        age: 23
    }
    
    test('debe de regresar los valores iniciales', () => {
        

        const { result } = renderHook( () => useForm<User>(user) );
        
        expect( result.current ).toEqual({
            name: user.name,
            age: user.age,
            formState: user,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });

    });

    test('debe de cambiar el nombre del formulario', () => {
        
        const newName = 'ValverGONE';

        const { result } = renderHook( () => useForm<User>(user) );
        const { onInputChange } = result.current;

        act(() =>{
            onInputChange({ target: {name: 'name', value: newName} } as ChangeEvent<HTMLInputElement>)
        });

        expect( result.current.name ).toBe( newName );
        expect( result.current.formState.name ).toBe( newName );

    });

    test('debe de realizar el reset del formulario', () => {
        
        const newName = 'ValverGONE';

        const { result } = renderHook( () => useForm<User>(user) );
        const { onInputChange, onResetForm } = result.current;

        act(() =>{
            onInputChange({ target: {name: 'name', value: newName} } as ChangeEvent<HTMLInputElement>)
            onResetForm();
        });

        expect( result.current.name ).toBe( user.name );
        expect( result.current.formState.name ).toBe( user.name );

    });

});