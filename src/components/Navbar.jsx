// components/Navbar.jsx

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary px-3">
            <Link to="/" className="navbar-brand fw-bold">
                Thrift Store 🛍️
            </Link>

            <Link to="/add">
                <button className="btn btn-light">
                    + Add Product
                </button>
            </Link>
        </nav>
    );
};

export default Navbar;