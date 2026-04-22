// components/ProductCard.jsx

const ProductCard = ({ product }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={product.image || "/no-image.png"}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt={product.title}
            />

            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">
                    {product.description}
                </p>

                <p className="text-success fw-bold">
                    Buy: ₹{product.price}
                </p>
                <p className="text-primary">
                    Rent: ₹{product.rentPrice}
                </p>

                <div className="d-flex gap-2">
                    <button className="btn btn-success w-100">Buy</button>
                    <button className="btn btn-primary w-100">Rent</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;