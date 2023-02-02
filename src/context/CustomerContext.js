import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Firebase-config";

export const CustomerContext = createContext()

export const CustomerContextProvider = ({
    children,
}) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState("");
    const [customerID, setCustomerID] = useState();

    const [editCustomer, setEditCustomer] = useState([])
    const [ID, setID] = useState("");
    const getAllCustomers = () => {
        try {
            const ref = collection(db, "Customers");
            const q = query(ref, orderBy("Timestamp", "desc"));
            onSnapshot(q, (querySnapshot) => {
                let customers = [];
                querySnapshot.forEach((doc) => {
                    customers.push(doc.data());
                });
                setCustomers(customers);
            });
        } catch (e) {
        }
    }

    useEffect(() => {
        getAllCustomers();
    }, [])
    return (
        <CustomerContext.Provider value={{ customers, setCustomer, customer, ID, setID, customerID, setCustomerID, editCustomer, setEditCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
};