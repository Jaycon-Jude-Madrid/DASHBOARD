import React from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase-config';
import { useCustomerContext } from './useCustomerContext';
export const useGetData = () => {

    const { editCustomer, setEditCustomer } = useCustomerContext();

    const getRecentTransactionsData = (id) => {
        onSnapshot(doc(db, "Transactions", id), (doc) => {
            console.log("Current data: ", doc.data());
        });
    }


    const getCustomer = (id) => {
        onSnapshot(doc(db, "Customers", id), (doc) => {
            setEditCustomer(doc.data());

        });

    }
    return { getRecentTransactionsData, getCustomer };
}

