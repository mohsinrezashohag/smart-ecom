import React from 'react';

const Banner = () => {
    return (
         <section class="banner-area pt-20">
        <div class="banner-shape"></div>
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-xl-9">
              <div class="row align-items-center">
                <div class="col-lg-6 order-0 order-lg-2">
                  <div class="banner-img">
                    <img src="assets/img/banner/banner_img.png" alt="" />
                    <div class="product-tooltip">
                      <div class="tooltip-btn"></div>
                      <div
                        class="tooltip-product-item product-tooltip-item left"
                      >
                        <div class="close-btn">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div class="tooltip-product-thumb">
                          <a href="shop-details.html">
                            <img
                              src="assets/img/product/tooltip_img.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="tooltip-product-content">
                          <h5 class="title">
                            <a href="shop-details.html"
                              >Watch $29.08 <span>-35%</span></a
                            >
                          </h5>
                          <p class="order">0 orders</p>
                        </div>
                      </div>
                    </div>
                    <div class="product-tooltip">
                      <div class="tooltip-btn"></div>
                      <div
                        class="tooltip-product-item product-tooltip-item bottom left"
                      >
                        <div class="close-btn">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div class="tooltip-product-thumb">
                          <a href="shop-details.html">
                            <img
                              src="assets/img/product/tooltip_img.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="tooltip-product-content">
                          <h5 class="title">
                            <a href="shop-details.html"
                              >Watch $29.08 <span>-35%</span></a
                            >
                          </h5>
                          <p class="order">0 orders</p>
                        </div>
                      </div>
                    </div>
                    <div class="product-tooltip">
                      <div class="tooltip-btn"></div>
                      <div class="tooltip-product-item product-tooltip-item">
                        <div class="close-btn">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div class="tooltip-product-thumb">
                          <a href="shop-details.html">
                            <img
                              src="assets/img/product/tooltip_img.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="tooltip-product-content">
                          <h5 class="title">
                            <a href="shop-details.html"
                              >Watch $29.08 <span>-35%</span></a
                            >
                          </h5>
                          <p class="order">0 orders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="banner-content">
                    <h2 class="title">
                      Always <br />
                      Be Your <span>MULTIVENDOR</span>
                    </h2>
                    <h4 class="small-title">Women <span>Fashion</span></h4>
                    <h5 class="price">Total order : <span>$30.00</span></h5>
                    <a href="shop.html" class="btn">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;