'use client'
import React, { useState } from 'react';

const page = () => {
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState(Array(6).fill(null));
  const [productData, setProductData] = useState({
    name: '',
    category: 't-shirt',
    slug: '',
    description: '',
    colors: ['#ff6191', '#33317d', '#56d4b7', '#009688'],
    sizes: [],
    price: '',
    quantity: '',
    fullDetail: '',
    tags: []
  });

  const handleImageUpload = (e, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (index === null) {
        setMainImage(event.target.result);
      } else {
        const newThumbnails = [...thumbnails];
        newThumbnails[index] = event.target.result;
        setThumbnails(newThumbnails);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (index, color) => {
    const newColors = [...productData.colors];
    newColors[index] = color;
    setProductData(prev => ({ ...prev, colors: newColors }));
  };

  const handleSizeToggle = (size) => {
    setProductData(prev => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setProductData(prev => ({ ...prev, tags }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...productData, mainImage, thumbnails });
  };

  return (
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
          <div>
            <h1>Add Product</h1>
            <p className="breadcrumbs">
              <span><a href="/admin">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>
              <span>Product</span>
            </p>
          </div>
          <div>
            <a href="/admin/product-list" className="btn btn-primary">View All</a>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card card-default">
              <div className="card-header card-header-border-bottom">
                <h2>Add Product</h2>
              </div>

              <div className="card-body">
                <div className="row ec-vendor-uploads">
                  {/* Image Upload Section */}
                  <div className="col-lg-4">
                    <div className="ec-vendor-img-upload">
                      <div className="ec-vendor-main-img">
                        <div className="avatar-upload">
                          <div className="avatar-edit">
                            <input 
                              type='file' 
                              id="imageUpload" 
                              className="ec-image-upload"
                              accept=".png, .jpg, .jpeg"
                              onChange={(e) => handleImageUpload(e)}
                            />
                            <label htmlFor="imageUpload">
                              <img src="../assets/admin_assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                            </label>
                          </div>
                          <div className="avatar-preview ec-preview">
                            <div className="imagePreview ec-div-preview">
                              <img 
                                className="ec-image-preview"
                                src={mainImage || "../assets/admin_assets/img/products/vender-upload-preview.jpg"}
                                alt="preview"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="thumb-upload-set colo-md-12">
                          {thumbnails.map((thumb, index) => (
                            <div className="thumb-upload" key={index}>
                              <div className="thumb-edit">
                                <input 
                                  type='file' 
                                  id={`thumbUpload0${index+1}`}
                                  className="ec-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                  onChange={(e) => handleImageUpload(e, index)}
                                />
                                <label htmlFor={`thumbUpload0${index+1}`}>
                                  <img src="../assets/admin_assets/img/icons/edit.svg" className="svg_img header_svg" alt="edit" />
                                </label>
                              </div>
                              <div className="thumb-preview ec-preview">
                                <div className="image-thumb-preview">
                                  <img 
                                    className="image-thumb-preview ec-image-preview"
                                    src={thumb || "../assets/admin_assets/img/products/vender-upload-thumb-preview.jpg"}
                                    alt="thumb"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Form Section */}
                  <div className="col-lg-8">
                    <div className="ec-vendor-upload-detail">
                      <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                          <label htmlFor="productName" className="form-label">Product name</label>
                          <input 
                            type="text" 
                            className="form-control slug-title" 
                            id="productName"
                            name="name"
                            value={productData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">Select Categories</label>
                          <select 
                            name="category"
                            id="Categories" 
                            className="form-select"
                            value={productData.category}
                            onChange={handleChange}
                          >
                            <optgroup label="Fashion">
                              <option value="t-shirt">T-shirt</option>
                              <option value="dress">Dress</option>
                            </optgroup>
                            <optgroup label="Furniture">
                              <option value="table">Table</option>
                              <option value="sofa">Sofa</option>
                            </optgroup>
                            <optgroup label="Electronic">
                              <option value="phone">I Phone</option>
                              <option value="laptop">Laptop</option>
                            </optgroup>
                          </select>
                        </div>
                        
                        <div className="col-md-12">
                          <label htmlFor="slug" className="col-12 col-form-label">Slug</label> 
                          <div className="col-12">
                            <input 
                              id="slug" 
                              name="slug" 
                              className="form-control here set-slug" 
                              type="text"
                              value={productData.slug}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        
                        <div className="col-md-12">
                          <label className="form-label">Sort Description</label>
                          <textarea 
                            className="form-control" 
                            rows="2"
                            name="description"
                            value={productData.description}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        
                        <div className="col-md-4 mb-25">
                          <label className="form-label">Colors</label>
                          {productData.colors.map((color, index) => (
                            <input 
                              key={index}
                              type="color" 
                              className="form-control form-control-color"
                              id={`colorInput${index+1}`}
                              value={color}
                              onChange={(e) => handleColorChange(index, e.target.value)}
                              title="Choose your color"
                            />
                          ))}
                        </div>
                        
                        <div className="col-md-8 mb-25">
                          <label className="form-label">Size</label>
                          <div className="form-checkbox-box">
                            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                              <div className="form-check form-check-inline" key={size}>
                                <input 
                                  type="checkbox" 
                                  name="size1" 
                                  value={size}
                                  checked={productData.sizes.includes(size)}
                                  onChange={() => handleSizeToggle(size)}
                                />
                                <label>{size}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">Price <span>( In USD )</span></label>
                          <input 
                            type="number" 
                            className="form-control" 
                            id="price1"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label">Quantity</label>
                          <input 
                            type="number" 
                            className="form-control" 
                            id="quantity1"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleChange}
                            min="0"
                            required
                          />
                        </div>
                        
                        <div className="col-md-12">
                          <label className="form-label">Full Detail</label>
                          <textarea 
                            className="form-control" 
                            rows="4"
                            name="fullDetail"
                            value={productData.fullDetail}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        
                        <div className="col-md-12">
                          <label className="form-label">Product Tags <span>( Type and make comma to separate tags )</span></label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="group_tag"
                            name="group_tag"
                            value={productData.tags.join(', ')}
                            onChange={handleTagsChange}
                            placeholder=""
                          />
                        </div>
                        
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;