// pages/Home.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(res.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {products.map((p) => (
                    <div className="col-md-3 mb-4" key={p._id}>
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;