import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      let res = await fetch("https://dummyjson.com/recipes");
      res = await res.json();

      setProducts(res.recipes);

      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return { isError, isLoading, products };
};

export default useFetch;
