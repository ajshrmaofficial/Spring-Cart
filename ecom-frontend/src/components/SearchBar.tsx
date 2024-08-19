import { useState } from "react";
import { apiCaller } from "../utility/apiCaller";

function SearchBar(){
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const searchProduct = async() => {
        apiCaller({type: 'GET', endpoint: `/api/searchProducts?keyword=${searchKeyword}`}).then(res=>console.log(res));
    }

    return(
        <div>
            <input type="text" placeholder="Enter something to search..." onChange={e=>setSearchKeyword(e.target.value)}/>
            <button type="button" onClick={searchProduct}>Search</button>
        </div>
    )
}

export default SearchBar;
