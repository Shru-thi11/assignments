import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';
import ProductForm from '../components/ProductForm';

const ProductCreate = () => {
    const navigate = useNavigate();

    const handleCreate = (data) => {
        createProduct(data).then(() => {
            alert("Product Created!");
            navigate('/products');
        });
    };

    return (
        <div>
            <h2>New product</h2>
            <ProductForm onSubmit={handleCreate} />
        </div>
    );
};

export default ProductCreate;