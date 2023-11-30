import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './singleProduct.css';

function SingleProduct() {
  //Slide
  const imgs = document.querySelectorAll('.img-select a');
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
          event.preventDefault();
          imgId = imgItem.dataset.id;
          slideImage();
      });
  });

  function slideImage(){
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

      document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  }

  window.addEventListener('resize', slideImage);
  
  //Qantity
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  //Size
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];
  const [selectedSize, setSelectedSize] = useState(''); 
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className = "card-wrapper ">
    <div className = "card shadow">
    
      <div className = "product-imgs">
        <div className = "img-display">
          <div className = "img-showcase">
            <img src = "https://i.pinimg.com/564x/a1/d7/7c/a1d77cfc3ebcef19453a30fffcd21b0f.jpg" alt = "image"/>
            <img src = "https://i.pinimg.com/564x/ee/08/77/ee0877745c4d5c1bf572ca397d3fef93.jpg" alt = "image"/>
            <img src = "https://i.pinimg.com/564x/a1/d7/7c/a1d77cfc3ebcef19453a30fffcd21b0f.jpg" alt = "image"/>
            <img src = "https://i.pinimg.com/564x/ee/08/77/ee0877745c4d5c1bf572ca397d3fef93.jpg" alt = "image"/>
          </div>
        </div>
        <div className = "img-select">
          <div className = "img-item">
            <a href = "#" data-id = "1">
              <img src = "https://i.pinimg.com/564x/a1/d7/7c/a1d77cfc3ebcef19453a30fffcd21b0f.jpg" alt = "image"/>
            </a>
          </div>
          <div className = "img-item">
            <a href = "#" data-id = "2">
            <img src = "https://i.pinimg.com/564x/ee/08/77/ee0877745c4d5c1bf572ca397d3fef93.jpg" alt = "image"/>
            </a>
          </div>
          <div className = "img-item">
            <a href = "#" data-id = "3">
              <img src = "https://i.pinimg.com/564x/a1/d7/7c/a1d77cfc3ebcef19453a30fffcd21b0f.jpg" alt = "image"/>
            </a>
          </div>
          <div className = "img-item">
            <a href = "#" data-id = "4">
            <img src = "https://i.pinimg.com/564x/ee/08/77/ee0877745c4d5c1bf572ca397d3fef93.jpg" alt = "image"/>
            </a>
          </div>
        </div>
      </div>
    
      <div className = "product-content">
        <h2 className = "product-title">Hoodie</h2>

        <div className = "product-price">
          <p>2.00 MAD</p>
        </div>
      
        <div className = "product-detail">

        <div className="">
            <div style={{ display:"flex", justifyContent:"space-between"}}>
                <p className="fw-bold ">
                  Size Options
                </p>
                <p className="fw-bold"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Size Guide
                </p>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Size Guide</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <table className="table table-hover">
                      <thead className="table-dark">
                          <tr>
                              <th scope="row">Hugo Boss Men</th>
                              <td>S</td>
                              <td>M</td>
                              <td>L</td>
                              <td>XL</td>
                              <td>2XL</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">Chest (inch)</th>
                              <td>36</td>
                              <td>38</td>
                              <td>40</td>
                              <td>42</td>
                              <td>44</td>
                          </tr>
                          <tr>
                              <th scope="row">Chest (cm)</th>
                              <td>91</td>
                              <td>95</td>
                              <td>100</td>
                              <td>107</td>
                              <td>113</td>
                          </tr>
                      </tbody>
                      <thead className="table-dark">
                          <tr>
                              <th scope="row">Hugo Boss Women</th>
                              <td>S</td>
                              <td>M</td>
                              <td>L</td>
                              <td>XL</td>
                              <td>2XL</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">Chest (inch)</th>
                              <td>33</td>
                              <td>34</td>
                              <td>36</td>
                              <td>38</td>
                              <td>40</td>
                          </tr>
                          <tr>
                              <th scope="row">Chest (cm)</th>
                              <td>82</td>
                              <td>85</td>
                              <td>88</td>
                              <td>92</td>
                              <td>96</td>
                          </tr>
                          </tbody>
                          <thead className="table-dark">
                          <tr>
                              <th scope="row">Footwear Men</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">US</th>
                              <td>4</td>
                              <td>5.5</td>
                              <td>7</td>
                              <td>8</td>
                              <td>9</td>
                              <td>10</td>
                              <td>11</td>
                          </tr>
                          <tr>
                              <th scope="row">UK</th>
                              <td>3.5</td>
                              <td>5</td>
                              <td>6</td>
                              <td>7</td>
                              <td>8</td>
                              <td>9</td>
                              <td>10</td>
                          </tr>
                          <tr>
                              <th scope="row">EU</th>
                              <td>36</td>
                              <td>38</td>
                              <td>40</td>
                              <td>41</td>
                              <td>42</td>
                              <td>44</td>
                              <td>45</td>
                          </tr>
                      </tbody>
                      <thead className="table-dark">
                          <tr>
                              <th scope="row">Footerwear Women</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row">US</th>
                              <td>5.5</td>
                              <td>7</td>
                              <td>8</td>
                              <td>9.5</td>
                              <td>10.5</td>
                              <td>11.5</td>
                              <td>12.5</td>
                          </tr>
                          <tr>
                              <th scope="row">UK</th>
                              <td>3.5</td>
                              <td>5</td>
                              <td>6</td>
                              <td>7</td>
                              <td>8</td>
                              <td>9</td>
                              <td>10</td>
                          </tr>
                          <tr>
                              <th scope="row">EU</th>
                              <td>36</td>
                              <td>38</td>
                              <td>40</td>
                              <td>41</td>
                              <td>42</td>
                              <td>44</td>
                              <td>45</td>
                          </tr>
                      </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          
            <div style={{ display:"flex", gap: 8, alignItems:'center'}}>
            {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`btn btn-outline-secondary ${selectedSize === size ? 'active' : ''}`}
              onClick={() => handleSizeChange(size)}
              style={{
                margin: 0,
                width: '80px',
                transition: 'background-color 0.3s, color 0.3s',
                backgroundColor: selectedSize === size ? 'black' : 'white',
                color: selectedSize === size ? 'white' : 'black',
                borderColor: selectedSize === size ? 'lightblue' : 'gray',
                fontWeight: selectedSize === size ? 'bold' : 'normal',
              }}
            >
              {size}
            </button>
          ))}
            </div>
          </div>

          <div className = "purchase-info">
         
         <input 
           type = "number"  
           id = "quantity"
           min = "0"
           value = {quantity}
           onChange = {handleQuantityChange}
         />

         <button type = "button" className = "btn">
           Add to Cart 
         </button>

         <button type = "button" className = "btn">
           Add to wish lit
         </button>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, 
            aspernatur quidem at sequi ipsa!
          </p>
              
          

       </div>

          <ul>
            <li>Available: <span>In stock</span></li>
            <li>Category: <span>Hoodie</span></li>
            <li>Shipping Area: <span>All over the country</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>

        </div>
        <div className='view'>
              <p className = "product-title fw-medium fs-5 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  View Product Details
              </p>

              <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <h3 id="offcanvasRightLabel"  >
                    Product Details
                  </h3>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  ...
                </div>
              </div>

          </div>
        
       
               
                
            

      </div>
    </div>
  </div>
   
  )
}

export default SingleProduct;