import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext ";

export const useTransactionsContext = () => {
    console.log('Hi')
    const context = useContext(TransactionsContext);

    if (!context) {
        throw Error(
            "TransactionsContext  must be used inside an TransactionsContextProvider"
        );
    }
    return context;
};