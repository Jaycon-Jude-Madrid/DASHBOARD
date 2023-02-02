
import { doc, setDoc, Timestamp, } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { useProductContext } from './useProductContext'

import { db } from "../Firebase-config";

import { toast } from "react-toastify";
import { useCustomerContext } from "./useCustomerContext";
import { MONTH } from "../Utilities/Date";
export const useAdd = () => {

    const { setCart, cart } = useProductContext();
    const { setCustomer, customers } = useCustomerContext();
    const id = uuid();
    ;

    const addRecentTransactions = async (cartValue, price, customer) => {
        const DateObj = new Date();
        const months = DateObj.getMonth();
        let monthNow = MONTH[months]
        try {

            if (!customer) {
                toast.warning('Please add a customer')
            } else if (cart.length === 0) {
                toast.warning('No product in the cart')
            } else {
                await setDoc(doc(db, "Transactions", id,), {
                    customer: customer,
                    cartValue,
                    id,
                    totalAmount: price,
                    Timestamp: Timestamp.fromDate(new Date()),
                    Month: monthNow,
                });

                setCart([])
                setCustomer('')
                toast.success('Checked Out Successfully')
            }

        } catch (error) {
            toast.error(`${error.message}`)
        }
    }

    const addCustomer = async (data, setInputs, initialValue) => {
        let value;

        customers.forEach((item) => {
            if (item.Name.indexOf(data.name) !== -1) {
                value = true;
            }
        })
        try {
            if (!data.name || !data.contact) {
                toast.warning('Please Input all the fields');

            } else if (value) {
                toast.warning("Customer already exists")
                setInputs(initialValue)
            }
            else {

                await setDoc(doc(db, "Customers", id,), {
                    Name: data.name,
                    Contact: data.contact,
                    Location: data.location,
                    id: id,
                    Timestamp: Timestamp.fromDate(new Date())
                });
                setInputs(initialValue)
                toast.success('Customer Added Successfully')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { addRecentTransactions, addCustomer }
}

