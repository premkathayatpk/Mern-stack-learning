import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductDetails = async () => {
    setLoading(true);
    try {
      let res = await fetch(`https://dummyjson.com/products/${id}`);
      res = await res.json();
      setProduct(res);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl p-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center text-xl p-10">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/product" 
          className="inline-block mb-5 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Products
        </Link>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="md:flex gap-8">
          
            <div className="md:w-1/2">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-500 mb-4">{product.brand} • {product.category}</p>
              
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">⭐ {product.rating}</span>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">Rs. {product.price}</span>
                {product.discountPercentage && (
                  <span className="ml-3 text-xl text-green-600">
                    {product.discountPercentage}% off
                  </span>
                )}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;