import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

export const useCustomerContext = () => {
    const context = useContext(CustomerContext);

    if (!context) {
        throw Error(
            "useCustomerContext must be used inside an useCustomerContextProvider"
        );
    }
    return context;
};