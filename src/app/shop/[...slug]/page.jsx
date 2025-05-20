import React from 'react';

const page = () => {
    return (
        <main>
            <section class="breadcrumb-area breadcrumb-bg">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8 order-2 order-md-0">
                            <div class="breadcrumb-product text-center">
                                <div class="thumb">
                                    <a href="shop-details.html"><img src="assets/img/product/br_product_img.png" alt="img"/></a>
                                    <span>35% OFF</span>
                                </div>
                                <div class="content">
                                    <div class="rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <h4 class="title"><a href="shop-details.html">Blender Mixer Food</a></h4>
                                    <h5 class="price">$37.00</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-8 col-md-7">
                            <div class="breadcrumb-content">
                                <h2 class="title">Discount shop</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop-area pt-90 pb-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-8 col-sm-10 order-2 order-lg-0">
                            <aside class="shop-sidebar">
                                <div class="widget mb-35">
                                    <div class="widget-title mb-25">
                                        <h4 class="title">Category</h4>
                                    </div>
                                    <div class="shop-cat-list">
                                        <ul>
                                            <li>
                                                <a href="#">Furniture <span>8</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Coffee & Tables1 <span>3</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Lighting3 <span>2</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Decoration5 <span>5</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Electronics1 <span>9</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Beds2 <span>8</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Armchairs & Chaises3 <span>7</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Sofas & Sleeper Sofas <span>3</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget mb-40">
                                    <div class="widget-title mb-25">
                                        <h4 class="title">Best Seller</h4>
                                    </div>
                                    <div class="sidebar-product-list">
                                        <ul>
                                            <li>
                                                <div class="thumb">
                                                    <a href="shop-details.html"><img src="assets/img/product/sidebar_product01.jpg" alt="img"/></a>
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><a href="shop-details.html">Appliance Aid Kitchen Stand</a></h6>
                                                    <div class="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </div>
                                                    <h4 class="price"><del>$39.08</del> $19.00</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="thumb">
                                                    <a href="shop-details.html"><img src="assets/img/product/sidebar_product02.jpg" alt="img"/></a>
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><a href="shop-details.html">One Washer Dryer</a></h6>
                                                    <div class="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </div>
                                                    <h4 class="price"><del>$39.08</del> $19.00</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="thumb">
                                                    <a href="shop-details.html"><img src="assets/img/product/sidebar_product03.jpg" alt="img"/></a>
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><a href="shop-details.html">Electric Blender Mixer</a></h6>
                                                    <div class="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </div>
                                                    <h4 class="price"><del>$39.08</del> $19.00</h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget mb-40">
                                    <div class="widget-title price-title mb-15">
                                        <h4 class="title">Filter by price :</h4>
                                    </div>
                                    <div class="price_filter">
                                        <div id="slider-range"></div>
                                        <div class="price_slider_amount">
                                            <input type="submit" class="btn" value="Filter"/>
                                            <span>Price :</span>
                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                        </div>
                                    </div>
                                </div>
                                <div class="widget">
                                    <div class="widget-title mb-15">
                                        <h4 class="title">Product Brand</h4>
                                    </div>
                                    <div class="shop-brand-list">
                                        <ul>
                                            <li><a href="#">New Arrivals <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Clothing & Accessories <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Electronics <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Home Appliance <i class="fa-solid fa-angles-right"></i></a></li>
                                            <li><a href="#">Gaming Accessories <i class="fa-solid fa-angles-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="shop-top-wrap mb-35">
                                <div class="shop-top-left">
                                    <h5 class="title">Shop</h5>
                                </div>
                                <div class="shop-top-right">
                                    <form action="#">
                                        <label for="Sort by">sort By</label>
                                        <select id="shortBy" name="select" class="form-select" aria-label="Default select example">
                                            <option value="">Sorting</option>
                                            <option>Free Shipping</option>
                                            <option>Best Match</option>
                                            <option>Newest Item</option>
                                            <option>Size A - Z</option>
                                        </select>
                                    </form>
                                    <ul>
                                        <li>View</li>
                                        <li class="active"><a href="#"><i class="fa-solid fa-table-cells"></i></a></li>
                                        <li><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img01.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">Market Store</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">Electric Blender Mixer Food</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 75%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img02.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">olle Store</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">Car Air Purifier With HEPA</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 50%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img03.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">alto</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">One Washer Dryer Combo</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 75%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img04.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <span class="tag">Sold by <a href="vendor-profile.html">Market Store</a></span>
                                            <h2 class="title"><a href="shop-details.html">Parts Multi-function Portable</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 25%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img05.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">olle Store</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">Outdoor Travel 35L Sport</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 100%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img06.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">alto</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">OnePlus 8 Pronyx Black</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 50%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img07.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">Market Store</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">Electric Blender Mixer Food</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 75%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img08.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">Olle Store</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">Car Air Purifier With HEPA</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 25%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                                    <div class="shop-product-item mb-30">
                                        <div class="shop-thumb">
                                            <a href="shop-details.html"><img src="assets/img/product/shop_img09.png" alt="img"/></a>
                                            <span>New</span>
                                        </div>
                                        <div class="shop-content">
                                            <ul class="tag">
                                                <li>Sold by <a href="vendor-profile.html">alto</a></li>
                                            </ul>
                                            <h2 class="title"><a href="shop-details.html">One Washer Dryer Combo</a></h2>
                                            <div class="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <span>Already Sold : 75%</span>
                                            <div class="progress">
                                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <div class="content-bottom">
                                                <h4 class="price">$39.08</h4>
                                                <p>0 orders <span>-35%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-bottom-wrap">
                                <div class="shop-bottom-top">
                                    <h5 class="title">Shop</h5>
                                    <p>Showing 1-09 of 30 Item(S)</p>
                                </div>
                                <div class="shop-bottom-box">
                                    <div class="shop-bottom-left">
                                        <form action="#">
                                            <select id="shortBy" name="select" class="form-select" aria-label="Default select example">
                                                <option value="">Show 09</option>
                                                <option>Show 12</option>
                                                <option>Show 08</option>
                                                <option>Show 06</option>
                                                <option>Show 03</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div class="shop-bottom-right">
                                        <form action="#">
                                            <select id="shortBy" name="select" class="form-select" aria-label="Default select example">
                                                <option value="">Default sorting</option>
                                                <option>Free Shipping</option>
                                                <option>Best Match</option>
                                                <option>Newest Item</option>
                                                <option>Size A - Z</option>
                                            </select>
                                        </form>
                                        <ul>
                                            <li class="active"><a href="#"><i class="fa-solid fa-table-cells"></i></a></li>
                                            <li><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="newsletter-area-two">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-7 col-lg-6 col-md-12">
                            <div class="newsletter-content">
                                <i class="fa-regular fa-paper-plane"></i>
                                <h2 class="title">Sign Up for get 10% Weekly <span>Newsletter</span></h2>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6 col-md-10">
                            <div class="newsletter-form">
                                <input type="text" placeholder="Your email here..."/>
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;