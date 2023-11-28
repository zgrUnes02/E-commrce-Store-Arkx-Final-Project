import React from 'react' ;
import style from './header.module.css' ;
import logo from '../assets/AthlearkRemovebg.png'

function Header() {
    return (
        <React.Fragment>

            <div className={style.parent}>

                <div className={style.left}>

                    <div>
                        <img src={logo} style={{ width:"150px" }} alt="" />
                    </div>

                    <div className={style.links}>
                        <a className={style.link} href='/'>Home</a>
                        <a className={style.link} href='/'>Men</a>
                        <a className={style.link} href='/'>Women</a>
                        <a className={style.link} href='/'>Services</a>
                    </div>

                </div>
                
                <div className={style.right}>

                    <input className={style.input} type="text" placeholder='Search' />

                    <i style={{ fontSize:"20px" }} class="fa-solid fa-cart-shopping"></i>

                    <i style={{ fontSize:"20px" }} class="fa-solid fa-heart"></i>

                </div>
            </div>
        
        </React.Fragment>
    )
}

export default Header ;
