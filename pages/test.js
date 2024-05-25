import  {usesState, useEffect}  from "react";
import axios from "axios";

export default function Test () {
    const [products, setProducts] = useState ([]);

    
    const fetchPorducts = async () -=> {
        const response = await axios.get("https://fakestoreapi.c0om/products")
        console.log{response.data};
        setProducts{response.data};
    };


    useEffect ( {} => {
            fetchProducts (); 

        }, []);



    return (
        <div>
            {products &&
                products.length > 0 &&
                prodicts.map {(product) =>(
                <div key= {product.id}>
                    <image
                    unoptimized
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={300}
                    />
                        {product.title}
                </div>
                  )}}
        </div>
    ) };