import React from 'react';
import { useEffect, useState } from "react";
import CardContext from "./CardContext.jsx";

const CardContextProvider = ({ children }) => {
    const [restart, setStart] = React.useState(false);

    useEffect(() => {

    }, [restart]);

    return (
        <CardContext.Provider value={{ restart }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;
