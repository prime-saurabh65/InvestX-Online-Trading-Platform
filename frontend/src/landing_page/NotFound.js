import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container mb-20'>
            <div className="grid grid-cols-1 w-6/12 mx-auto">
                <h1 className='text-2xl text-center text-gray-600 mt-10'>404</h1>
                <h1 className='text-2xl text-center text-gray-600 mt-5 mb-3'>Kiaan couldn’t find that page</h1>
                <p className='text-center text-gray-600 mb-10 text-lg'>We couldn’t find the page you were looking for.</p>
                <p className='text-center text-gray-600 mb-10 text-lg'>Visit <Link className='text-blue-500' to="/">Zerodha’s home page</Link></p>
            </div>
            
        </div>
    );
}

export default NotFound;