import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCalendarAlt, FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { RiMapPinRangeLine } from "react-icons/ri";
import { BookingCancelAlart } from "./BookingCancleAlart";

const MyBookingCard = ({ booking }) => {

    const { imageUrl, country, destinationName, departureDate, price, _id } = booking;
    return (
        <Card
            className="group w-full overflow-hidden 
            rounded-[28px] border border-gray-200 
            bg-white/90 backdrop-blur-xl shadow-sm 
            hover:shadow-2xl hover:-translate-y-1 
            transition-all duration-500"
        >

            <div className="flex flex-col md:flex-row items-center">

                {/* Image */}
                <div className="relative md:w-80 h-68 overflow-hidden">

                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>

                    
                    {/* Country */}
                    <div
                        className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full"
                    >
                        <LuMapPin className="text-cyan-300" />

                        <span className="text-sm font-medium">
                            {country}
                        </span>
                    </div>

                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-8">

                    {/* Top */}
                    <div>

                        <h2
                            className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight"
                        >
                            {destinationName}
                        </h2>

                        <p className="text-gray-500 mt-3 leading-7">

                            Your trip is scheduled for{" "}

                            <span className="font-semibold text-gray-700">
                                {new Date(departureDate).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </span>

                        </p>

                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                        <div
                            className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4"
                        >

                            <div className="flex items-center gap-2 text-cyan-600 mb-2">

                                <RiMapPinRangeLine/>

                                <span className="text-sm font-medium">
                                    Booking Id
                                </span>

                            </div>

                            <h3 className="font-bold text-gray-800">
                                {_id}
                            </h3>

                        </div>

                        <div
                            className="bg-blue-50 border border-blue-100 
                            rounded-2xl p-4"
                        >

                            <div className="flex items-center gap-2 text-blue-600 mb-2">

                                <BsArrowUpRight />

                                <span className="text-sm font-medium">
                                    Status
                                </span>

                            </div>

                            <h3 className="font-bold text-green-600">
                                Confirmed
                            </h3>

                        </div>

                    </div>

                    {/* Footer */}
                    <div
                        className="mt-auto flex flex-col sm:flex-row 
                        items-start sm:items-center 
                        justify-between gap-4 pt-8"
                    >

                        <div>

                            <p className="text-sm text-gray-400">
                                Total Price
                            </p>

                            <h2 className="text-4xl font-black text-cyan-600">
                                ${price}
                            </h2>

                        </div>
                        
                        <BookingCancelAlart booking={booking}/>
                        


                    </div>

                </div>

            </div>

        </Card>
    );
};

export default MyBookingCard;