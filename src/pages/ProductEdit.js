import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProduct, updateProduct } from '../services/api';
import ProductForm from '../components/ProductForm';

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        getProduct(id).then(setInitialData);
    }, [id]);

    const handleUpdate = (data) => {
        updateProduct(id, data).then(() => {
            alert("Product Updated!");
            navigate('/products');
        });
    };

    if (!initialData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit {initialData.title}</h2>
            <ProductForm initialData={initialData} onSubmit={handleUpdate} isEdit />
            <br />
            <Link to={`/products/show/${id}`}>Show</Link> | <Link to="/products">Home</Link>
        </div>
    );
};

export default ProductEdit;