import React from "react";
import './Products.css';
import image1 from '../../assets/img/black hoodie.jpg'
import image2 from '../../assets/img/grayhoodie.jpg'
import image3 from '../../assets/img/whitehoodie.jpg'
import image4 from '../../assets/img/redhoodie.jpg'

function GreatProducts() {
  return (
    <React.Fragment>
      <section class="pt-3">
        <div class="container">
          <div class="row gx-3">
            <main class="col-lg-9">
              <div
                class="card-banner p-5 bg-primary rounded-5"
                style={{ height: "350px" }}
              >
                <div style={{ maxWidth: "500px" }}>
                  <h2 class="text-white">
                    Great products with <br />
                    best deals
                  </h2>
                  <p class="text-white">
                    No matter how far along you are in your sophistication as an
                    amateur astronomer, there is always one.
                  </p>
                  <a href="/" class="btn btn-light shadow-0 text-primary">
                    {" "}
                    View more{" "}
                  </a>
                </div>
              </div>
            </main>
            <aside class="col-lg-3">
              <div
                class="card-banner h-100 rounded-5"
                style={{ backgroundColor: "#f87217" }}
              >
                <div class="card-body text-center pb-5">
                  <h5 class="pt-5 text-white">Amazing Gifts</h5>
                  <p class="text-white">
                    No matter how far along you are in your sophistication
                  </p>
                  <a href="/" class="btn btn-outline-light">
                    {" "}
                    View more{" "}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="font-bold font-text flex justify-center mt-5 text-black">New arrivals</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">

        <div class="bg-gray-200 rounded-lg shadow-xl p-6 ml-3">
          <img src={image1} alt="Product image" class="w-full h-50 object-cover rounded-lg"/>
          <h2 class="text-xl font-bold mt-4 text-black">Black hoodie </h2>
          <p class="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis quam et ipsum tincidunt semper.</p>
          <a href="#" class="bg-black text-white font-bold rounded-lg mt-4 p-2 no-underline">Buy Now</a>
      </div>
        <div class="bg-gray-200 rounded-lg shadow-xl p-6">
          <img src={image2} alt="Product image" class="w-full h-48 object-cover rounded-lg"/>
          <h2 class="text-xl font-bold mt-4">Gray hoodie</h2>
          <p class="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis quam et ipsum tincidunt semper.</p>
          <a href="#" class="bg-black text-white font-bold rounded-lg mt-4 p-2 no-underline hover:">Buy Now</a>
      </div>
        <div class="bg-gray-200 rounded-lg shadow-xl p-6">
          <img src={image3} alt="Product image" class="w-full h-48 object-cover rounded-lg"/>
          <h2 class="text-xl font-bold mt-4">White hoodie</h2>
          <p class="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis quam et ipsum tincidunt semper.</p>
          <a href="#" class="bg-black text-white font-bold rounded-lg mt-4 p-2 no-underline">Buy Now</a>
      </div>
        <div class="bg-gray-200 rounded-lg shadow-xl p-6">
          <img src={image4} alt="Product image" class="w-full h-48 object-cover rounded-lg"/>
          <h2 class="text-xl font-bold mt-4">Red hoodie</h2>
          <p class="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis quam et ipsum tincidunt semper.</p>
            <a href="#" class="bg-black text-white font-bold rounded-lg mt-4 p-2 no-underline">Buy Now</a> 
      </div>
        </div>
            </section>
    </React.Fragment>
  );
}

export default GreatProducts;
