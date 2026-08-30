import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>

            <div className='m-5 p-1'>
                <h1 className='text-2xl m-10'>To create a tatkal ticket, select a relevant topic</h1>
                <div className='grid grid-cols-12 gap-5 m-10 p-5 justify-center items-center'>
                    {/* Column 01 */}
                    <div className='col-span-4'>
                        <h4 className='text-xl text-black mb-10 '><i class="fa fa-plus-circle" aria-hidden="true"></i>
                            Account Opening</h4>
                            <a className='leading-8 text-blue-400' href="">Online Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Offline Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Company, Partnership and HUF Account pening</a> <br />
                            <a className='leading-8 text-blue-400' href="">NRI Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Charges at Zerodha</a> <br />
                            <a className='leading-8 text-blue-400' href="">Zerodha IDFC First BAnk 3-in-1 Account</a> <br />
                            <a className='leading-8 text-blue-400' href="">Getting started</a> <br />
                    </div>


                    {/* Column 02 */}
                    <div className='col-span-4'>
                        <h4 className='text-xl text-black mb-10 '><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account </h4>
                            <a className='leading-8 text-blue-400' href="">Online Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Offline Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Company, Partnership and HUF Account pening</a> <br />
                            <a className='leading-8 text-blue-400' href="">NRI Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Charges at Zerodha</a> <br />
                            <a className='leading-8 text-blue-400' href="">Zerodha IDFC First BAnk 3-in-1 Account</a> <br />
                            <a className='leading-8 text-blue-400' href="">Getting started</a> <br />
                    </div>

                    {/* Column 03 */}
                    <div className='col-span-4'>
                        <h4 className='text-xl text-black mb-10 '><i class="fa fa-user" aria-hidden="true"></i>
                            Your Zerodha Account</h4>
                            <a className='leading-8 text-blue-400' href="">Online Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Offline Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Company, Partnership and HUF Account pening</a> <br />
                            <a className='leading-8 text-blue-400' href="">NRI Account Opening</a> <br />
                            <a className='leading-8 text-blue-400' href="">Charges at Zerodha</a> <br />
                            <a className='leading-8 text-blue-400' href="">Zerodha IDFC First BAnk 3-in-1 Account</a> <br />
                            <a className='leading-8 text-blue-400' href="">Getting started</a> <br />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CreateTicket;