import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link,NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount,navigate,token,setToken,setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('authToken');
        setToken('');
        setCartItems({});
        
    }
    
    return (

        <div className= 'flex items-center justify-between py-5 font-medium'>

            <Link to='/'><img src={assets.Logo} alt="logo" className="w-30 h-30 rounded-full" /></Link>
            <ul className= "hidden sm:flex gap-5 text-sm text-gray-700">
               <NavLink to="/" className= "flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
               <NavLink to="/surfboards" className= "flex flex-col items-center gap-1">
                <p>SURFBOARDS</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
               <NavLink to="/about" className= "flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
               <NavLink to="/contact" className= "flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
    {!visible && <> <img onClick={()=>setShowSearch(true)} src={assets.SearchIcon} className='w-6 cursor-pointer' alt='search-icon'></img>

    <div className='group relative'>
       <img onClick={()=> token ? null : navigate('/login')} src={assets.ProfileIcon} className='w-6 cursor-pointer' alt='profile-icon'></img>

        {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Log Out</p>
            </div>
        </div>}
    </div>    

                <Link to='/cart' className='relative'>
                    <img src={assets.CartIcon} className='w-4 min w-6' alt='cart-icon'></img>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
               
                <img onClick={() => setVisible(true)} src={assets.MenuIcon} className="w-5 cursor-pointer sm:hidden" alt=''/>
                </>}
            </div>
            
            <div className={`fixed top-0 right-0 w-1/3 h-screen bg-81968F shadow-lg p-5 transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className='flex justify-end'>
                    <img onClick={() => setVisible(false)} className='w-3 cursor-pointer' src={assets.CrossIcon} alt=''/>
                  
                 </div>
                 <div>
                 <NavLink className='flex flex-col' to='/' >HOME</NavLink>
                 <NavLink className='flex flex-col' to='/surfboards' >SURFBOARDS</NavLink>
                 <NavLink className='flex flex-col' to='/about' >ABOUT</NavLink>
                 <NavLink className='flex flex-col' to='/contact'>CONTACT</NavLink>
                 
                 
                </div>
                    
            </div>




        </div>
    )
}

export default Navbar;