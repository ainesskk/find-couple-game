import "../styles/GameContainer.css";
import { useEffect, useState } from "react";
import fruitsArray from "../js/fruitsArray.js";
import { formFruitsObject } from "../js/arrayFuncs.js";
import Card from "./Сard.jsx";

const GameContainer = () => {
    const [fruits, setFruits] = useState({});

    useEffect(() => {
        const shuffledFruits = formFruitsObject([...fruitsArray]);
        setFruits(shuffledFruits);
    }, []);

    return (
        <>
            <div className="game-container">
                {Object.keys(fruits).map((key) => (
                     <Card key={key} fruit={fruits[key]} uuid={key}/>
                ))}
            </div>
        </>
    );
}

export default GameContainer;
