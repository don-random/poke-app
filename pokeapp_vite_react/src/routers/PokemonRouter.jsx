import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";

export const PokemonRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<App />}/>
        </Routes>
    );
};