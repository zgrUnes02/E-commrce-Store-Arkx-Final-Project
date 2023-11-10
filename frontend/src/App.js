import React, { useEffect } from "react";
import UserRoutes from "./routes/UserRoutes";

import './assets/vendor/bootstrap/css/bootstrap.min.css' ;
import './assets/vendor/bootstrap-icons/bootstrap-icons.css' ;
import './assets/vendor/boxicons/css/boxicons.min.css' ;
import './assets/vendor/quill/quill.snow.css' ;
import './assets/vendor/quill/quill.bubble.css' ;
import './assets/vendor/remixicon/remixicon.css' ;
import './assets/vendor/simple-datatables/style.css' ;
import './assets/css/style.css' ;
import { useDispatch } from "react-redux";
import { getAllUsers } from "./redux/userSlice";
import { getAllCategories } from "./redux/categorySlice";
import { getAllSubcategories } from "./redux/subcategorySlice";
import { getAllProducts } from "./redux/productSlice";
import { getAllServices } from "./redux/serviceSlice";
import { getAllCompanies } from "./redux/companySlice";
import { getAllCustomers } from "./redux/customerSlice";
import { getAllOrders } from "./redux/orderSlice";

function App() {

  const dispatch = useDispatch() ;

  useEffect(() => {
    dispatch(getAllCategories()) ;
    dispatch(getAllSubcategories()) ;
    dispatch(getAllProducts()) ;
    dispatch(getAllServices()) ;
    dispatch(getAllUsers()) ;
    dispatch(getAllCompanies()) ;
    dispatch(getAllUsers()) ;
    dispatch(getAllCustomers()) ;
    dispatch(getAllOrders()) ;
  } , []) ;

  return (
    <React.Fragment>
      <UserRoutes />
    </React.Fragment>
  );
}

export default App;
