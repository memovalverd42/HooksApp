import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "."
import { Navbar } from './Navbar';
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <Navbar/>
            <hr />

            <Routes>

                <Route path="/" element={ <HomePage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/about" element={ <AboutPage/> }/>

                {/* <Route path="/*" element={ <LoginPage/> }/> */}
                <Route path="/*" element={ <Navigate to='/login'/> }/>

            </Routes>
        </UserProvider>
    )
}
