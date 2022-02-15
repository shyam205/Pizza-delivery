import React from 'react';
import style from '../styles/Navbar.module.css';
import Image from 'next/image';

function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.callButton}>
                   <Image src="/img/telephone.png" alt="" width="32" height="32" />
                   
                </div>
                <div className={style.texts}>
                     <div className={style.text}>ORDER NOW!</div>
                     <div className={style.text}>012 324 876</div>
                </div>
            </div>
            <div className={style.item}>
                <ul className={style.list}>
                    <li className={style.listItem}>Homepage</li>
                    <li className={style.listItem}>Products</li>
                    <li className={style.listItem}>Menu</li>
                    {/* <Image src="/img/slogo.png" alt="" width="60px" height="69px" className='logos' /> */}
                    <li className={style.listItem && style.logom}>Shyam</li>
                    <li className={style.listItem}>Events</li>
                    <li className={style.listItem}>Blog</li>
                    <li className={style.listItem}>Contact</li>
                </ul>
            </div>
            <div className={style.item}>
               <div className={style.cart}>
                    <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                    <div className={style.counter}>2</div>
               </div>
            </div>
        </div>
    )
}

export default Navbar;
