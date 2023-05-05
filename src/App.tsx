import React,{FunctionComponent,useState} from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = () => {
//    const name: String = 'React';
    //etat init
    const [pokemons,setName]=useState<Pokemon[]>(POKEMONS);

    return (
        <div>
         <h1>Pokédex</h1>
         <p>Ii ya {pokemons.length} POKEMONS dans le pokédex</p>
        </div>

    )
}

export default App;