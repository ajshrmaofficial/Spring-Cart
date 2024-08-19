import { Product } from "../utility/constants";

function truncateString(str: string, maxLength: number): string {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
}

function ProductTile({price, brand, availability, desc, name}: Product){
    
    return(
        <div className={`product-card ${availability ? 'available': 'not-available'}`}>
            <p>{name}</p>
            <p>{brand}</p>
            <p>{truncateString(desc, 10)}</p>
            <p>${price}</p>
        </div>
    )
}

export default ProductTile;
