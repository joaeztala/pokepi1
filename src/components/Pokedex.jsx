import Pokemon from "./Pokemon"

const Pokedex = (props) => {
    const {pokemons, loading} = props;
    return ( 
        <>
        { loading ? (
         <div className="loading">Catching them all</div> 
        ):(
        <div className="pokedex-grid">
           {pokemons.map((pokemon, idx)=>{
                return < Pokemon pokemon={pokemon} key={pokemon.name}/> 
            })}
            </div>
        )}
                            
        </>
     );
}
 
export default Pokedex;