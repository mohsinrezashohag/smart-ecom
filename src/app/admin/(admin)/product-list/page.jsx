const page = () => {
    return (
        <div className="ec-content-wrapper">
  <div className="content">
    <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
      <div>
        <h1>Product</h1>
        <p className="breadcrumbs">
          <span><a href="index.html">Home</a></span>
          <span><i className="mdi mdi-chevron-right"></i></span>Product
        </p>
      </div>
      <div>
        <a href="/admin/add-product" className="btn btn-primary">Add Product</a>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card card-default">
          <div className="card-body">
            <div className="table-responsive">
              <table id="" className="table" style={{width: "100%"}}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Offer</th>
                    <th>Purchased</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Product rows would be mapped here */}
                  <tr>
                    <td><img className="tbl-thumb" src="../assets/admin_assets/img/products/p1.jpg" alt="Product Image" /></td>
                    <td>Baby shoes</td>
                    <td>$20</td>
                    <td>25% OFF</td>
                    <td>61</td>
                    <td>5421</td>
                    <td>ACTIVE</td>
                    <td>2021-10-30</td>
                    <td>
                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-outline-success">Info</button>
                        <button type="button"
                          className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false" data-display="static">
                          <span className="sr-only">Info</span>
                        </button>

                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Edit</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
  <td><img class="tbl-thumb" src="../assets/admin_assets/img/products/p2.jpg" alt="Wireless Headphones" /></td>
  <td>Wireless Headphones</td>
  <td>$99.99</td>
  <td>15% OFF</td>
  <td>42</td>
  <td>3215</td>
  <td>ACTIVE</td>
  <td>2021-11-15</td>
  <td>
    <div class="btn-group mb-1">
      <button type="button" class="btn btn-outline-success">Info</button>
      <button type="button"
        class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false" data-display="static">
        <span class="sr-only">Info</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Edit</a>
        <a class="dropdown-item" href="#">Delete</a>
      </div>
    </div>
  </td>
</tr>

<tr>
  <td><img class="tbl-thumb" src="../assets/admin_assets/img/products/p3.jpg" alt="Smart Watch" /></td>
  <td>Smart Watch</td>
  <td>$199.00</td>
  <td>10% OFF</td>
  <td>18</td>
  <td>1872</td>
  <td>LOW STOCK</td>
  <td>2021-12-05</td>
  <td>
    <div class="btn-group mb-1">
      <button type="button" class="btn btn-outline-warning">Info</button>
      <button type="button"
        class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false" data-display="static">
        <span class="sr-only">Info</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Edit</a>
        <a class="dropdown-item" href="#">Delete</a>
      </div>
    </div>
  </td>
</tr>

<tr>
  <td><img class="tbl-thumb" src="../assets/admin_assets/img/products/p4.jpg" alt="Bluetooth Speaker" /></td>
  <td>Bluetooth Speaker</td>
  <td>$79.50</td>
  <td>-</td>
  <td>37</td>
  <td>2453</td>
  <td>ACTIVE</td>
  <td>2022-01-10</td>
  <td>
    <div class="btn-group mb-1">
      <button type="button" class="btn btn-outline-success">Info</button>
      <button type="button"
        class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false" data-display="static">
        <span class="sr-only">Info</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Edit</a>
        <a class="dropdown-item" href="#">Delete</a>
      </div>
    </div>
  </td>
</tr>

<tr>
  <td><img class="tbl-thumb" src="../assets/admin_assets/img/products/p5.jpg" alt="Yoga Mat" /></td>
  <td>Yoga Mat</td>
  <td>$29.99</td>
  <td>20% OFF</td>
  <td>0</td>
  <td>892</td>
  <td>OUT OF STOCK</td>
  <td>2022-02-18</td>
  <td>
    <div class="btn-group mb-1">
      <button type="button" class="btn btn-outline-danger">Info</button>
      <button type="button"
        class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false" data-display="static">
        <span class="sr-only">Info</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Edit</a>
        <a class="dropdown-item" href="#">Delete</a>
      </div>
    </div>
  </td>
</tr>

<tr>
  <td><img class="tbl-thumb" src="../assets/admin_assets/img/products/p6.jpg" alt="Coffee Maker" /></td>
  <td>Coffee Maker</td>
  <td>$149.00</td>
  <td>FREE SHIPPING</td>
  <td>7</td>
  <td>673</td>
  <td>LOW STOCK</td>
  <td>2022-03-22</td>
  <td>
    <div class="btn-group mb-1">
      <button type="button" class="btn btn-outline-warning">Info</button>
      <button type="button"
        class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false" data-display="static">
        <span class="sr-only">Info</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Edit</a>
        <a class="dropdown-item" href="#">Delete</a>
      </div>
    </div>
  </td>
</tr>
                  
                  {/* More product rows... */}
                  {/* You would typically map through an array of products here */}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default page;