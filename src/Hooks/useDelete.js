import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../Firebase-config';

export const useDelete = () => {

    const deleteCustomer = async (ID) => {
        await deleteDoc(doc(db, "Customers", ID));

    }

    return { deleteCustomer }
}
