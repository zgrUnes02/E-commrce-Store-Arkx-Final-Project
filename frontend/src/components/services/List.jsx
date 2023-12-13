import React, { useState, useEffect } from 'react';
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {IoHeartOutline} from  "react-icons/io5";
import ListCSS from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { getAllServices } from '../../redux/serviceSlice';

const List = () => {

  const dispatch = useDispatch() ;
  
  useEffect(() => {
    dispatch(getAllServices()) ;
  } , []) ;

  const services = useSelector(state => state.service.services) ;

  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [highToLow, setHighToLow] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const [columns, setColumns] = useState(2);

  const handleColumnsChange = (newColumn) => {
    setColumns(newColumn);
  }

  useEffect(() => {
    const filtered = services.filter(service =>
      (category.length === 0 || category.includes(service.category_id.category_name)) &&
      (subcategory.length === 0 || subcategory.includes(service.subcategory_id.subcategory_name)) &&
      (!minPrice || service.price >= parseInt(minPrice, 10)) &&
      (!maxPrice || service.price <= parseInt(maxPrice, 10))
    );


    const sorted = [...filtered].sort((a, b) => {
      if (highToLow) {
        return b.price - a.price;
      } else if (lowToHigh) {
        return a.price - b.price;
      }
      return 0;
    });

    setFilteredServices(sorted);
  }, [category, subcategory, minPrice, maxPrice, highToLow, lowToHigh]);

  return (
    <div className={ListCSS.container}>
      <ToastContainer/>
      <div className={ListCSS.containersidebar}>

      <h3>Category</h3>
      <div>
        <input
         className={ListCSS.checkbox}
          type="checkbox"
          id="all-categories"
          value="All"
          checked={category.length === 0}
          onChange={() => setCategory([])}
        />
        <label htmlFor="all-categories">All</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="women"
          value="women"
          checked={category.includes('sport')}
          onChange={() => {
            setCategory(prevCategory => {
              if (prevCategory.includes('sport')) {
                return prevCategory.filter(item => item !== 'sport');
              } else {
                return [...prevCategory, 'sport'];
              }
            });
          }}
        />
        <label htmlFor="women">Sport</label>
      </div>
        <hr/>
      
      <h3>Types</h3>
      <div>
      <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="all-subcategory"
          value="all"
          checked={subcategory.length === 0 }
          onChange={() =>  setSubcategory([])}
        />
        <label htmlFor="all">All</label>
        <br/>
      <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="hoodies"
          value="hoodies"
          checked={subcategory.includes('football stadium')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('football stadium')) {
                return prevSubcategory.filter(item => item !== 'football stadium');
              } else {
                return [...prevSubcategory, 'football stadium'];
              }
            });
          }}
        />
        <label htmlFor="hoodies">Football stadiums</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="t-shirt"
          value="t-shirt"
          checked={subcategory.includes('basketball stadium')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('basketball stadium')) {
                return prevSubcategory.filter(item => item !== 'basketball stadium');
              } else {
                return [...prevSubcategory, 'basketball stadium'];
              }
            });
          }}
        />
        <label htmlFor="t-shirt">Basketball stadiums</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="suit"
          value="suit"
          checked={subcategory.includes('handball stadium')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('handball stadium')) {
                return prevSubcategory.filter(item => item !== 'handball stadium');
              } else {
                return [...prevSubcategory, 'handball stadium'];
              }
            });
          }}
        />
        <label htmlFor="suit">Handball stadiums</label>
      </div>
      <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="sneakers"
          value="sneakers"
          checked={subcategory.includes('tennis stadium')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('tennis stadium')) {
                return prevSubcategory.filter(item => item !== 'tennis stadium');
              } else {
                return [...prevSubcategory, 'tennis stadium'];
              }
            });
          }}
        />
        <label htmlFor="sneakers">Tennis stadiums</label>
        <br/>
        <hr/>

      <h3>Price Range</h3>
      <div className={ListCSS.range}>
      <div>
      <input
      className={ListCSS.range}
      type="text" 
      placeholder="Min" 
      value={minPrice} 
      onChange={(e) => setMinPrice(e.target.value)} 
      />
      </div>
      <div>
      <input
      className={ListCSS.range}
      type="text" 
      placeholder="Max" 
      value={maxPrice} 
      onChange={(e) => setMaxPrice(e.target.value)} 
      />
      </div>
      </div>
      <br/>
      <hr/>
      <h3>Sort Price</h3>
      <div>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="high-to-low"
          checked={highToLow}
          onChange={() => {
            setHighToLow(!highToLow);
            setLowToHigh(false);
          }}
        />
        <label htmlFor="high-to-low">High to Low</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="low-to-high"
          checked={lowToHigh}
          onChange={() => {
            setLowToHigh(!lowToHigh);
            setHighToLow(false); 
          }}
        />
        <label htmlFor="low-to-high">Low to High</label>
      </div>
      </div>

      <div className={ListCSS.containerlist}>
      <div className={ListCSS.btnicon}>
        <div>
      <button onClick={() => handleColumnsChange(2)}><BsFillGridFill size={25}/></button>
      </div>
      <div>
      <button onClick={() => handleColumnsChange(3)}><BsFillGrid3X3GapFill size={25}/></button>
      </div>
      </div>
      <div className={`${ListCSS.productlist} ${columns === 2 ? ListCSS.productlist2cols : ListCSS.productlist3cols}`}>

        { filteredServices.map(service => ( 
          <div key={service.id} className={ListCSS.productcard}>
            <Link style={{ textDecoration:'none' }} to={`/store/products/${service._id}`}><img src={service.service_image[0]} alt=""/> </Link>
            <h4 >{service.service_name}</h4>
            <div>
                <span>{service.price} MAD</span>
                <div className={ListCSS.btnicon}>
                  <div>
                  </div>
                  <div>
                    <Link style={{ textDecoration:'none' }} to={`/store/services/${service._id}`}><button> + </button></Link>
                  </div>
                </div>
            </div>
          </div>
        ))}

     </div>
     </div>
    </div>
  );
};

export default List;
