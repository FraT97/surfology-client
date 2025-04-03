import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      if (cartItems[itemId].quantity > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId].quantity
        });
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                {productData && ( 
                  <>
                    <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                      <p className='text-xs sm:text-lg'>{currency}{productData.price}</p>
                    </div>
                   
                  </>
                )}
              </div>
              <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity} />
              <img onClick={() =>updateQuantity(item._id,0)} className='w-4 mr-4 sm:w-5 cursor pointer' src={assets.BinIcon} alt='delete' />
            </div>
          );
        })
        }
      </div>
      <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
      <CartTotal />

      </div>

      </div>
    </div>
  );
};

export default Cart;
