import React, { useState, useEffect } from 'react';
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {IoHeartOutline} from  "react-icons/io5";
import ListCSS from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, getAllProducts } from '../../redux/productSlice';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { addProductToWishList } from '../../redux/wishListSlice';

const List = () => {

  const dispatch = useDispatch() ;
  
  useEffect(() => {
    dispatch(getAllProducts()) ;
  } , []) ;

  const products = useSelector(state => state.product.products) ;

  const addToCart = (product_id) => {
    if ( localStorage.getItem('token') ) {
        dispatch(addProductToCart(product_id)).then(response => {
          toast(response.payload.data) ;
        }) ;
    } else {
      toast('Please login to your account !') ;
    }
  }

  const addToWishList = (product_id) => {
    if ( localStorage.getItem('token') ) {
        dispatch(addProductToWishList(product_id)).then(response => {
          toast(response.payload.data) ;
        }) ;
    } else {
      toast('Please login to your account !') ;
    }
  }

  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [highToLow, setHighToLow] = useState(false);
  const [lowToHigh, setLowToHigh] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [columns, setColumns] = useState(2);

  const handleColumnsChange = (newColumn) => {
    setColumns(newColumn);
  }

  useEffect(() => {
    const filtered = products.filter(product =>
      (category.length === 0 || category.includes(product.category_id.category_name)) &&
      (subcategory.length === 0 || subcategory.includes(product.subcategory_id.subcategory_name)) &&
      (!minPrice || product.price >= parseInt(minPrice, 10)) &&
      (!maxPrice || product.price <= parseInt(maxPrice, 10))
    );


    const sorted = [...filtered].sort((a, b) => {
      if (highToLow) {
        return b.price - a.price;
      } else if (lowToHigh) {
        return a.price - b.price;
      }
      return 0;
    });

    setFilteredProducts(sorted);
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
          checked={category.includes('women')}
          onChange={() => {
            setCategory(prevCategory => {
              if (prevCategory.includes('women')) {
                return prevCategory.filter(item => item !== 'women');
              } else {
                return [...prevCategory, 'women'];
              }
            });
          }}
        />
        <label htmlFor="women">Women</label>
        <br/>
        <input
            className={ListCSS.checkbox}
            type="checkbox"
            id="men"
            value="Men"
            checked={category.includes('men')}
            onChange={() => {
              setCategory(prevCategory => {
                if (prevCategory.includes('men')) {
                  return prevCategory.filter(item => item !== 'men');
                } else {
                  return [...prevCategory, 'men'];
                }
              });
            }}
          />
        <label htmlFor="men">Men</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="tools"
          value="Tools"
          checked={category.includes('tools')}
          onChange={() => {
            setCategory(prevCategory => {
              if (prevCategory.includes('tools')) {
                return prevCategory.filter(item => item !== 'tools');
              } else {
                return [...prevCategory, 'tools'];
              }
            });
          }}
        />
        <label htmlFor="tools">Tools</label>
      </div>
        <br/>
        <hr/>
      
      <h3>Items</h3>
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
          checked={subcategory.includes('hoodies')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('hoodies')) {
                return prevSubcategory.filter(item => item !== 'hoodies');
              } else {
                return [...prevSubcategory, 'hoodies'];
              }
            });
          }}
        />
        <label htmlFor="hoodies">Hoodies</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="t-shirt"
          value="t-shirt"
          checked={subcategory.includes('t-shirt')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('t-shirt')) {
                return prevSubcategory.filter(item => item !== 't-shirt');
              } else {
                return [...prevSubcategory, 't-shirt'];
              }
            });
          }}
        />
        <label htmlFor="t-shirt">T-shirt</label>
        <br/>
        <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="suit"
          value="suit"
          checked={subcategory.includes('suit')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('suit')) {
                return prevSubcategory.filter(item => item !== 'suit');
              } else {
                return [...prevSubcategory, 'suit'];
              }
            });
          }}
        />
        <label htmlFor="suit">Suit</label>
      </div>
      <input
          className={ListCSS.checkbox}
          type="checkbox"
          id="sneakers"
          value="sneakers"
          checked={subcategory.includes('sneakers')}
          onChange={() => {
            setSubcategory(prevSubcategory => {
              if (prevSubcategory.includes('sneakers')) {
                return prevSubcategory.filter(item => item !== 'sneakers');
              } else {
                return [...prevSubcategory, 'sneakers'];
              }
            });
          }}
        />
        <label htmlFor="sneakers">Sneakers</label>
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

        { filteredProducts.map(product => ( 
          <div key={product.id} className={ListCSS.productcard}>
            <Link style={{ textDecoration:'none' }} to={`/store/products/${product._id}`}><img src={product.product_image[0]} alt=""/> </Link>
            <h4 >{product.product_name}</h4>
            <div>
                <span>{product.price} MAD</span>
                <div className={ListCSS.btnicon}>
                  <div>
                    <button onClick={() => {addToWishList(product._id)}} ><IoHeartOutline size={25}/></button>
                  </div>
                  <div>
                    <button onClick={() => {addToCart(product._id)}}>+</button>
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
