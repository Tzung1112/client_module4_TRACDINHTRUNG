import { useState } from 'react';
import './navbar.scss'
const Navbar:React.FC=()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dropdown, setDropdown] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [userShow, setUserShow] = useState<boolean>(false)
    
    return (
        <>
            <nav className="container">
                <div className='left_nav'>
                    <img onClick={() => { window.location.href = '/'; }} src="https://zeroskateboards.com/cdn/shop/files/zeroLogo_900x.png?v=1614764579" alt="" />
                </div>
                <div className='mid_nav'>
                    <div className='top_mid_nav'>
                        <div className='content_top_mid_nav'>
                            <span className='dropdown' onClick={() => { !dropdown ? (setDropdown(true)) : (setDropdown(false)) }}>SHOP <i className="fa-solid fa-caret-down"></i></span>
                            <span>VIDEOS</span>
                            <span>NEWS</span>
                            <span>CATALOGS</span>
                            <span>CONTACT US</span>
                        </div>

                        {
                            dropdown ? (<div className='item_dropdown'>
                                <span>DECK</span>
                                <span>APPAREL</span>
                                <span>COLLABS</span>
                                <span>ACCESSORIES</span>
                                <span>HAST/BEANIES</span>
                                <span>COMPLETES</span>
                                <span>WHEELS</span>
                            </div>) : (<div className=''>
                            </div>)
                        } 
                    </div>

                    <div className='bot_mid_nav'>
                        <div className='content_bot_mid_nav'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    
                </div>
                <div className='right_nav'>
                    <div className='content_bot_right_nav'>
                        <i className="fa-solid fa-magnifying-glass i1" >   </i>
                        <i className="fa-regular fa-user i2" onClick={() => { !userShow ? (setUserShow(true)) : (setUserShow(false)) }}>{
                            userShow ? (<div className='item_userShow'>
                                <span onClick={() => { window.location.href = '/login'; }}>LOGIN</span>
                                <span onClick={() => { window.location.href = '/register'; }}>REGISTER</span>
                            </div>) : (<div className=''>
                            </div>)
                        }</i>
                        <i className="fa-solid fa-cart-shopping i3"></i>
                      
                    </div>
                   
                </div>
                
            </nav>
          </>
    )
}
export default Navbar;