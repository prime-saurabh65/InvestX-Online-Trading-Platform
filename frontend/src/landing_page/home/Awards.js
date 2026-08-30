import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-20 mx-auto p-4 w-11/12'>
            <div className='grid grid-cols-2'>
                <div className='p-5'>
                    <img src="media/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className='my-auto p-5'>
                    <h1 className='text-3xl mb-4'>Largest stock broker in India</h1>
                    <p className='mb-10'>2+ millions zerodha clients contribute to over 15% of all retail order <br /> volumes in India daily by trading and investing in:</p>
                    <div className="grid grid-cols-2">
                        <div className='ml-4'>
                            <ul className='list-disc'>
                                <li>Future and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='list-disc'>
                                <li>Stocks andd IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img className='p-4 w-[90%]' src="media/images/pressLogos.png" alt="pressLogos" />
                </div>
            </div>

        </div>
    );
}

export default Awards;