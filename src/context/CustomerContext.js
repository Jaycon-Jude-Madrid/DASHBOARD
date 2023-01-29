import { createContext, useEffect, useState } from "react";

export const CustomerContext = createContext()

export const CustomerContextProvider = ({
    children,
}) => {

    return (
        <CustomerContext.Provider value={{}}>
            {children}
        </CustomerContext.Provider>
    );
};