import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from '../../src/09-useContext/HomePage';
import { User, UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en componente <HomePage />', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </ UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' )   
        
    });

    test('debe de mostrar el componente con el usuario', () => {
        
        const user: User = {
            name: 'Guillermo',
            loggedIn: false
        }

        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </ UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( JSON.stringify(user, null, 3) )   
        screen.debug();

    });

});