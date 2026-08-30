import React from 'react';

function Education() {
    return ( 
        <div className="container w-9/12 mt-20 mx-auto p-4 mb-20">
            <div className="grid grid-cols-2">

                {/* Left Section */}
                <div className="my-auto w-[85%]">
                    <img src="media/images/education.svg" alt="" />
                </div>



                {/* Right Section */}

                <div className='my-auto p-4'>
                    <h2 className='text-2xl text-gray-700 mb-4'>Free and open market education</h2>
                    <p className='text-sm text-[#666666] mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p className='text-blue-500 mb-5'>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <p className='text-sm text-[#666666] mb-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p className='text-blue-500'>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                </div>
            </div>
        </div>
     );
}

export default Education;
