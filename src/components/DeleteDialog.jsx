"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

export function DeleteDialog({destination}) {
    const {_id, destinationName} = destination;
    const handleDelete = async() =>{
        const res = await fetch(`http://localhost:5000/destination/${_id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const data = await res.json();
        if(data.deletedCount > 0){
            redirect('/destinations')
        }
        // console.log(data);
    }
    return (
        <AlertDialog>

            <Button variant='outline' className={'flex items-center rounded-lg my-5 text-red-500'}><FaRegTrashAlt/> Delete</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}