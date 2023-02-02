import { useContext } from "react";
import { TransactionsContex } from "../context/TransactionsContext";


export const useTransactionsContext = () => {
    const context = useContext(TransactionsContex);

    if (!context) {
        throw Error(
            "useTransactionsContext must be used inside an useTransactionsContextProvider"
        );
    }
    return context;
};