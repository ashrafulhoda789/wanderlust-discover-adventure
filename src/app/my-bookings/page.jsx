import MyBookingCard from '@/components/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const bookings = await res.json();
    // console.log(bookings);

    return (
        <div className="min-h-screen bg-[#f5f7fa] py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            My Bookings
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Manage all your travel bookings in one place
                        </p>
                    </div>

                    {/* Optional user info card */}
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 w-fit">

                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">

                            <Image src={user?.image} alt={user?.name?.charAt(0)} width={50} height={50} className='rounded-full' />
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Logged in as</p>
                            <p className="font-semibold text-gray-800">
                                {user?.name}
                            </p>
                        </div>

                    </div>

                </div>
                {
                    bookings.length === 0 ? (

                        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">

                            <h3 className="text-2xl font-bold text-gray-800">
                                You have not booked any place yet.
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Start exploring and book your favorite destination.
                            </p>

                        </div>

                    ) : (

                        <div className='grid grid-cols-1 gap-6'>

                            {
                                bookings.map(booking => (
                                    <MyBookingCard
                                        key={booking._id}
                                        booking={booking}
                                    />
                                ))
                            }

                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default MyBookingPage;