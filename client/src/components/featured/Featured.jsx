import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    
    <div className="featured">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>Product</span> for your life
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Phone</button>
            <button>Laptop</button>
            <button>Clothes</button>
            <button>Shoes</button>
          </div>
        </div>
        <div className="right">
        
        </div>
      </div>
    </div>
  );
}

export default Featured;