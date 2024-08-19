import { useEffect, useState } from "react";
import { apiCaller } from "../utility/apiCaller";
import { Product } from "../utility/constants";
import ProductTile from "./ProductTile";

function ProductGrid() {
    const [productArr, setProductArr] = useState<Product[]>([])
    
    useEffect(()=>{
        apiCaller({type: 'GET', endpoint: '/api/product/getProducts'}).then(res => setProductArr(res));
    }, [])

    return(
        <div>
            {productArr.length>0 ? productArr.map((productItem)=>(
                <ProductTile key={productItem.id} {...productItem}/>
            )): <h2>Some thing went wrong!!</h2>}
        </div>
    )
}

export default ProductGrid;
