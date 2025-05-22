"use client"
import React from 'react';

const Blogs = () => {
    return (
            <section class="blog-area pt-60 pb-60">
        <div class="container">
          <div class="row mb-40">
            <div class="col-lg-6 col-md-6">
              <div class="section-title">
                <h2 class="title">Most Popular Blog</h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="view-btn text-end">
                <a href="blog.html"
                  >View All Post<i class="fa-solid fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-6 col-md-10 col-sm-9">
              <div class="blog-item mb-30">
                <div class="blog-thumb">
                  <a href="blog-details.html"
                    ><img src="assets/img/blog/blog_img01.jpg" alt=""
                  /></a>
                </div>
                <div class="blog-content">
                  <div class="comment">
                    <a href="#">
                      <i class="fa-regular fa-comment"></i>
                      <span>18</span>
                    </a>
                  </div>
                  <a href="#" class="tag">ecommerce</a>
                  <h4 class="title">
                    <a href="blog-details.html"
                      >The New Sony Solo the Cinematic Dream Brings</a
                    >
                  </h4>
                  <p>
                    Lorem Ipsum is simply dumy text the printing and industry
                    orem Ipsum been industry's standard dummy.
                  </p>
                  <div class="blog-meta">
                    <ul>
                      <li>JOHN SMITH .</li>
                      <li><a href="blog-details.html">read more</a></li>
                      <li>. february 10,2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-10 col-sm-9">
              <div class="blog-item mb-30">
                <div class="blog-thumb">
                  <a href="blog-details.html"
                    ><img src="assets/img/blog/blog_img02.jpg" alt=""
                  /></a>
                </div>
                <div class="blog-content">
                  <div class="comment">
                    <a href="#">
                      <i class="fa-regular fa-comment"></i>
                      <span>09</span>
                    </a>
                  </div>
                  <a href="#" class="tag">together</a>
                  <h4 class="title">
                    <a href="blog-details.html"
                      >Closeup of woman hands buying online with credit card</a
                    >
                  </h4>
                  <p>
                    Lorem Ipsum is simply dumy text the printing and industry
                    orem Ipsum been industry's standard dummy.
                  </p>
                  <div class="blog-meta">
                    <ul>
                      <li>JOHN SMITH .</li>
                      <li><a href="blog-details.html">read more</a></li>
                      <li>. february 10,2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-10 col-sm-9">
              <div class="blog-item mb-30">
                <div class="blog-thumb">
                  <a href="blog-details.html"
                    ><img src="assets/img/blog/blog_img03.jpg" alt=""
                  /></a>
                </div>
                <div class="blog-content">
                  <div class="comment">
                    <a href="#">
                      <i class="fa-regular fa-comment"></i>
                      <span>03</span>
                    </a>
                  </div>
                  <a href="#" class="tag">spending</a>
                  <h4 class="title">
                    <a href="blog-details.html"
                      >Joyful father and son having fun spending tim</a
                    >
                  </h4>
                  <p>
                    Lorem Ipsum is simply dumy text the printing and industry
                    orem Ipsum been industry's standard dummy.
                  </p>
                  <div class="blog-meta">
                    <ul>
                      <li>JOHN SMITH .</li>
                      <li><a href="blog-details.html">read more</a></li>
                      <li>. february 10,2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
)}

export default Blogs;