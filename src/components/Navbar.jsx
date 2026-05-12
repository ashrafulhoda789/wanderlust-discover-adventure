"use client"

import { authClient, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const userData = authClient.useSession();
    const user = userData?.data?.user;

    // console.log(user);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <ul className="hidden items-center gap-4 md:flex">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/destinations'}>Destinations</Link></li>
                        <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                        <li><Link href={'/add-destination'}>Add Destinations</Link></li>
                    </ul>
                </div>

                <div>
                    <Image
                        src={'/assets/Wanderlast.png'}
                        alt='Wanderlust'
                        width={100}
                        height={100}
                    />
                </div>
                <ul className='flex gap-4 items-center'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    {
                        user ? (
                            <div className='flex gap-2 items-center'>
                                <Image src={user?.image || '/assets/userAvatar.webp'} alt={user?.name} width={40} height={40} className='rounded-full' />
                                <Button onClick={async () => await authClient.signOut()} variant='ghost' className={'text-rose-500'}>LogOut</Button>
                            </div>
                        )
                            :
                            (
                                <div className='flex gap-3 items-center'>
                                    <li><Link href={'/login'}>Login</Link></li>
                                    <li><Link href={'/register'}>Sign Up</Link></li>
                                </div>
                            )
                    }
                </ul>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li><Link href={'/'} className="block py-2">Home</Link></li>
                        <li><Link href={'/destinations'} className="block py-2">Destinations</Link></li>
                        <li><Link href={'/my-bookings'} className="block py-2">My Bookings</Link></li>
                        <li><Link href={'/add-destination'} className="block py-2">Add Destinations</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;