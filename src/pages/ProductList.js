import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const handleDelete = (id) => {
        // Wireframe Note: Submit POST (or DELETE) to /products/destroy
        deleteProduct(id).then(() => {
            alert(`Product ${id} deleted (Simulated)`);
            setProducts(products.filter(p => p.id !== id));
        });
    };

    return (
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Description</th><th>Price</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>{p.title}</td>
                            <td>{p.description.substring(0, 30)}...</td>
                            <td>${p.price}</td>
                            <td className="actions">
                                <Link to={`/products/show/${p.id}`}>Show</Link>
                                <Link to={`/products/edit/${p.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(p.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <Link to="/products/new">Add product</Link>
        </div>
    );
};

export default ProductList;