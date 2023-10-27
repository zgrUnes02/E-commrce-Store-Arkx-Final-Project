import React from "react";
import UserRoutes from "./routes/UserRoutes";

import './assets/vendor/bootstrap/css/bootstrap.min.css' ;
import './assets/vendor/bootstrap-icons/bootstrap-icons.css' ;
import './assets/vendor/boxicons/css/boxicons.min.css' ;
import './assets/vendor/quill/quill.snow.css' ;
import './assets/vendor/quill/quill.bubble.css' ;
import './assets/vendor/remixicon/remixicon.css' ;
import './assets/vendor/simple-datatables/style.css' ;
import './assets/css/style.css' ;

function App() {
  return (
    <React.Fragment>
      <UserRoutes />
    </React.Fragment>
  );
}

export default App;
