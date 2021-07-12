const Pokemon = (props) => {
    const { pokemon } = props;

    
    return ( 
    
        <div className="pokemon-card">
            <div className="img-container">
            <div className="pkmn-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            </div>

            <div className="card-bottom">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
        </div>
     );
}
 
export default Pokemon;