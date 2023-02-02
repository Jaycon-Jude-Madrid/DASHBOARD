import { async } from "@firebase/util";
import { collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase-config";

export const TransactionsContex = createContext()

export const TransactionsContextProvider = ({
    children,
}) => {
    const [AllTransactions, setAllTransactions] = useState([]);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [ID, setID] = useState();
    const getLimitTransaction = () => {
        try {
            const ref = collection(db, "Transactions");
            const q = query(ref, orderBy("Timestamp", "desc"), limit(10));
            onSnapshot(q, (querySnapshot) => {

                let transactions = [];
                querySnapshot.forEach((doc) => {
                    transactions.push(doc.data());
                });
                setRecentTransactions(transactions);
            });
        } catch (e) {
        }
    }

    const getAllTransaction = () => {
        try {
            const ref = collection(db, "Transactions");
            const q = query(ref, orderBy("Timestamp", "desc"));
            onSnapshot(q, (querySnapshot) => {
                let transactions = [];
                querySnapshot.forEach((doc) => {
                    transactions.push(doc.data());
                });
                setAllTransactions(transactions);
            });
        } catch (e) {
        }
    }

    useEffect(() => {
        getLimitTransaction()
        getAllTransaction();
    }, [])
    return (
        <TransactionsContex.Provider value={{ AllTransactions, recentTransactions, ID, setID }}>
            {children}
        </TransactionsContex.Provider>
    );
};