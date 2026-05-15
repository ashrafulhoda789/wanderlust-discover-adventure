import { Button } from '@heroui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import DestinationCard from './DestinationCard';

const Featured = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const destinations = await res.json();

    // console.log(destination);
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='text-center md:text-start'>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Featured Destinations
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Handpicked travel experiences for the adventure seekers
                    </p>
                </div>
                <Button variant='outline' className={'rounded-none border-cyan-500'}>All Destination <FaArrowRight /></Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default Featured;

