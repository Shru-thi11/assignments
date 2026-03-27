import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';

const ProductShow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProduct(id).then(setProduct);
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.title}</h2>
            <p><strong>Name:</strong> {product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Link to="/products">Back</Link> | <Link to={`/products/edit/${id}`}>Edit</Link>
        </div>
    );
};

export default ProductShow;