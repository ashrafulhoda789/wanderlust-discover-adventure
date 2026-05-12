'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';



const MyProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-100 flex items-center justify-center p-6 overflow-hidden relative">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

            <div
                className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl rounded-[32px] overflow-hidden">

                {/* Header */}
                <div className="bg-linear-to-r from-blue-500 to-cyan-500 py-8 text-center">

                    <h2 className="text-3xl font-extrabold text-white tracking-wide">
                        My Profile
                    </h2>


                </div>

                {/* Avatar */}
                <div className="flex justify-center -mt-8">

                    <div className="relative">

                        <div className="p-1 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 shadow-xl">

                            <Image
                                src={user?.image || '/assets/userAvatar.webp'}
                                alt="User Avatar"
                                width={150}
                                height={150}
                                className="rounded-full w-36 h-36 object-cover border-4 border-white"
                            />

                        </div>

                        {/* Online Dot */}
                        <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></span>

                    </div>

                </div>

                {/* User Info */}
                <div className="flex flex-col items-center px-6 py-6">

                    <h2 className="text-2xl font-bold text-gray-800 mt-3">
                        {user?.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        {user?.email}
                    </p>

                    {/* Divider */}
                    <div className="w-full border-t border-gray-200 my-6"></div>

                    {/* Update Button */}
                    <div className="w-full">

                        {/* <UpdateUserModal /> */}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MyProfilePage;