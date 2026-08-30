import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container mb-20'>
            <div className="grid grid-cols-1 w-6/12 mx-auto">
                <h1 className='text-2xl text-center text-gray-600 mt-10 mb-3'>Open a Zerodha account</h1>
                <p className='text-center text-gray-600 mb-10 text-sm'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='w-44 m-auto items-center bg-[#387ed1] p-2 py-2 text-white rounded-sm hover:bg-gray-800'>Sign up for free</button>
            </div>
            
        </div>
     );
}

export default OpenAccount;