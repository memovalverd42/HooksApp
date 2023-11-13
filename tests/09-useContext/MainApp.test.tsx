import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from '../../src/09-useContext/MainApp';


describe('Pruebas en el componente <MainApp />', () => {
    
    test('debe de mostrar el <HomePage/>', () => {
    
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        expect( screen.getByText('Home Page') ).toBeTruthy();

        // screen.debug();
    });

    test('debe de mostrar el <LoginPage />', () => {
    
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect( screen.getByText('Login Page') ).toBeTruthy();

        // screen.debug();
    });

    test('debe de mostrar el <AboutPage />', () => {
    
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect( screen.getByText('About Page') ).toBeTruthy();

        // screen.debug();
    });



});