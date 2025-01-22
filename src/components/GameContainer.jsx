import "../styles/GameContainer.css";
import { useEffect, useState } from "react";
import fruitsArray from "../js/fruitsArray.js";
import { formFruitsObject } from "../js/arrayFuncs.js";
import Card from "./Сard.jsx";
import ModalWindow from "./ModalWindow.jsx";

const GameContainer = () => {
    const [isModalWindowShown, setIsModalWindowShown] = useState(false);
    const [matchedCouples, setMatchedCouples] = useState(0);
    const [fruits, setFruits] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const onClickCard = (clickedCard) => {
        let selectedCard;
        setFruits(prevState => {
            return prevState.map(item => {
                if(!item.isFlipped && item.uuid === clickedCard.uuid) {
                    selectedCard = item;
                }
                if (item.uuid === clickedCard.uuid) {
                    let newValue = !item.isFlipped;
                    return { ...item, isFlipped: newValue };
                }
                return item;
            });
        });
        setSelectedCards(prevState => [...prevState, selectedCard]);
    }

    const onClickRestart = () => {
        const shuffledFruits = formFruitsObject([...fruitsArray]);
        setFruits(shuffledFruits);
        setIsModalWindowShown(false);
        setMatchedCouples(0);
        setDisabled(prevState => !prevState);
    }

    const turnOverCard = (card) => {
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
                setDisabled(prevState => !prevState);
                setTimeout(() => {
                if (selectedCards[0].fruit === selectedCards[1].fruit) {
                    setFruits(prevState => {
                        return prevState.map(item => {
                            if (item.uuid === selectedCards[0].uuid || item.uuid === selectedCards[1].uuid) {
                                return { ...item, isMatched: true };
                            }
                            return item;
                        });
                    });
                    setMatchedCouples(prevState => prevState+1)
                    setSelectedCards([]);
                } else {
                    turnOverCard(selectedCards[0]);
                    turnOverCard(selectedCards[1])
                    setSelectedCards([]);
                }}, 1000)
            }
        if (selectedCards.length === 0) {
            setDisabled(prevState => !prevState);
        }
        if (matchedCouples === 8) {
            setIsModalWindowShown(true);
        }
    }, [selectedCards, matchedCouples]);

    return (
        <>
            {isModalWindowShown && ( <ModalWindow isModalWindowShown={isModalWindowShown} onClickRestart={onClickRestart} /> )}
            <div className="game-container">
                {fruits.map((fruit) => (
                    <Card key={fruit.uuid} fruit={fruit} onClick={onClickCard} disabled={disabled}/>
                ))}
            </div>
        </>
    );
};

export default GameContainer;
