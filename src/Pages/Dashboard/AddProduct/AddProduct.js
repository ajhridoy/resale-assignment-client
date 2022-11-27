import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const imgHostkey = process.env.REACT_APP_IMG_BB_KEY
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const handleProductAdd = event => {
        event.preventDefault()
        setLoading(true)
        const form = event.target;
        const name = form.name.value;
        const img = form.img.files[0];
        const formData = new FormData()
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                setImage(imgData.data.url)
            }
        })
        const categoryName = form.category.value;
        const location = form.location.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const desc = form.desc.value
        const condition = form.condition.value
        const getTime = new Date()
        const time = `${getTime.getHours()}:${getTime.getMinutes()}`;

        const productDetails = {
            name,
            img: image,
            categoryName,
            location,
            resalePrice,
            originalPrice,
            PostTime: time,
            sellerName: user.displayName,
            email: user.email,
            condition,
            decs: desc
        }
        
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Added your product successfully')
                navigate('/dashboard/myproducts')
            }
        })
    }
    setLoading(false)
    if(loading){
        return <div>Loading...</div>
    }
    return (
        <div className='mx-4 p-4'>
            <h2 className="text-3xl font-bold my-8 text-center">Add Your Product</h2>
            <form onSubmit={handleProductAdd} className='grid grid-cols-1 gap-5'>
            <input type="text" name='name' placeholder="Brand Name" className="input input-bordered input-accent w-full max-w-sm mx-auto" required />
            <select name='category' className="select select-success w-full max-w-sm mx-auto" required>
            <option disabled selected>Pick your Product Category</option>
            <option>acer</option>
            <option>dell</option>
            <option>hp</option>
            </select>
            <select name='condition' className="select select-success w-full max-w-sm mx-auto" required>
            <option disabled selected>Choose your product condition</option>
            <option>Good</option>
            <option>Excellent</option>
            <option>Fair</option>
            </select>
            <input type="text" name='location' placeholder="Your Location" className="input input-bordered input-accent w-full max-w-sm mx-auto" required />
            <input type="text" name='originalPrice' placeholder="Original Price" className="input input-bordered input-accent w-full max-w-sm mx-auto" required />
            <input type="text" name='resalePrice' placeholder="Resale Price" className="input input-bordered input-accent w-full max-w-sm mx-auto" required />
            <label htmlFor="img" className='block text-center font-bold'>Product Photo:</label>
             <input type="file" name='img' className="file-input file-input-bordered file-input-success w-full max-w-sm mx-auto" required />
             <textarea name='desc' required className="textarea textarea-success max-w-sm mx-auto w-full" placeholder="Product Description"></textarea>
             <input type="submit" className='bg-green-400 hover:bg-green-500 text-black max-w-sm mx-auto p-3 rounded-lg w-full' value="Submit Product" />
            </form>
        </div>
    );
};

export default AddProduct;