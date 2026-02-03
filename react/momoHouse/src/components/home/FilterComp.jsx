import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import useFetch from "../../hooks/useFetch";

function FilterComp() {
  const { isError, isLoading, products } = useFetch();

  // console.log(products);

  const [filter, setFilter] = useState([]);

  const filterProduct = (food = "Indian") => {
    let filterItems = products.filter((item) => {
      return item.cuisine == food;
    });
    setFilter(filterItems);
  };
  useEffect(() => {
    filterProduct();
  }, [products]);

  return (
    <section className="bg-white py-14 flex flex-col justify-center  gap-5 p-3 items-center">
      <div className="text-center  space-y-3  ">
        <h1 className="text-2xl font-bold">
          Our <span className="text-[#D95103]"> Most Popular </span> Recipes
        </h1>
        <p>
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => {
            filterProduct("Indian");
          }}
          className="border rounded-3xl  hover:bg-amber-700 hover:text-white   w-20 p-2"
        >
          Indian
        </button>
        <button
          onClick={() => {
            filterProduct("Pakistani");
          }}
          className="border rounded-3xl  hover:bg-amber-700 hover:text-white   w-20 p-2"
        >
          Pakistani
        </button>
        <button
          onClick={() => {
            filterProduct("Italian");
          }}
          className="border rounded-3xl  hover:bg-amber-700 hover:text-white   w-20 p-2"
        >
          Italian
        </button>
      </div>
      <div>
        {!isError && isLoading ? (
          <div>Loading.......</div>
        ) : (
          <div>
            {filter?.length > 0 && (
              <div className="flex flex-wrap gap-5">
                {filter?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-55 shadow-xl shadow-gray-200   rounded-2xl flex flex-col  "
                    >
                      <div>
                        <img
                          className="   rounded-t-2xl w-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="p-3">
                        <h1>{item.name}</h1>
                        <h1>Rs.{item.caloriesPerServing}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <NavLink
          to="/menu"
          className="bg-[#0C6967] p-3  py-4 flex justify-center items-center gap-2 w-52 text-white rounded-4xl"
        >
          Explore Our Menu
          <CgArrowRight />
        </NavLink>
      </div>
    </section>
  );
}

export default FilterComp;
