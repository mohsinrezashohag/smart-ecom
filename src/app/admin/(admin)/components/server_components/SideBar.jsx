import React from 'react';
import Link from 'next/link';

const SideBar = () => {
    return (
        <div className="ec-left-sidebar h-100 ec-bg-sidebar">
            <div id="sidebar" className="sidebar ec-sidebar-footer">
                {/* begin sidebar scrollbar */}
                <div className="ec-navigation">
                    {/* sidebar menu */}
                    <ul className="nav sidebar-inner" id="sidebar-menu">
                        {/* Dashboard */}
                        <li className="active">
                            <Link className="sidenav-item-link" href="/admin">
                                    <i className="mdi mdi-view-dashboard-outline"></i>
                                    <span style={{color: "black"}} className="nav-text">Dashboard</span>
                            </Link>
                            <hr />
                        </li>

                        {/* Vendors */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-account-group-outline"></i>
                                <span className="nav-text">Vendors</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="vendors" data-parent="#sidebar-menu">
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/vendor-card.html">
                                                <span className="nav-text">Vendor Grid</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/vendor-list.html">
                                                <span className="nav-text">Vendor List</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/vendor-profile.html">
                                                <span className="nav-text">Vendors Profile</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Users */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-account-group"></i>
                                <span className="nav-text">Users</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
                                    <li>
                                        <Link className="sidenav-item-link" href="/user-card.html">
                                                <span className="nav-text">User Grid</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/user-list.html">
                                                <span className="nav-text">User List</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/user-profile.html">
                                                <span className="nav-text">Users Profile</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                        </li>

                        {/* Category */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-dns-outline"></i>
                                <span className="nav-text">Categories</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/main-category.html">
                                                <span className="nav-text">Main Category</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/sub-category.html">
                                                <span className="nav-text">Sub Category</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Products */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-palette-advanced"></i>
                                <span className="nav-text">Products</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/admin/add-product">
                                                <span className="nav-text">Add Product</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/product-list.html">
                                                <span className="nav-text">List Product</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/product-grid.html">
                                                <span className="nav-text">Grid Product</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/product-detail.html">
                                                <span className="nav-text">Product Detail</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Orders */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-cart"></i>
                                <span className="nav-text">Orders</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/new-order.html">
                                                <span className="nav-text">New Order</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/order-history.html">
                                                <span className="nav-text">Order History</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/order-detail.html">
                                                <span className="nav-text">Order Detail</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/invoice.html">
                                                <span className="nav-text">Invoice</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Reviews */}
                        <li>
                            <Link className="sidenav-item-link" href="/review-list.html">
                                    <i className="mdi mdi-star-half"></i>
                                    <span className="nav-text">Reviews</span>
                            </Link>
                        </li>

                        {/* Brands */}
                        <li>
                            <Link className="sidenav-item-link" href="/brand-list.html">
                                    <i className="mdi mdi-tag-faces"></i>
                                    <span className="nav-text">Brands</span>
                            </Link>
                            <hr />
                        </li>

                        {/* Authentication */}
                        <li className="has-sub">
                            <Link className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-login"></i>
                                <span className="nav-text">Authentication</span> <b className="caret"></b>
                            </Link>
                            <div className="collapse">
                                <ul className="sub-menu" id="authentication" data-parent="#sidebar-menu">
                                    <li className="">
                                        <Link href="/sign-in.html">
                                                <span className="nav-text">Sign In</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/sign-up.html">
                                                <span className="nav-text">Sign Up</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Icons */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-diamond-stone"></i>
                                <span className="nav-text">Icons</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="icons" data-parent="#sidebar-menu">
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/material-icon.html">
                                                <span className="nav-text">Material Icon</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/font-awsome-icons.html">
                                                <span className="nav-text">Font Awsome Icon</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="sidenav-item-link" href="/flag-icon.html">
                                                <span className="nav-text">Flag Icon</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Other Pages */}
                        <li className="has-sub">
                            <a className="sidenav-item-link" href="javascript:void(0)">
                                <i className="mdi mdi-image-filter-none"></i>
                                <span className="nav-text">Other Pages</span> <b className="caret"></b>
                            </a>
                            <div className="collapse">
                                <ul className="sub-menu" id="otherpages" data-parent="#sidebar-menu">
                                    <li className="has-sub">
                                        <Link href="/404.html">
                                            404 Page
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;