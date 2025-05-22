import React from 'react';

const Header = () => {
    return (
          <header>
      <div className="header-top-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header-top-left">
                <a href="#">Welcome! Free Shipping on orders over US$29.99</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-top-right">
                <ul>
                  <li><a href="become-vendor.html">Become a Vendor</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-search-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3">
              <div className="logo">
                <a href=""
                  ><img src="assets/img/logo/logo.png" alt=""
                /></a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-9">
              <div
                className="d-block d-sm-flex align-items-center justify-content-end"
              >
                <div className="header-search-wrap">
                  <form action="#">
                    <input type="text" placeholder="Search for product..." />
                    <select className="custom-select">
                      <option va="">All Categories</option>
                      <option>Women's Clothing</option>
                      <option>Men's Clothing</option>
                      <option>Luggage & Bags</option>
                    </select>
                    <button><i className="fas fa-search"></i></button>
                  </form>
                </div>
                <div className="header-action">
                  <ul>
                    <li>
                      <a href="#"><i className="far fa-star"></i>Wishlist</a>
                    </li>
                    <li>
                      <a href="#"><i className="fas fa-redo"></i>Compare</a>
                    </li>
                    <li className="header-shop">
                      <a href="#"
                        ><i className="fa-solid fa-cart-shopping"></i>Cart
                        
                        <span className="cart-count">0</span>
                      </a>
                    </li>
                    <li className="header-sine-in">
                      <a href="#">
                        <i className="fa-solid fa-user"></i>
                        <p>Hello, Sign in : <span>My Account</span></p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="menu-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo d-none">
                    <a href="index-2.html"
                      ><img src="assets/img/logo/w_logo.png" alt=""
                    /></a>
                  </div>
                  <div className="header-category">
                    <a href="#" className="cat-toggle">
                      <i className="fas fa-bars"></i>
                      Browse Categories
                      <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="category-menu">
                      <li className="add-megamenu">
                        <a href="#"
                          ><i className="fa-solid fa-gear"></i>How to add
                          MegaMenu</a
                        >
                      </li>
                      <li>
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Health and Beauty
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Smartphone &
                          Table</a
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Automotive & Motorcycle
                        </a>
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Furniture
                          <span>30%</span></a
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Sport & Outdoors</a
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Electronics</a
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Bags & shoe</a
                        >
                      </li>
                      <li>
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Accessories</a
                        >
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>entanglement</a
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/shop"
                          ><i className="fa-solid fa-list"></i>Outdoor and
                          Nature</a
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Batteries</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Electronic Cigarettes</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Smart Electronics</a>
                            <ul>
                              <li><a href="/shop">Cables & Adapters</a></li>
                              <li><a href="/shop">Chargers</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li><a href="/shop">Light Bulbs</a></li>
                              <li><a href="/shop">Watch Fashion</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Accessories & Parts</a>
                            <ul>
                              <li><a href="/shop">Projectors</a></li>
                              <li>
                                <a href="/shop">Audio Amplifier Boards</a>
                              </li>
                              <li><a href="/shop">Smart Electronics</a></li>
                              <li><a href="/shop">Bags & Cases</a></li>
                              <li>
                                <a href="/shop">Tees, Knits & Pools</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Electronic Cigarettes</a>
                            <ul>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">Projectors</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Portable Audio & Video</a>
                            <ul>
                              <li>
                                <a href="/shop">Portable Audio & Video</a>
                              </li>
                              <li><a href="/shop">Audio & Video</a></li>
                              <li><a href="/shop">Televisions</a></li>
                              <li><a href="/shop">TV Receivers</a></li>
                              <li><a href="/shop">TV Sticks</a></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                            <a href="/shop">Audio & Video</a>
                            <ul>
                              <li className="mega-menu-banner">
                                <a href="/shop"
                                  ><img
                                    src="assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="more_slide_open">
                          <li>
                            <a href="/shop"
                              ><i className="fa-solid fa-list"></i>Health
                              Product<span>-20%</span></a
                            >
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/shop"
                              ><i className="fa-solid fa-list"></i>Western
                              woman</a
                            >
                            <ul className="megamenu">
                              <li className="sub-column-item">
                                <a href="/shop">Accessories & Parts</a>
                                <ul>
                                  <li>
                                    <a href="/shop">Cables & Adapters</a>
                                  </li>
                                  <li><a href="/shop">Batteries</a></li>
                                  <li><a href="/shop">Chargers</a></li>
                                  <li><a href="/shop">Bags & Cases</a></li>
                                  <li>
                                    <a href="/shop"
                                      >Electronic Cigarettes</a
                                    >
                                  </li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                                <a href="/shop">Smart Electronics</a>
                                <ul>
                                  <li>
                                    <a href="/shop">Cables & Adapters</a>
                                  </li>
                                  <li><a href="/shop">Chargers</a></li>
                                  <li><a href="/shop">Bags & Cases</a></li>
                                  <li><a href="/shop">Light Bulbs</a></li>
                                  <li><a href="/shop">Watch Fashion</a></li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                                <a href="/shop">Accessories & Parts</a>
                                <ul>
                                  <li><a href="/shop">Projectors</a></li>
                                  <li>
                                    <a href="/shop"
                                      >Audio Amplifier Boards</a
                                    >
                                  </li>
                                  <li>
                                    <a href="/shop">Smart Electronics</a>
                                  </li>
                                  <li><a href="/shop">Bags & Cases</a></li>
                                  <li>
                                    <a href="/shop">Tees, Knits & Pools</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                                <a href="/shop">Electronic Cigarettes</a>
                                <ul>
                                  <li><a href="/shop">Audio & Video</a></li>
                                  <li><a href="/shop">Televisions</a></li>
                                  <li><a href="/shop">TV Receivers</a></li>
                                  <li><a href="/shop">Projectors</a></li>
                                  <li><a href="/shop">TV Sticks</a></li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                                <a href="/shop">Portable Audio & Video</a>
                                <ul>
                                  <li>
                                    <a href="/shop"
                                      >Portable Audio & Video</a
                                    >
                                  </li>
                                  <li><a href="/shop">Audio & Video</a></li>
                                  <li><a href="/shop">Televisions</a></li>
                                  <li><a href="/shop">TV Receivers</a></li>
                                  <li><a href="/shop">TV Sticks</a></li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                                <a href="/shop">Audio & Video</a>
                                <ul>
                                  <li className="mega-menu-banner">
                                    <a href="/shop"
                                      ><img
                                        src="assets/img/images/megamenu_banner.jpg"
                                        alt=""
                                    /></a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/shop"
                              ><i className="fa-solid fa-list"></i>Industrial
                              Product</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li className="more-categories">
                        All Categories
                        <i className="fas fa-chevron-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-item">
                        <a href="/shop">SHOP</a>
                      </li>
                      <li><a href="promotion.html">PROMOTION</a></li>
                      <li className="menu-item-has-children">
                        <a href="#">BLOG</a>
                        <ul className="submenu">
                          <li><a href="blog.html">Our blog</a></li>
                          <li><a href="blog-details.html">blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="#">SPECIAL</a></li>
                      <li className="menu-item-has-children">
                        <a href="#">PAGES</a>
                        <ul className="submenu">
                          <li>
                            <a href="become-vendor.html">become a vendor</a>
                          </li>
                          <li>
                            <a href="vendor-profile.html">vendor Profile</a>
                          </li>
                          <li>
                            <a href="vendor-setting.html">vendor setting</a>
                          </li>
                          <li><a href="coupon.html">coupon list</a></li>
                          <li><a href="contact.html">contact</a></li>
                        </ul>
                      </li>
                      <li><a href="vendor-list.html">vendor Store List</a></li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-btn">
                        <a href="#"
                          >Super Discount
                          <img
                            src="assets/img/images/discount_shape.png"
                            alt=""
                        /></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn"><i className="fa-solid fa-xmark"></i></div>
                  <div className="nav-logo">
                    <a href="index-2.html"
                      ><img src="assets/img/logo/logo.png" alt="" title=""
                    /></a>
                  </div>
                  <div className="menu-outer">
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <a href="#"><span className="fab fa-twitter"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-youtube"></span></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
};

export default Header;