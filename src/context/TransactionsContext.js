import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase-config";

export const TransactionsContex = createContext()

export const TransactionsContextProvider = ({
    children,
}) => {
    const [Transactions, setTransactions] = useState([]);



    return (
        <TransactionsContex.Provider value={{ Transactions, setTransactions }}>
            {children}
        </TransactionsContex.Provider>
    );
};