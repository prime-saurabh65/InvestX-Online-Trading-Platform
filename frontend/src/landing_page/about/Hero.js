import React from 'react';

function Hero() {
    return ( 
        <>
            <div className='text-2xl text-[#424242] text-center p-[100px] '>
                <p className='mb-[100px] '>We pioneered the discount broking model in India.<br/> Now, we are breaking ground with our technology.</p>
                <div class="w-full flex justify-center">
                    <hr class="w-10/12 border-t border-gray-300" />
                </div>
            </div>
            

            <div className='w-8/12 px-2 mx-auto grid grid-cols-2 text-[#424242] ' >
                <div className='p-4 text-[16px] '>
                    <p className='mb-4 text-[#424242]  '>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className='mb-4 text-[#424242]  '>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p className='mb-4 text-[#424242]  '>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className='p-4 text-[16px] '>
                    <p className='mb-4 text-[#424242]  '>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className='mb-4 text-[#424242]  '>
                        <a className='text-blue-600' target="_blank" href="https://rainmatter.com/">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className='mb-4 text-[#424242]  '>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a className='text-blue-600' href="#">blog</a> or see what the media is <a className='text-blue-600' href="#">saying about us</a> or learn more about our business and product <a className='text-blue-600' href="#">philosophies</a>.
                    </p>
                </div>

            </div>
        </>
    );
}

export default Hero;