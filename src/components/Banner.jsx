import { Separator } from "@heroui/react";

const Banner = () => {
    return (
        <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center text-white flex flex-col items-center justify-between min-h-[80vh] gap-6">

            {/* Top Content */}
            <div className="px-4 sm:px-10 text-center flex flex-col items-center gap-4 flex-1 justify-center">

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Discover Your <br /> Next Adventure
                </h1>

                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
                    <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer w-full sm:w-auto">
                        Explore Now
                    </button>

                    <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer w-full sm:w-auto">
                        View Destination
                    </button>
                </div>
            </div>

            {/* Bottom Search Bar */}
            <div className="bg-white/30 w-full px-4 py-4">

                <div className="grid grid-cols-2 sm:flex sm:justify-between sm:items-center gap-4 text-center">

                    <div className="px-2">
                        <h3 className="text-xs sm:text-sm font-semibold">Location</h3>
                        <p className="text-[10px] sm:text-xs">Address, City or Zip</p>
                    </div>

                    <Separator className="hidden sm:block" variant="tertiary" orientation="vertical" />

                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold">Date/Duration</h3>
                        <p className="text-[10px] sm:text-xs">Anytime / 3 Days</p>
                    </div>

                    <Separator className="hidden sm:block" variant="tertiary" orientation="vertical" />

                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold">Budget</h3>
                        <p className="text-[10px] sm:text-xs">$0 - $3000</p>
                    </div>

                    <Separator className="hidden sm:block" variant="tertiary" orientation="vertical" />

                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold">People</h3>
                        <p className="text-[10px] sm:text-xs">5 - 10</p>
                    </div>

                    <div className="col-span-2 sm:col-span-auto">
                        <button className="bg-cyan-500 py-2 px-6 w-full sm:w-auto">
                            Search
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;