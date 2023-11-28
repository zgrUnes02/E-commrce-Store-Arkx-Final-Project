import React from "react";

const ProductsSidebar = () => {
  return (
    <div className="bg-light overflow-y-scroll w-60 py-8 px-4">
      <h1 className="font-poppins fw-bold text-3xl text-black">ITEMS</h1>
      <hr className="w-100" />
      <ul className="list-unstyled">
        <li className="mb-2 mt-2">
          <a
            href="#"
            className="text-black font-poppins fw-bold text-xl text-decoration-none link-danger"
          >
            Hoodies
          </a>
        </li>
        <li className="mb-2 mt-2">
          <a
            href="#"
            className="text-black font-poppins fw-bold text-xl text-decoration-none link-danger"
          >
            T-shirts
          </a>
        </li>
        <li className="mb-2 mt-2">
          <a
            href="#"
            className="text-black font-poppins fw-bold text-xl text-decoration-none link-danger"
          >
            Sweatpants
          </a>
        </li>
        <li className="mb-2 mt-2">
          <a
            href="#"
            className="text-black font-poppins fw-bold text-xl text-decoration-none link-danger"
          >
            Tank tops
          </a>
        </li>
        <li className="mb-2 mt-2">
          <a
            href="#"
            className="text-black font-poppins fw-bold text-xl text-decoration-none link-danger"
          >
            Sneakers
          </a>
        </li>
      </ul>
      <hr className="w-100" />
      <h1 className="font-poppins text-3xl fw-bold text-black">PRICES</h1>
      <hr className="w-100" />
      <ul className="list-unstyled">
        <div class="form-check !pl-0 d-flex justify-content-between mt-3">
          <label className="font-poppins fw-bold text-black ml-0" for="flexCheckDefault1">
            0 - 100 MAD
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault1"
          />
        </div>
        <div class="form-check !pl-0 d-flex justify-content-between mt-3">
          <label className="font-poppins fw-bold text-black ml-0" for="flexCheckDefault2">
            0 - 100 MAD
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault2"
          />
        </div>
        <div class="form-check !pl-0 d-flex justify-content-between mt-3">
          <label className="font-poppins fw-bold text-black ml-0" for="flexCheckDefault3">
            100 - 150 MAD
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault3"
          />
        </div>
        <div class="form-check !pl-0 d-flex justify-content-between mt-3">
          <label className="font-poppins fw-bold text-black ml-0" for="flexCheckDefault4">
            150 - 200 MAD
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault4"
          />
        </div>
        <div class="form-check !pl-0 d-flex justify-content-between mt-3">
          <label className="font-poppins fw-bold text-black ml-0" for="flexCheckDefault5">
            200 - 300 MAD
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault5"
          />
        </div>
      </ul>
      <hr className="w-100" />
      <h1 className="font-poppins text-3xl fw-bold text-black">SIZES</h1>
      <hr className="w-100" />
      <ul className="list-unstyled">
        <div className="d-flex justify-content-between">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="xsmall"/>
  <label class="form-check-label fw-bold font-poppins" for="xsmall">
    XS
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="small"/>
  <label class="form-check-label fw-bold font-poppins" for="small">
    S
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="medium"/>
  <label class="form-check-label fw-bold font-poppins" for="medium">
    M
  </label>
</div>
        </div>
        <div className="d-flex justify-content-between">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="large"/>
  <label class="form-check-label fw-bold font-poppins" for="large">
    L
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="xlarge"/>
  <label class="form-check-label fw-bold font-poppins" for="xlarge">
    XL
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="xxlarge"/>
  <label class="form-check-label fw-bold font-poppins" for="xxlarge">
    XXL
  </label>
</div>
        </div>
      </ul>
    </div>
  );
};

export default ProductsSidebar;
