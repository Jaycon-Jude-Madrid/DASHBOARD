import { doc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from 'react-toastify'
// Add a new document in collection "cities"




import React from 'react'
import { db } from "../Firebase-config";

export const useUpdate = () => {

    const updateCustomers = async (ID, data) => {
        await updateDoc(doc(db, "Customers", ID), {
            Name: data.name,
            Location: data.location,
            Contact: data.contact,
        });
        toast.success("Updated Customer")
    }

    return { updateCustomers }
}
