'use client'
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Description, Label } from '@heroui/react';
import React, { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { toast } from 'react-toastify';


const BookingCard = ({ destination }) => {

    const { price, _id, destinationName, imageUrl, country } = destination

    const [departureDate, setDepartureDate] = useState(null);

    const userData = authClient.useSession();
    const user = userData?.data?.user;

    const handleBooking = async() =>{
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName ,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }

        console.log(bookingData);
        
        const res = await fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json()

        // console.log(data);
        toast.success('Booking successfull')
    }

    return (
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

                <DateField className="w-full" name="date"  onChange={setDepartureDate}>
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>

                </DateField>

                <Button
                onClick={handleBooking}
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
    );
};

export default BookingCard;