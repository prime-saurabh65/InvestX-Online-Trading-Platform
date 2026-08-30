import React from 'react';

function Team() {
    return ( 
        <>
            <div className='container'>
                <h2 className='text-2xl text-center mt-12'>People</h2>

                <div className='grid grid-cols-5 gap-4 w-8/12 mx-auto mt-[80px]'>
                    <div className='col-span-2 '>
                        <img className=' mx-auto rounded-full w-[70%] ' src="media/images/nithinKamath.jpg" alt="" />
                        <div className='text-center mt-6 text-[#424242]'>
                            <p className='mb-4 text-lg'>Nithin Kamath</p>
                            <p className='text-sm'>Founder, CEO</p>
                        </div>
                    </div>
                    
                    <div className='col-span-3'>
                        <p className='mb-4'>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p className='mb-4'>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p className='mb-4'>
                            Playing basketball is his zen.
                        </p>
                        <p className='mb-4'>
                            Connect on Homepage / TradingQnA / Twitter
                        </p>
                    </div>

                    <div>
                        {/* Use props here */}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Team;