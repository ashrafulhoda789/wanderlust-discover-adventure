"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaRegTrashAlt } from "react-icons/fa";

export function BookingCancelAlart({booking}) {

    const handleCancelBooking = async() =>{
        const res = await fetch(`http://localhost:5000/booking/${booking._id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            }
        })

        const data = await res.json();

        window.Location.reload();
    }

    return (
        <AlertDialog>
            <Button variant='outline' className={'flex items-center rounded-lg my-5 text-red-500'}><FaRegTrashAlt /> Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel this place permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{booking.destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}