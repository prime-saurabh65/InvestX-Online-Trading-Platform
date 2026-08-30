import React from 'react';

function Hero() {
    return (
        <>
            <div className='text-2xl text-[#424242] text-center py-[100px] '>
                <div className='mb-[100px]'>
                    <p className='text-2xl mb-4'>Zerodha Products</p>
                    <p className='text-xl mb-4'>Sleek, modern, and intuitive trading platforms</p>
                    <p className='text-lg'>Check out our <a className='text-blue-500' href="#">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                </div>
                <div class="w-full flex justify-center">
                    <hr class="w-8/12 border-t border-gray-300" />
                </div>
            </div>
        </>
    );
}

export default Hero;