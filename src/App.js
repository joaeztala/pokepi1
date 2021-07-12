import { useState, useEffect } from 'react';
import './App.css';
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex';
import { getPokemon, getPokemonData, searchPokemon } from "./utils/useHTTP"


const App = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () =>{
    try {
      setLoading(true)
      const data = await getPokemon()
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      
    }
  };

  useEffect(()=>{
    fetchPokemons();
  }, []);

  useEffect(()=>{
    if (!searching){
    fetchPokemons();
    }
  },[]);

  const onSearch = async (pokemon) =>{
    if (!pokemon){
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result){
      setNotFound(true);
      setLoading(false);
      return
    }else{
      setPokemons([result])
    }
    setLoading(false);
    setSearching(false)
  };

  return (
    <>
    <Searchbar onSearch={onSearch}/>
    { notFound ? (
        <div className="nf-txt">We couldn't find that pokemon</div> 
     ):(
      <Pokedex pokemons={pokemons} loading={loading}/>   ) 
    }
    
    </>
  );
}

export default App;
