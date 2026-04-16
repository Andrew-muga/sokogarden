import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Getproducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    const img_url = "https://andrewmuga.alwaysdata.net/static/images/";

    const getProducts = async () => {
        setLoading("Please wait, we are retrieving the products...");
        try {
            const response = await axios.get('https://andrewmuga.alwaysdata.net/api/get_product_details');
            setProducts(response.data);
            setLoading("");
        } catch (error) {
            setLoading("");
            setError("There was an error fetching the games.");
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className="container py-5">
            <h3 className="mb-4">Available Games</h3>

            {loading && <div className="alert alert-info">{loading}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-md-4 col-lg-3 d-flex align-items-stretch" key={product.id}>
                        <div className="card shadow-md w-100 h-100 border-0">
                            {/* Fixed Aspect Ratio for Image */}
                            <div style={{ height: "200px", overflow: "hidden" }}>
                                <img 
                                    src={`${img_url}${product.product_photo}`} 
                                    className="card-img-top p-3" 
                                    alt={product.product_name}
                                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                />
                            </div>

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title h6 fw-bold">{product.product_name}</h5>
                                
                                {/* flex-grow-1 pushes the content below it to the bottom */}
                                <p className="card-text text-muted small flex-grow-1">
                                    {product.product_description}
                                </p>
                                
                                <div className="mt-3">
                                    <p className="fw-bold text-primary mb-2">Ksh {product.product_cost}</p>
                                    <button 
                                        className="btn btn-dark w-100 py-2" 
                                        onClick={() => navigate("/makepayment", { state: { product } })}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>    
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Getproducts;