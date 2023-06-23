import Button from "./components/Button";
import DisplayCard from './components/DisplayCard';
import Header from "./components/Header";
import { PokemonProvider } from "./context/PokemonProvider";
import { PokemonRouter } from "./routers/PokemonRouter";

export const App = () => {
    return (
        <PokemonProvider>
            <Header/>
            <DisplayCard />
            <Button text="Cargar Mas"/>
        </PokemonProvider>
    )
}


