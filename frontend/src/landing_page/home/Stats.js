import React from 'react';

function Stats() {
    return (
        <div className='container mt-24 mx-auto p-2 w-9/12'>
            <div className='grid grid-cols-12'>
                <div className='col-span-5'>
                    <h1 className='text-2xl'>Trust with confidence</h1>
                    <h2 className='text-xl text-gray-800 mt-10'>Customer-first always</h2>
                    <p className='mt-2 text-[#666666]'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    
                    <h2 className='text-xl text-gray-800 mt-10'>No spam or gimmicks</h2>
                    <p className='mt-2 text-[#666666]'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span className='text-blue-600'>Our philosophies</span>.</p>
                    <h2 className='text-xl text-gray-800 mt-10'>The Zerodha universe</h2>
                    <p className='mt-2 text-[#666666]'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='text-xl text-gray-800 mt-10'>Do better with money</h2>
                    <p className='mt-2 text-[#666666]'>With initiatives like <span className='text-blue-600'>Nudge</span> and <span className='text-blue-600'>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-span-7'>
                    <img src="media/images/ecosystem.png" alt="" />
                    <div className='text-center mt-12'>
                        <a className='mx-4 text-blue-600 text-sm' href="#">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                        <a className='mx-4 text-blue-600 text-sm' href="#">Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
 </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
