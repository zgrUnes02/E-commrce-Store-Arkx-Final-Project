import React from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import List from '../components/services/List';
import Navbar from '../layouts/Navbar/Navbar';
import Footer from '../layouts/Footer/Footer';



const ServicesStoreList = () => {
  const handleFilterChange = (filters) => {
    console.log('Filters:', filters);
  }

  return (
      <div>
          <Navbar/>
          <Searchbar />
          <List />
          <Footer/>
      </div>
  )
}

export default ServicesStoreList ;