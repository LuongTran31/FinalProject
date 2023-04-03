import React from "react";
import "./product.scss"
import  { Slider } from "infinite-react-carousel"

const Product = () =>{
    return (
        
            <div className="product">
              <div className="container">
                <div className="left">
                
                  <h1>Selling Iphone 11</h1>
                  <div className="user">
                    <img
                      className="pp"
                      src="https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg"
                      alt=""
                    />
                    <span>Seller </span>
                    <div className="stars">
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <span>5</span>
                    </div>
                  </div>
                  <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107840321324440_iphone-11-dd.jpg"
                      alt=""
                    />
                     <img
                      src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107840321324440_iphone-11-dd.jpg"
                      alt=""
                    />
                     <img
                      src="https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(5):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107840321324440_iphone-11-dd.jpg"
                      alt=""
                    />
                  </Slider>
                  <h2>About This Product</h2>
                  <p>
                    The iPhone 11 was a big surprise, packing more advanced technology 
                    (namely in the camera capabilities and the processing power under the hood) 
                    at a lower cost than the iPhone XR's price in 2018. 
                    It combines a large 6.1-inch display with a premium-feeling body, and comes in an array of colors too.
                    It's worth noting that the iPhone 11 isn't Apple's newest numbered smartphone – that's the iPhone 13, 
                    which launched in September 2021 alongside the tiny iPhone 13 mini, 
                    the iPhone 13 Pro, and the bigger iPhone 13 Pro Max.
                    These didn't improve much on the iPhone 12 range that released in 2020, but they're still the most powerful Apple phones on the market.
                  </p>
                  <div className="seller">
                    <h2>About The Seller</h2>
                    <div className="user">
                      <img
                        src="https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg"
                        alt=""
                      />
                      <div className="info">
                        <span>Seller</span>
                        <div className="stars">
                          <img src="/img/star.png" alt="" />
                          <img src="/img/star.png" alt="" />
                          <img src="/img/star.png" alt="" />
                          <img src="/img/star.png" alt="" />
                          <img src="/img/star.png" alt="" />
                          <span>5</span>
                        </div>
                        <button>Contact Me</button>
                      </div>
                    </div>
                    <div className="box">
                      <div className="items">
                        <div className="item">
                          <span className="title">From</span>
                          <span className="desc">USA</span>
                        </div>
                        <div className="item">
                          <span className="title">Member since</span>
                          <span className="desc">Aug 2022</span>
                        </div>
                        <div className="item">
                          <span className="title">Avg. response time</span>
                          <span className="desc">4 hours</span>
                        </div>
                        <div className="item">
                          <span className="title">Last delivery</span>
                          <span className="desc">1 day</span>
                        </div>
                        <div className="item">
                          <span className="title">Languages</span>
                          <span className="desc">English</span>
                        </div>
                      </div>
                      <hr />
                      <p>
                      My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
                      </p>
                    </div>
                  </div>
                  <div className="reviews">
                    <h2>Reviews</h2>
                    <div className="item">
                      <div className="user">
                        <img
                          className="pp"
                          src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <div className="info">
                          <span>Garner David</span>
                          <div className="country">
                            <img
                              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                              alt=""
                            />
                            <span>United States</span>
                          </div>
                        </div>
                      </div>
                      <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>5</span>
                      </div>
                      <p>
                      This product is great
                      </p>
                      <div className="helpful">
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                      </div>
                    </div>
                    <hr />
                    <div className="item">
                      <div className="user">
                        <img
                          className="pp"
                          src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <div className="info">
                          <span>Sidney Owen</span>
                          <div className="country">
                            <img
                              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                              alt=""
                            />
                            <span>Germany</span>
                          </div>
                        </div>
                      </div>
                      <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>5</span>
                      </div>
                      <p>
                        It great! I have buy without any problem
                      </p>
                      <div className="helpful">
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                      </div>
                    </div>
                    <hr />
                    <div className="item">
                      <div className="user">
                        <img
                          className="pp"
                          src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <div className="info">
                          <span>Lyle Giles </span>
                          <div className="country">
                            <img
                              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                              alt=""
                            />
                            <span>United States</span>
                          </div>
                        </div>
                      </div>
                      <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>5</span>
                      </div>
                      <p>
                        Amzing product
                      </p>
                      <div className="helpful">
                        <span>Helpful?</span>
                        <img src="/img/like.png" alt="" />
                        <span>Yes</span>
                        <img src="/img/dislike.png" alt="" />
                        <span>No</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="price">
                    <h3>Iphone 11 with 99%</h3>
                    <h2>$ 59.99</h2>
                  </div>
                  <p>
                    I am selling this iphone
                  </p>
                  <div className="details">
                    <div className="item">
                      <img src="/img/clock.png" alt="" />
                      <span>2 Days Delivery</span>
                    </div>
                    <div className="item">
                      <img src="/img/recycle.png" alt="" />
                      <span>3 Revisions</span>
                    </div>
                  </div>
                  <div className="features">
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>2 camera</span>
                    </div>
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>CPU powerful</span>
                    </div>
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>PIN is big</span>
                    </div>
                    <div className="item">
                      <img src="/img/greencheck.png" alt="" />
                      <span>LCD</span>
                    </div>
                  </div>
                  <button>Buy</button>
                </div>
              </div>
            </div>
         
    )
}

export default Product;