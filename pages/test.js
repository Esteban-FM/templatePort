import  {useState, useEffect}  from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Test () {
    const [products, setProducts] = useState ([]);


    const fetchPorducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
    };


    useEffect ( () => {
        fetchPorducts();
        }, []);

    const sendEmail = async () => {
        const data = {
            name: "Esteban Js",
            email: "esteban.fsma@gmail.com",
            message: "Eso es puto!"
        };
        await axios.post("/api/mail", data);
        toast.success("Email sent");
    };

    return (
        <div>
            <input type="email" plaseholder="Email"/>
            <button onClick={sendEmail}>Send Email</button>
            {products &&
                products.length > 0 &&
                products.map((product) =>(
                <div key= {product.id}>
                    <Image
                    unoptimized
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={300}
                    />
                        {product.title}
                </div>
                 ))}
        </div>
    )
 }