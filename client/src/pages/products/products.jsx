import React from "react";
import "./products.scss"
import { products } from "../../data";
import ProductCard from "../../components/productCard/productCard";
import { useState } from "react";
import { useRef } from "react";
function Products() {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();
  
    const reSort = (type) => {
      setSort(type);
      setOpen(false);
    };
  
    const apply = ()=>{
      console.log(minRef.current.value)
      console.log(maxRef.current.value)
    }
  
    return (
      <div className="products">
        <div className="container">
          
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Liverr's AI artists
          </p>
          <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input ref={minRef} type="number" placeholder="min" />
              <input ref={maxRef} type="number" placeholder="max" />
              <button onClick={apply}>Apply</button>
            </div>
            <div className="right">
              <span className="sortBy">Sort by</span>
              <span className="sortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
              {open && (
                <div className="rightMenu">
                  {sort === "sales" ? (
                    <span onClick={() => reSort("createdAt")}>Newest</span>
                  ) : (
                    <span onClick={() => reSort("sales")}>Best Selling</span>
                    )}
                    <span onClick={() => reSort("sales")}>Popular</span>
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  

export default Products