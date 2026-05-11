import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar, FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {

    const {
        _id,
        imageUrl,
        country,
        destinationName,
        duration,
        price
    } = destination;

    return (
        <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">

            {/* Image Section */}
            <div className="relative overflow-hidden">

                <Image
                    src={imageUrl}
                    alt={destinationName}
                    width={500}
                    height={500}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md">

                    <h3 className=" font-bold text-lg flex items-center gap-2">
                        4.5 <FaStar></FaStar>
                    </h3>

                </div>

                {/* Country */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full">

                    <LuMapPin className="text-lg" />

                    <span className="font-medium text-sm">
                        {country}
                    </span>

                </div>

            </div>

            {/* Content */}
            <div className="p-6 space-y-5">

                {/* Title */}
                <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                        {destinationName}
                    </h2>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">${price}</h3>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-600">

                        <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                            <FaRegCalendar />
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">
                                Duration
                            </p>

                            <p className="font-semibold">
                                {duration}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Button */}
                <Link href={`/destinations/${_id}`}>
                    <Button
                        variant="ghost"
                        className=" h-12 rounded-2xl text-cyan-500 font-semibold text-base shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                    >
                        Book Now <GoArrowUpRight></GoArrowUpRight>
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default DestinationCard;