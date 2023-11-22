import { Link } from '@inertiajs/react';
import React from 'react';

const Login = () => {
    return (
        <div className='login max-[425px]:hidden'>
            <Link className='px-8 py-2 rounded-3xl secondary hover:text-blue-700' href='#'>Login</Link>
        </div>
    );
};

export default Login;
