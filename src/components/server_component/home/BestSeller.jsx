import React from 'react';

const BestSeller = () => {
    return (
        <section class="best-sell-product-area pt-90 pb-90">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="section-title text-center mb-60">
                <h2 class="title">Find Best Seller Vendor</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="best-sell-nav">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all"
                      type="button"
                      role="tab"
                      aria-controls="all"
                      aria-selected="true"
                    >
                      <div class="icon">
                        <i class="flaticon-shipping"></i>
                      </div>
                      <div class="content">
                        <p>All Categories</p>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="watch-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#watch"
                      type="button"
                      role="tab"
                      aria-controls="watch"
                      aria-selected="false"
                    >
                      <div class="icon">
                        <i class="flaticon-smartwatch"></i>
                      </div>
                      <div class="content">
                        <p>smart watch</p>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="electronics-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#electronics"
                      type="button"
                      role="tab"
                      aria-controls="electronics"
                      aria-selected="false"
                    >
                      <div class="icon">
                        <i class="flaticon-lamp"></i>
                      </div>
                      <div class="content">
                        <p>Consumer Electronics</p>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="appliance-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#appliance"
                      type="button"
                      role="tab"
                      aria-controls="appliance"
                      aria-selected="false"
                    >
                      <div class="icon">
                        <i class="flaticon-kitchen-utensils"></i>
                      </div>
                      <div class="content">
                        <p>home appliance</p>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="shoes-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#shoes"
                      type="button"
                      role="tab"
                      aria-controls="shoes"
                      aria-selected="false"
                    >
                      <div class="icon">
                        <i class="flaticon-high-heels-1"></i>
                      </div>
                      <div class="content">
                        <p>Shoes & Accessories</p>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="sports-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sports"
                      type="button"
                      role="tab"
                      aria-controls="sports"
                      aria-selected="false"
                    >
                      <div class="icon">
                        <i class="flaticon-sport-equipment"></i>
                      </div>
                      <div class="content">
                        <p>Sports & Entertainment</p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div class="row mb-20">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-sliders"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Theme Beyond Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>2 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>40k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $45,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">5,000,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product01.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product02.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product03.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product04.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-shield"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Olle Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>1 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>13k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $5,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">200,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product05.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product06.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product07.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product08.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="watch"
                  role="tabpanel"
                  aria-labelledby="watch-tab"
                >
                  <div class="row mb-20">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-sliders"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Theme Beyond Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>2 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>40k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $45,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">5,000,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product01.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product02.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product03.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product04.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-shield"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Olle Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>1 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>13k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $5,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">200,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product05.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product06.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product07.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product08.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="electronics"
                  role="tabpanel"
                  aria-labelledby="electronics-tab"
                >
                  <div class="row mb-20">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-sliders"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Theme Beyond Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>2 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>40k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $45,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">5,000,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product01.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product02.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product03.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product04.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-shield"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Olle Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>1 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>13k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $5,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">200,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product05.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product06.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product07.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product08.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="appliance"
                  role="tabpanel"
                  aria-labelledby="appliance-tab"
                >
                  <div class="row mb-20">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-sliders"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Theme Beyond Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>2 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>40k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $45,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">5,000,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product01.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product02.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product03.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product04.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-shield"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Olle Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>1 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>13k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $5,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">200,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product05.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product06.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product07.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product08.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="shoes"
                  role="tabpanel"
                  aria-labelledby="shoes-tab"
                >
                  <div class="row mb-20">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-sliders"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Theme Beyond Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>2 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>40k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $45,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">5,000,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product01.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product02.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product03.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product04.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-shield"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Olle Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>1 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>13k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $5,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">200,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product05.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product06.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product07.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product08.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="sports"
                  role="tabpanel"
                  aria-labelledby="sports-tab"
                >
                  <div class="row mb-20">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-sliders"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Theme Beyond Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>2 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>40k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $45,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">5,000,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product01.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product02.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product03.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product04.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="vendor-wrap">
                        <div class="row">
                          <div class="col-xl-5 col-lg-8">
                            <div class="vendor-content">
                              <div class="content-top mb-20">
                                <div class="icon">
                                  <i class="fa-solid fa-shield"></i>
                                </div>
                                <div class="content">
                                  <h2 class="title">
                                    <a href="#">Olle Technology.Ltd</a>
                                  </h2>
                                  <ul>
                                    <li>1 year</li>
                                    <li>
                                      <a href="#"
                                        >Verified
                                        <img
                                          src="assets/img/icon/verified_icon.png"
                                          alt=""
                                      /></a>
                                    </li>
                                    <li>13k Customer</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="ranking mb-30">
                                <ul>
                                  <li>No.1 Vendor Rankings</li>
                                  <li>Annual Sales $5,000,00</li>
                                </ul>
                              </div>
                              <div class="vendor-services">
                                <ul>
                                  <li>
                                    <h2 class="title">+/- 5 hr</h2>
                                    <p>Response Time</p>
                                  </li>
                                  <li>
                                    <h2 class="title">200,00+</h2>
                                    <p>Transtctions</p>
                                  </li>
                                  <li>
                                    <h2 class="title">100%</h2>
                                    <p>On-time delivery</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-7 col-lg-12">
                            <div class="vendor-product-wrap">
                              <ul>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product05.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Gloves $9.08</a
                                      >
                                    </h2>
                                    <span>15 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product06.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >watch $8.08</a
                                      >
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product07.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html"
                                        >Shoes $9.08</a
                                      >
                                    </h2>
                                    <span>03 (Sale)</span>
                                  </div>
                                </li>
                                <li class="vendor-product">
                                  <div class="thumb">
                                    <a href="shop-details.html"
                                      ><img
                                        src="assets/img/product/vendor_product08.png"
                                        alt=""
                                    /></a>
                                  </div>
                                  <div class="content">
                                    <h2 class="title">
                                      <a href="shop-details.html">Cap $5.08</a>
                                    </h2>
                                    <span>15k+ (Sale)</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BestSeller;