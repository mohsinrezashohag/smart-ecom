import React from 'react';

const page = () => {
    return (
        <main>

            <section class="breadcrumb-area-four breadcrumb-bg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="breadcrumb-content">
                                <h2 class="title">become a Vendor</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">become a vendor</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="breadcrumb-img text-end">
                                <img src="assets/img/images/breadcrumb_img.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="vendor-registration-area pt-90 pb-90">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="vr-form-box">
                                <h3 class="title">Vendor Registration Form</h3>
                                <form action="#">
                                    <div class="form-grp">
                                        <label for="name">User Name *</label>
                                        <input type="text"/>
                                    </div>
                                    <div class="form-grp">
                                        <label for="email">Email address *</label>
                                        <input type="email"/>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <label for="Password">Password *</label>
                                                <input type="Password"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-grp">
                                                <label for="Password">Re-Password *</label>
                                                <input type="Password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-grp select-grp">
                                        <label for="Sort by">Vendor Category *</label>
                                        <select id="shortBy" name="select" class="form-select" aria-label="Default select example">
                                            <option value="">Women Fashion</option>
                                            <option>Free Shipping</option>
                                            <option>Best Match</option>
                                            <option>Newest Item</option>
                                            <option>Size A - Z</option>
                                        </select>
                                    </div>
                                    <div class="form-grp checkbox-grp">
                                        <input type="checkbox" id="checkbox"/>
                                        <label for="checkbox">Your personal data will be used to support your experience throughout this website</label>
                                    </div>
                                    <button type="submit">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="newsletter-area-two">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="newsletter-content">
                                <i class="fa-regular fa-paper-plane"></i>
                                <h2 class="title">Sign Up for get 10% Weekly <span>Newsletter</span></h2>
                            </div>
                        </div>
                        <div class="col-lg-5">
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