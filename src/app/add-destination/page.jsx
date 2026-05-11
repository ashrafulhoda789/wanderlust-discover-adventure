'use client'


import {
    FieldError,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    TextArea,
    Button
} from '@heroui/react';
import { redirect } from 'next/navigation';

import {
    FaMapMarkedAlt,
    FaGlobeAsia,
    FaCalendarAlt,
    FaDollarSign,
    FaClock,
    FaImage,
    FaFileAlt,
    FaPlaneDeparture
} from "react-icons/fa";

const AddDestinationPage = () => {
    
    const onSubmit = async(e) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());

        // console.log(destination);

        const res =await fetch('http://localhost:5000/destination',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(destination)
        })

        const data = await res.json()
        if(data.insertedId){
            redirect('destinations')
        }
        // console.log(data);
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-sky-50 via-white to-cyan-50 p-4 md:p-8">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-10">

                    <div className="inline-flex items-center gap-3 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
                        <FaPlaneDeparture size={18} />
                        <span className="font-medium text-sm">
                            Travel Management
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Add New Destination
                    </h2>

                    <p className="text-gray-500 mt-3 text-lg">
                        Create a beautiful travel package for your travelers.
                    </p>

                </div>

                {/* Form Card */}
                <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[32px] overflow-hidden">

                    {/* Top Banner */}
                    <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-8 text-white">

                        <h3 className="text-2xl font-bold">
                            Destination Information
                        </h3>

                        <p className="text-cyan-100 mt-2">
                            Fill in all the details about your travel package.
                        </p>

                    </div>

                    <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Destination Name */}
                            <div className="md:col-span-2">

                                <TextField name="destinationName" isRequired>

                                    <Label className="mb-2 text-sm font-semibold text-gray-700">
                                        Destination Name
                                    </Label>

                                    <div className="relative">

                                        <FaMapMarkedAlt
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                        />

                                        <Input
                                            placeholder="Bali Paradise"
                                            className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-100 focus:border-cyan-500 transition-all"
                                        />

                                    </div>

                                    <FieldError />

                                </TextField>

                            </div>

                            {/* Country */}
                            <TextField name="country" isRequired>

                                <Label className="mb-2 text-sm font-semibold text-gray-700">
                                    Country
                                </Label>

                                <div className="relative">

                                    <FaGlobeAsia
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                    />

                                    <Input
                                        placeholder="Indonesia"
                                        className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-100"
                                    />

                                </div>

                                <FieldError />

                            </TextField>

                            {/* Category */}
                            <div>

                                <Label className="mb-2 text-sm font-semibold text-gray-700 block">
                                    Category
                                </Label>

                                <Select
                                    name="category"
                                    isRequired
                                    className="w-full"
                                    placeholder="Select category"
                                >

                                    <Select.Trigger className="rounded-2xl h-14 border-2 border-gray-100 px-4">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>

                                        <ListBox className="p-2">

                                            {
                                                [
                                                    'Beach',
                                                    'Mountain',
                                                    'City',
                                                    'Adventure',
                                                    'Cultural',
                                                    'Luxury'
                                                ].map((item) => (

                                                    <ListBox.Item
                                                        key={item}
                                                        id={item}
                                                        textValue={item}
                                                        className="rounded-xl"
                                                    >
                                                        {item}
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>

                                                ))
                                            }

                                        </ListBox>

                                    </Select.Popover>

                                </Select>

                            </div>

                            {/* Price */}
                            <TextField name="price" type="number" isRequired>

                                <Label className="mb-2 text-sm font-semibold text-gray-700">
                                    Price (USD)
                                </Label>

                                <div className="relative">

                                    <FaDollarSign
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                    />

                                    <Input
                                        type="number"
                                        placeholder="1299"
                                        className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-100"
                                    />

                                </div>

                                <FieldError />

                            </TextField>

                            {/* Duration */}
                            <TextField name="duration" isRequired>

                                <Label className="mb-2 text-sm font-semibold text-gray-700">
                                    Duration
                                </Label>

                                <div className="relative">

                                    <FaClock
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                    />

                                    <Input
                                        placeholder="7 Days / 6 Nights"
                                        className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-100"
                                    />

                                </div>

                                <FieldError />

                            </TextField>

                            {/* Departure Date */}
                            <div className="md:col-span-2">

                                <TextField
                                    name="departureDate"
                                    type="date"
                                    isRequired
                                >

                                    <Label className="mb-2 text-sm font-semibold text-gray-700">
                                        Departure Date
                                    </Label>

                                    <div className="relative">

                                        <FaCalendarAlt
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                        />

                                        <Input
                                            type="date"
                                            className="w-1/2 rounded-2xl pl-12 h-14 border-2 border-gray-100"
                                        />

                                    </div>

                                    <FieldError />

                                </TextField>

                            </div>

                            {/* Image URL */}
                            <div className="md:col-span-2">

                                <TextField name="imageUrl" isRequired>

                                    <Label className="mb-2 text-sm font-semibold text-gray-700">
                                        Image URL
                                    </Label>

                                    <div className="relative">

                                        <FaImage
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                        />

                                        <Input
                                            type="url"
                                            placeholder="https://example.com/bali.jpg"
                                            className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-100"
                                        />

                                    </div>

                                    <FieldError />

                                </TextField>

                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">

                                <TextField name="description" isRequired>

                                    <Label className="mb-2 text-sm font-semibold text-gray-700">
                                        Description
                                    </Label>

                                    <div className="relative">

                                        <TextArea
                                            placeholder="Describe the travel experience..."
                                            className="w-full rounded-3xl pl-5 pt-4 border-2 border-gray-100 min-h-37.5"
                                        />

                                    </div>

                                    <FieldError />

                                </TextField>

                            </div>

                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">

                            <Button
                                type="submit"
                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                            >
                                Add Travel Package
                            </Button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddDestinationPage;