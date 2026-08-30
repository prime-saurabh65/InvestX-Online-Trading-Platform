import React from 'react'

const Hero = () => {
  return (
    <section className='container bg-[#387dd1] max-w-full'>
        <div className='mx-28'>
            <div className='flex justify-between p-10 mx-10 my-5'>
                <h3 className='text-xl text-white'>Support Portal</h3>
                <a className='text-sm text-white underline' href="">Track Tickets</a>
            </div>

            <div className='grid grid-cols-2 gap-2 '>

                <div className='p-10 mx-10'>
                    <h2 className='text-2xl text-white mb-4 ' >Search for an answer or browse help topics to create a ticket</h2>
                    <input className='p-5 w-full rounded-md mb-4' type="text" placeholder='Eg : how do i activate F&O, why is my order getting rejected' />
                    <div>
                        <a className='text-white text-sm mr-4 underline' href="">Track account opening</a>
                        <a className='text-white text-sm mr-4 underline' href="">Track segment activation</a>
                        <a className='text-white text-sm mr-4 underline' href="">Intraday</a>
                        <a className='text-white text-sm mr-4 underline' href="">margins</a>
                        <a className='text-white text-sm mr-4 underline' href="">Kite user manual</a>
                    </div>
                </div>
                <div className='p-10 mx-10'>
                    <h2 className='text-2xl text-white mb-4 ' >Featured</h2>
                    <ol className='list-decimal mx-10 text-white text-sm underline'>
                        <li >Current Takeoversand Delisting - January 2024</li>
                        <li>Latest Intraday Leverages - MIS & CO</li>
                    </ol>
                </div>

            </div>

        </div>
    </section>
  )
}


export default Hero