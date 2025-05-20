import React from 'react';

const NewsLetter = () => {
    return (
         <section class="newsletter-area pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="newsletter-wrap">
                <div class="newsletter-content">
                  <h2 class="title">
                    Sign Up for Weekly <span>Newsletter</span>
                  </h2>
                  <p>
                    Get 10% off new collection special Investigationes
                    demonstraverunt
                  </p>
                </div>
                <div class="newsletter-form">
                  <form action="#">
                    <input type="text" placeholder="Your email here..." />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default NewsLetter;