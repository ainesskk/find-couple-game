// CardContextProvider.jsx
import { useEffect, useState } from "react";
import CardContext from "./CardContext.jsx";

const CardContextProvider = ({ children }) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [disableFlipping, setDisableFlipping] = useState(false);
    const [allDisabled, setAllDisabled] = useState(false);

    useEffect(() => {
        if (selectedCards.length === 2) {
            setDisableFlipping(true);
            // setAllDisabled(true);
            const elements = document.querySelectorAll('.flipped');
            setTimeout(() => {
                elements.forEach(element => {
                    element.classList.remove("flipped");
                });

            }, 1000);
            setDisableFlipping(false);
            setSelectedCards([]);
        }
    }, [selectedCards]);

    return (
        <CardContext.Provider value={{ allDisabled, setSelectedCards }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;
