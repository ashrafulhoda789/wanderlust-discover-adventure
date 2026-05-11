"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { useRef } from "react";
import { BiEdit } from "react-icons/bi";
import { FaCalendarAlt, FaClock, FaDollarSign, FaGlobeAsia, FaImage, FaMapMarkedAlt } from "react-icons/fa";

export function EditModal({ destination }) {

    const {
        _id,
        imageUrl,
        country,
        destinationName,
        duration,
        price,
        description,
        departureDate,
        category
    } = destination;

    const closeRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());

        // console.log(destination);

        // console.log(destination);

        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(destination)
        })


        const data = await res.json()
        console.log(data);
        closeRef.current?.click();
    }

    return (
        <Modal>

            <Button variant='outline' className={'flex items-center rounded-lg my-5'}><BiEdit /> Edit</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-5xl rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-white">

                        {/* Close Button */}
                        <Modal.CloseTrigger ref={closeRef} className="top-5 right-5 bg-white shadow-md rounded-full" />


                        {/* Header */}
                        <Modal.Header className="bg-linear-to-r from-cyan-500 to-blue-600 p-8">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                    <Envelope className="size-7" />
                                </div>

                                <div>

                                    <Modal.Heading className="text-3xl font-bold text-white">
                                        Edit Destination
                                    </Modal.Heading>

                                    <p className="text-cyan-100 mt-1">
                                        Update your travel package details
                                    </p>

                                </div>

                            </div>

                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="bg-[#f8fbff] p-0">

                            <Surface
                                variant="default"
                                className="bg-transparent shadow-none border-none"
                            >

                                <form
                                    onSubmit={onSubmit}
                                    className="p-6 md:p-10 space-y-8"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                                        {/* Destination Name */}
                                        <div className="md:col-span-2">

                                            <TextField name="destinationName" defaultValue={destinationName} isRequired>

                                                <Label className="mb-2 text-sm font-semibold text-gray-700">
                                                    Destination Name
                                                </Label>

                                                <div className="relative">

                                                    <FaMapMarkedAlt
                                                        size={18}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                                    />

                                                    <Input
                                                        className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-200 bg-white shadow-sm focus:border-cyan-500 transition-all"
                                                    />

                                                </div>

                                                <FieldError />

                                            </TextField>

                                        </div>

                                        {/* Country */}
                                        <TextField name="country" defaultValue={country} isRequired>

                                            <Label className="mb-2 text-sm font-semibold text-gray-700">
                                                Country
                                            </Label>

                                            <div className="relative">

                                                <FaGlobeAsia
                                                    size={18}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                                />

                                                <Input

                                                    className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-200 bg-white shadow-sm"
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
                                                defaultValue={category}
                                                name="category"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                            >

                                                <Select.Trigger className="rounded-2xl h-14 border-2 border-gray-200 bg-white shadow-sm px-4">
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
                                        <TextField name="price" type="number" defaultValue={price} isRequired>

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

                                                    className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-200 bg-white shadow-sm"
                                                />

                                            </div>

                                            <FieldError />

                                        </TextField>

                                        {/* Duration */}
                                        <TextField name="duration" defaultValue={duration} isRequired>

                                            <Label className="mb-2 text-sm font-semibold text-gray-700">
                                                Duration
                                            </Label>

                                            <div className="relative">

                                                <FaClock
                                                    size={18}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                                                />

                                                <Input

                                                    className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-200 bg-white shadow-sm"
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
                                                defaultValue={departureDate}
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
                                                        className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-200 bg-white shadow-sm"
                                                    />

                                                </div>

                                                <FieldError />

                                            </TextField>

                                        </div>

                                        {/* Image URL */}
                                        <div className="md:col-span-2">

                                            <TextField name="imageUrl" defaultValue={imageUrl} isRequired>

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
                                                        className="w-full rounded-2xl pl-12 h-14 border-2 border-gray-200 bg-white shadow-sm"
                                                    />

                                                </div>

                                                <FieldError />

                                            </TextField>

                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">

                                            <TextField name="description" defaultValue={description} isRequired>

                                                <Label className="mb-2 text-sm font-semibold text-gray-700">
                                                    Description
                                                </Label>

                                                <div className="relative">

                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="w-full rounded-3xl px-5 pt-4 border-2 border-gray-200 bg-white shadow-sm min-h-40"
                                                    />

                                                </div>

                                                <FieldError />

                                            </TextField>

                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <Modal.Footer className="bg-white border-t border-gray-100 rounded-2xl px-8 py-5">

                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="rounded-xl px-6 h-11"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="rounded-xl px-8 h-11 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg"
                                        >
                                            Save Changes
                                        </Button>

                                    </Modal.Footer>

                                </form>

                            </Surface>

                        </Modal.Body>



                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}