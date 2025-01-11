import "../styles/GameContainer.css";
import { useEffect, useState } from "react";
import fruitsArray from "../js/fruitsArray.js";
import { formFruitsObject } from "../js/arrayFuncs.js";
import Card from "./Сard.jsx";

const GameContainer = () => {
    const [fruits, setFruits] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const onClick = (clickedCard) => {
        let selectedCard;
        setFruits(prevState => {
            return prevState.map(item => {
                if(!item.isFlipped && item.uuid === clickedCard.uuid) {
                    console.log("массив выбранных",selectedCards);
                    selectedCard = item;
                }
                if (item.uuid === clickedCard.uuid) {
                    console.log("нажатая", item);
                    let newValue = !item.isFlipped;
                    return { ...item, isFlipped: newValue };
                }
                return item;
            });
        });
        setSelectedCards(prevState => [...prevState, selectedCard]);

    }

    const turnOverCard = (card) => {
        console.log("переворот");
        setFruits(prevState => {
            return prevState.map(item => {
                if (item.uuid === card.uuid) {
                    let newValue = !item.isFlipped;
                    return { ...item, isFlipped: newValue };
                }
                return item;
            });
        });
    }

    useEffect(() => {
        const shuffledFruits = formFruitsObject([...fruitsArray]);
        setFruits(shuffledFruits);
    }, []);

    useEffect(() => {
        if (selectedCards.length === 2) {
            console.log("массовый дизейбл ");
            setDisabled(prevState => !prevState);
        }
        setTimeout(() => {
            console.log("выбранные карты не 2", selectedCards);
            if (selectedCards.length === 2) {
                console.log("массовый дизейбл ");
                console.log("выбранные карты ", selectedCards);
                if (selectedCards[0].fruit === selectedCards[1].fruit) {
                    setFruits(prevState => {
                        return prevState.map(item => {
                            if (item.uuid === selectedCards[0].uuid || item.uuid === selectedCards[1].uuid) {
                                return { ...item, isMatched: true };
                            }
                            return item;
                        });
                    });
                    setSelectedCards([]);
                } else {
                    turnOverCard(selectedCards[0]);
                    turnOverCard(selectedCards[1])
                    setSelectedCards([]);
                }
            }}, 800)
        if (selectedCards.length === 0) {
            console.log("массовый раздизейбл ");
            setDisabled(prevState => !prevState);
        }
    }, [selectedCards]);

    return (
        <div className="game-container">
            {fruits.map((fruit) => (
                <Card key={fruit.uuid} fruit={fruit} onClick={onClick} disabled={disabled}/>
            ))}
        </div>
    );
};

export default GameContainer;
