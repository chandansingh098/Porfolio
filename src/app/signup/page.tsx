'use client';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface InputState {
    name: string;
    email: string;
    password: string;
}

const Signup: React.FC = () => {
    const [input, setInput] = useState<InputState>({
        name:'',
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('User Input:', input);

        localStorage.setItem("user", JSON.stringify(input));//storing
        if(input.name == '' && input.email == '' && input.password == ''){
            alert("please fill the details!")
        }else{
            router.push('/login'); // Use useRouter to navigate
            alert('Sign up successfully');
        }
            
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                    <div className='w-3/5 p-5'>
                        <div className='text-left font-bold'>
                            <span className='text-green-500'>Company</span>Name
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign Up to Account</h2>
                            <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                            <div className='flex justify-center my-2'>
                                <a href="https://www.facebook.com/" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-blue-500 hover:text-white'>
                                    <FaFacebookF className='text-sm' />
                                </a>
                                <a href="https://www.linkedin.com/" className='border-2 border-gray-200 rounded-full p-3 mx-1   hover:bg-gray-200 hover:text-blue-500'>
                                    <FaLinkedinIn className='text-sm' />
                                </a>
                                <a href="https://mail.google.com/" className='border-2 border-gray-200 rounded-full p-3 mx-1   hover:bg-gray-200 hover:text-orange-500'>
                                    <FaGoogle className='text-sm' />
                                </a>
                            </div>
                            <p className='text-gray-400 my-3'>or use your email account</p>
                            <div className='flex flex-col items-center'>
                                <form onSubmit={handleSubmit}>
                                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <FaRegEnvelope className='text-gray-400 m-2' />
                                        <input 
                                            type="text"
                                            name='name'
                                            placeholder='Name'
                                            value={input.name}
                                            onChange={handleChange}
                                            id='name'
                                            autoComplete='off' 
                                            className='bg-gray-100 outline-none text-sm flex-1' 
                                        />
                                    </div>
                                    
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <FaRegEnvelope className='text-gray-400 m-2' />
                                        <input 
                                            type="email"
                                            name='email'
                                            placeholder='Email'
                                            value={input.email}
                                            onChange={handleChange}
                                            id='email'
                                            autoComplete='off' 
                                            className='bg-gray-100 outline-none text-sm flex-1' 
                                        />
                                    </div>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <MdLockOutline className='text-gray-400 m-2' />
                                        <input 
                                            type="password"
                                            name='password'
                                            value={input.password}
                                            onChange={handleChange}
                                            id='password'
                                            autoComplete='off'
                                            placeholder='Password' 
                                            className='bg-gray-100 outline-none text-sm flex-1' 
                                        />
                                    </div>
                                    <button type='submit' className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                        <h2 className='text-3xl font-bold mb-2'>Hello, friend!</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <p className='mb-10'>Fill up personal information and start your journey with us.</p>
                        <Link href="/login" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign in</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Signup;
