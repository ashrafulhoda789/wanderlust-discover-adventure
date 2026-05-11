import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaRegCalendarAlt, FaStar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';


const DestinationDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json();

    // console.log(destination);
    const {
        imageUrl,
        country,
        destinationName,
        duration,
        price,
        description,
        departureDate
    } = destination;

    return (
        <div className="min-h-screen bg-[#f5f7fa] py-10 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Main Card */}
                <div className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100">

                    {/* Banner Image */}
                    <div className="relative w-full h-62.5 md:h-125 overflow-hidden">

                        <Image
                            src={imageUrl}
                            alt={destinationName}
                            fill
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10"></div>

                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-6 md:p-10">

                        {/* Left Content */}
                        <div className="lg:col-span-2">

                            {/* Country */}
                            <div className="flex items-center gap-2 text-gray-500 mb-4">

                                <LuMapPin className="text-sm" />

                                <span className="text-sm">
                                    {country}
                                </span>

                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                {destinationName}
                            </h1>

                            {/* Rating + Duration */}
                            <div className="flex flex-wrap items-center gap-6 mt-5">

                                {/* Rating */}
                                <div className="flex items-center gap-2">

                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <FaStar />
                                    </div>

                                    <span className="font-semibold text-gray-800">
                                        4.9
                                    </span>

                                    <span className="text-gray-400 text-sm">
                                        (234 reviews)
                                    </span>

                                </div>

                                {/* Duration */}
                                <div className="flex items-center gap-2 text-gray-700">

                                    <FaRegCalendarAlt />

                                    <span className="font-medium">
                                        {duration}
                                    </span>

                                </div>

                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-200 my-8"></div>

                            {/* Overview */}
                            <div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Overview
                                </h2>

                                <p className="text-gray-600 leading-8 text-lg">
                                    {description}
                                </p>

                            </div>

                            {/* Extra Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

                                <div className="bg-cyan-50 rounded-2xl p-5 border border-cyan-100">
                                    <h3 className="text-sm text-gray-500 mb-2">
                                        Departure Date
                                    </h3>

                                    <p className="font-bold text-cyan-600">
                                        {departureDate}
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                                    <h3 className="text-sm text-gray-500 mb-2">
                                        Tour Type
                                    </h3>

                                    <p className="font-bold text-blue-600">
                                        Premium Package
                                    </p>
                                </div>

                                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                                    <h3 className="text-sm text-gray-500 mb-2">
                                        Availability
                                    </h3>

                                    <p className="font-bold text-orange-500">
                                        12 Seats Left
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Right Booking Card */}
                        <div>

                            <div className="sticky top-10 bg-white border border-gray-200 rounded-[28px] shadow-lg p-6">

                                {/* Price */}
                                <div>

                                    <p className="text-gray-400 text-sm mb-2">
                                        Starting from
                                    </p>

                                    <h2 className="text-5xl font-black text-cyan-600">
                                        ${price}
                                    </h2>

                                    <p className="text-gray-500 mt-2">
                                        per person
                                    </p>

                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gray-200 my-6"></div>

                                {/* Booking Form */}
                                <div className="space-y-5">

                                    <div className='px-4 py-2 text-gray-600 bg-gray-100 rounded-xl'>
                                        {departureDate}
                                    </div>

                                    <Button
                                        className="w-full h-12 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                                    >
                                        Book Now <BsArrowUpRight></BsArrowUpRight>
                                    </Button>

                                </div>

                                {/* Features */}
                                <div className="mt-8 space-y-4">

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        Free cancellation
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        Instant confirmation
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        Secure payment
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DestinationDetailPage;