import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        rentPrice: "",
        image: "",
    });

    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];

            if (!file) return;

            // ✅ File size validation (1MB)
            if (file.size > 1000000) {
                alert("Image should be less than 1MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, image: reader.result });
                setPreview(reader.result); // 👈 preview
            };

            reader.readAsDataURL(file);
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Basic validation
        if (!form.title || !form.price) {
            alert("Title and Price are required");
            return;
        }

        try {
            setLoading(true);
            await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, form);

            alert("✅ Product Added Successfully");

            // 🔄 Reset form
            setForm({
                title: "",
                description: "",
                price: "",
                rentPrice: "",
                image: "",
            });
            setPreview(null);

        } catch (error) {
            console.error(error);
            alert("❌ Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4" style={{ maxWidth: "500px" }}>
            <h3 className="mb-3 text-center">Add Product 🛍️</h3>

            <form onSubmit={handleSubmit} className="card p-3 shadow-sm">

                <input
                    name="title"
                    placeholder="Product Title"
                    value={form.title}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Buy Price"
                    value={form.price}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <input
                    type="number"
                    name="rentPrice"
                    placeholder="Rent Price"
                    value={form.rentPrice}
                    onChange={handleChange}
                    className="form-control mb-2"
                />

                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="form-control mb-3"
                />

                {/* ✅ Image Preview */}
                {preview && (
                    <img
                        src={preview}
                        alt="preview"
                        className="mb-3 rounded"
                        style={{ height: "150px", objectFit: "cover" }}
                    />
                )}

                <button
                    className="btn btn-dark w-100"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;