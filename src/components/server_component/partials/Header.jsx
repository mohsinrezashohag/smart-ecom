import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
          <header>
      <div className="header-top-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header-top-left">
               <Link href="#">Welcome! Free Shipping on orders over US$29.99</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-top-right">
                <ul>
                  <li><Link href="/became-vendor">Become a Vendor</Link></li>
                  <li><Link href="/blogs">Blog</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
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
                <Link href="/"
                  ><img src="/assets/img/logo/logo.png" alt=""
                /></Link>
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
                     <Link href="#"><i className="far fa-star"></i>Wishlist</Link>
                    </li>
                    <li>
                     <Link href="#"><i className="fas fa-redo"></i>Compare</Link>
                    </li>
                    <li className="header-shop">
                     <Link href="#"
                        ><i className="fa-solid fa-cart-shopping"></i>Cart
                        <span className="cart-count">0</span>
                      </Link>
                    </li>
                    <li className="header-sine-in">
                     <Link href="#">
                        <i className="fa-solid fa-user"></i>
                        <p>Hello, Sign in : <span>My Account</span></p>
                      </Link>
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
                    <Link href="/"
                      ><img src="/assets/img/logo/w_logo.png" alt=""
                    /></Link>
                  </div>
                  <div className="header-category">
                   <Link href="#" className="cat-toggle">
                      <i className="fas fa-bars"></i>
                      Browse Categories RIYAN
                      <i className="fas fa-angle-down"></i>
                    </Link>
                    <ul className="category-menu">
                      <li className="add-megamenu">
                       <Link href="#"
                          ><i className="fa-solid fa-gear"></i>How to add
                          MegaMenu</Link
                        >
                      </li>
                      <li>
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Health and Beauty
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Smartphone &
                          Table</Link
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Automotive & Motorcycle
                        </Link>
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Furniture
                          <span>30%</span></Link
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Sport & Outdoors</Link
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Electronics</Link
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Bags & shoe</Link
                        >
                      </li>
                      <li>
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Accessories</Link
                        >
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>entanglement</Link
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                       <Link href="/shop"
                          ><i className="fa-solid fa-list"></i>Outdoor and
                          Nature</Link
                        >
                        <ul className="megamenu">
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Batteries</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Electronic Cigarettes</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Smart Electronics</Link>
                            <ul>
                              <li><Link href="/shop">Cables & Adapters</Link></li>
                              <li><Link href="/shop">Chargers</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li><Link href="/shop">Light Bulbs</Link></li>
                              <li><Link href="/shop">Watch Fashion</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Accessories & Parts</Link>
                            <ul>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li>
                               <Link href="/shop">Audio Amplifier Boards</Link>
                              </li>
                              <li><Link href="/shop">Smart Electronics</Link></li>
                              <li><Link href="/shop">Bags & Cases</Link></li>
                              <li>
                               <Link href="/shop">Tees, Knits & Pools</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Electronic Cigarettes</Link>
                            <ul>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">Projectors</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Portable Audio & Video</Link>
                            <ul>
                              <li>
                               <Link href="/shop">Portable Audio & Video</Link>
                              </li>
                              <li><Link href="/shop">Audio & Video</Link></li>
                              <li><Link href="/shop">Televisions</Link></li>
                              <li><Link href="/shop">TV Receivers</Link></li>
                              <li><Link href="/shop">TV Sticks</Link></li>
                            </ul>
                          </li>
                          <li className="sub-column-item">
                           <Link href="/shop">Audio & Video</Link>
                            <ul>
                              <li className="mega-menu-banner">
                               <Link href="/shop"
                                  ><img
                                    src="/assets/img/images/megamenu_banner.jpg"
                                    alt=""
                                /></Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="more_slide_open">
                          <li>
                           <Link href="/shop"
                              ><i className="fa-solid fa-list"></i>Health
                              Product<span>-20%</span></Link
                            >
                          </li>
                          <li className="menu-item-has-children">
                           <Link href="/shop"
                              ><i className="fa-solid fa-list"></i>Western
                              woman</Link
                            >
                            <ul className="megamenu">
                              <li className="sub-column-item">
                               <Link href="/shop">Accessories & Parts</Link>
                                <ul>
                                  <li>
                                   <Link href="/shop">Cables & Adapters</Link>
                                  </li>
                                  <li><Link href="/shop">Batteries</Link></li>
                                  <li><Link href="/shop">Chargers</Link></li>
                                  <li><Link href="/shop">Bags & Cases</Link></li>
                                  <li>
                                   <Link href="/shop"
                                      >Electronic Cigarettes</Link
                                    >
                                  </li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                               <Link href="/shop">Smart Electronics</Link>
                                <ul>
                                  <li>
                                   <Link href="/shop">Cables & Adapters</Link>
                                  </li>
                                  <li><Link href="/shop">Chargers</Link></li>
                                  <li><Link href="/shop">Bags & Cases</Link></li>
                                  <li><Link href="/shop">Light Bulbs</Link></li>
                                  <li><Link href="/shop">Watch Fashion</Link></li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                               <Link href="/shop">Accessories & Parts</Link>
                                <ul>
                                  <li><Link href="/shop">Projectors</Link></li>
                                  <li>
                                   <Link href="/shop"
                                      >Audio Amplifier Boards</Link
                                    >
                                  </li>
                                  <li>
                                   <Link href="/shop">Smart Electronics</Link>
                                  </li>
                                  <li><Link href="/shop">Bags & Cases</Link></li>
                                  <li>
                                   <Link href="/shop">Tees, Knits & Pools</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                               <Link href="/shop">Electronic Cigarettes</Link>
                                <ul>
                                  <li><Link href="/shop">Audio & Video</Link></li>
                                  <li><Link href="/shop">Televisions</Link></li>
                                  <li><Link href="/shop">TV Receivers</Link></li>
                                  <li><Link href="/shop">Projectors</Link></li>
                                  <li><Link href="/shop">TV Sticks</Link></li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                               <Link href="/shop">Portable Audio & Video</Link>
                                <ul>
                                  <li>
                                   <Link href="/shop"
                                      >Portable Audio & Video</Link
                                    >
                                  </li>
                                  <li><Link href="/shop">Audio & Video</Link></li>
                                  <li><Link href="/shop">Televisions</Link></li>
                                  <li><Link href="/shop">TV Receivers</Link></li>
                                  <li><Link href="/shop">TV Sticks</Link></li>
                                </ul>
                              </li>
                              <li className="sub-column-item">
                               <Link href="/shop">Audio & Video</Link>
                                <ul>
                                  <li className="mega-menu-banner">
                                   <Link href="/shop"
                                      ><img
                                        src="/assets/img/images/megamenu_banner.jpg"
                                        alt=""
                                    /></Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                           <Link href="/shop"
                              ><i className="fa-solid fa-list"></i>Industrial
                              Product</Link
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
                       <Link href="/">Home</Link>
                      </li>
                      <li className="menu-item">
                       <Link href="/shop">SHOP</Link>
                      </li>
                      <li><Link href="/promotion">PROMOTION</Link></li>
                      <li className="menu-item-has-children">
                       <Link href="#">BLOG</Link>
                        <ul className="submenu">
                          <li><Link href="/blogs">Our blog</Link></li>
                          <li><Link href="/blog/hello-blog">blog Details</Link></li>
                        </ul>
                      </li>
                      <li><Link href="#">SPECIAL</Link></li>
                      <li className="menu-item-has-children">
                       <Link href="#">PAGES</Link>
                        <ul className="submenu">
                          <li>
                           <Link href="/became-vendor">become a vendor</Link>
                          </li>
                          <li>
                           <Link href="/vendor/profile">vendor Profile</Link>
                          </li>
                          <li>
                           <Link href="/vendor/profile/setting">vendor setting</Link>
                          </li>
                          <li><Link href="coupon.html">coupon list</Link></li>
                          <li><Link href="/contact-us">contact</Link></li>
                        </ul>
                      </li>
                      <li><Link href="vendor-list.html">vendor Store List</Link></li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-btn">
                       <Link href="#"
                          >Super Discount
                          <img
                            src="/assets/img/images/discount_shape.png"
                            alt=""
                        /></Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn"><i className="fa-solid fa-xmark"></i></div>
                  <div className="nav-logo">
                    <Link href="/"
                      ><img src="/assets/img/logo/logo.png" alt="" title=""
                    /></Link>
                  </div>
                  <div className="menu-outer">
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                       <Link href="#"><span className="fab fa-twitter"></span></Link>
                      </li>
                      <li>
                       <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                      </li>
                      <li>
                       <Link href="#"><span className="fab fa-pinterest-p"></span></Link>
                      </li>
                      <li>
                       <Link href="#"><span className="fab fa-instagram"></span></Link>
                      </li>
                      <li>
                       <Link href="#"><span className="fab fa-youtube"></span></Link>
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