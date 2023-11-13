import React, { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en el componente  <LoginPage />', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage /> 
            </ UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('el boton debe de llamar el setUser()', () => {

        const onSetUserMock = jest.fn();
        const user = { name: 'Guillermo', loggedIn: false }
        
        render( 
            <UserContext.Provider value={{ user: null, onSetUser: onSetUserMock }}>
                <LoginPage /> 
            </ UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        
        expect( onSetUserMock ).toHaveBeenCalledWith(user);

        // screen.debug();

    });

});