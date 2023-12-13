import React, { useState } from 'react' ;

function SizeInfo() {
      //! Size
    const sizes = ['S', 'M', 'L', 'XL', '2XL'];
    const [selectedSize, setSelectedSize] = useState(''); 
    
    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    return (
        <div>
            <div style={{ display:"flex", justifyContent:"space-between"}}>
                <p className="fw-bold ">
                  Size Options
                </p>
                <p className="fw-bold"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Size Guide
                </p>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                > {size} </button>
              ))}
            </div>
            
          </div>
    )
}

export default SizeInfo ;
