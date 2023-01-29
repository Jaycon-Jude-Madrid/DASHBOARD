
import { doc, setDoc, Timestamp, query, collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

import { db } from "../Firebase-config";


export const useAddTransactions = () => {

    const addRecentTransactions = async (cart, customer) => {
        const id = uuid();

        const data = {
            customer: "Jaycon",
            cart,
            id

        }
        await setDoc(doc(db, "Transactions", id,), {
            data
        });

        alert('Data added')
    }

    const get = async () => {
        const q = query(collection(db, "Transaction"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {

            let cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
            });
            console.log(cities);
        });


    }

    useEffect(() => { get() }, [])

    return { addRecentTransactions }
}

