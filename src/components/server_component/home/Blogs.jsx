import React from 'react';

const Blogs = () => {
    return (
          <section className="blog-area pt-60 pb-60">
  <div className="container">
    <div className="row mb-40">
      <div className="col-lg-6 col-md-6">
        <div className="section-title">
          <h2 className="title">Most Popular Blog by IGL Group</h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="view-btn text-end">
          <a href="blog.html">View All Post<i className="fa-solid fa-angle-right" /></a>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-4 col-lg-6 col-md-10 col-sm-9">
        <div className="blog-item mb-30">
          <div className="blog-thumb">
            <a href="blog-details.html"><img src="assets/img/blog/blog_img01.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <div className="comment">
              <a href="#">
                <i className="fa-regular fa-comment" />
                <span>18</span>
              </a>
            </div>
            <a href="#" className="tag">ecommerce</a>
            <h4 className="title">
              <a href="blog-details.html">The New Sony Solo the Cinematic Dream Brings</a>
            </h4>
            <p>
              Lorem Ipsum is simply dumy text the printing and industry
              orem Ipsum been industry's standard dummy.
            </p>
            <div className="blog-meta">
              <ul>
                <li>JOHN SMITH .</li>
                <li><a href="blog-details.html">read more</a></li>
                <li>. february 10,2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-10 col-sm-9">
        <div className="blog-item mb-30">
          <div className="blog-thumb">
            <a href="blog-details.html"><img src="assets/img/blog/blog_img02.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <div className="comment">
              <a href="#">
                <i className="fa-regular fa-comment" />
                <span>09</span>
              </a>
            </div>
            <a href="#" className="tag">together</a>
            <h4 className="title">
              <a href="blog-details.html">Closeup of woman hands buying online with credit card</a>
            </h4>
            <p>
              Lorem Ipsum is simply dumy text the printing and industry
              orem Ipsum been industry's standard dummy.
            </p>
            <div className="blog-meta">
              <ul>
                <li>JOHN SMITH .</li>
                <li><a href="blog-details.html">read more</a></li>
                <li>. february 10,2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-10 col-sm-9">
        <div className="blog-item mb-30">
          <div className="blog-thumb">
            <a href="blog-details.html"><img src="assets/img/blog/blog_img03.jpg" alt /></a>
          </div>
          <div className="blog-content">
            <div className="comment">
              <a href="#">
                <i className="fa-regular fa-comment" />
                <span>03</span>
              </a>
            </div>
            <a href="#" className="tag">spending</a>
            <h4 className="title">
              <a href="blog-details.html">Joyful father and son having fun spending tim</a>
            </h4>
            <p>
              Lorem Ipsum is simply dumy text the printing and industry
              orem Ipsum been industry's standard dummy.
            </p>
            <div className="blog-meta">
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

    );
};

export default Blogs;