import React from 'react';
import { IoSearch } from "react-icons/io5";
import SearchCSS from './Searchbar.module.css';

function Searchbar() {
  return (
    <div className={SearchCSS.searchBar}>
    <IoSearch size={30} className={SearchCSS.searchBaricon} />
    <input
      type='text'
      placeholder='Search...'
    />
  </div>
  )
}

export default Searchbar ;