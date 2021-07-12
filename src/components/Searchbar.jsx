import { useState }  from 'react';


const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState("");
    

    const buscar = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    };

    const click = async (e) => {
        onSearch(search)
    };

    return ( 
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Search for a pokemon..." onChange={buscar} />
            </div>
            <div>
                <button onClick={click} className="searchbar-btn">Search</button>
            </div>
            <div>
                
            </div>
        </div>
     );
}
 
export default Searchbar;