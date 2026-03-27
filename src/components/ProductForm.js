import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
    const [form, setForm] = useState({
        title: initialData.title || '',
        price: initialData.price || '',
        description: initialData.description || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
            </div>
            <button type="submit">{isEdit ? 'Update' : 'Create'}</button>
            {!isEdit && <Link to="/products" style={{marginLeft: '10px'}}>Go back</Link>}
        </form>
    );
};

export default ProductForm;