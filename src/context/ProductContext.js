import { createContext, useEffect, useState } from "react";
import { PRODUCT } from "../Utilities/DummyProductData";
import { toast } from 'react-toastify';

export const ProductContext = createContext()


export const ProductContextProvider = ({
    children,
}) => {

    const [filteredList, setFilteredList] = useState(PRODUCT);
    const [price, setPrice] = useState(null)
    const [cart, setCart] = useState([]);

    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState()


    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id)
                isPresent = true;
        })
        if (isPresent) {

            toast.error('Product Already Added');
        }
        if (!isPresent) {

            toast.success('Product Added to Cart');
            setCart([...cart, item]);
        }

    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;

        setCart([...tempArr])
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };
    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...PRODUCT];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };
    let value
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => {
            ans += item.amount * item.price


        }
        )
        setPrice(ans)
    }


    useEffect(() => {
        handlePrice();
    }, [cart,])
    return (
        <ProductContext.Provider value={{ cart, setCart, handleChange, handleClick, handleRemove, filteredList, filterBySearch, price, progress, setProgress, url, setUrl }}>
            {children}
        </ProductContext.Provider>
    );
};