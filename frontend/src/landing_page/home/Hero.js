import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className="grid grid-cols-1">
                <img className='w-3/5 m-auto mb-5' src="media/images/homeHero.png" alt="" />
                <h1 className='text-3xl text-center text-gray-600 mt-10 mb-3'>Invest in everything</h1>
                <p className='text-center text-gray-600 mb-10 text-xl'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='w-44 m-auto items-center bg-[#387ed1] p-2 py-2 text-white rounded-sm hover:bg-gray-800'>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;
