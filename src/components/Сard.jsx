import "../styles/Card.css"
import {useContext, useEffect, useState} from "react";
import CardContext from "../contexts/CardContext.jsx";
import PropTypes from "prop-types";

const Card = ({fruit, uuid}) => {
    const {allDisabled, setSelectedCards, disableFlipping} = useContext(CardContext)
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (disableFlipping && isFlipped) setIsFlipped(false);
    }, [disableFlipping]);

    const onCardClick = () => {
        setIsFlipped(prevState => !prevState);
        setSelectedCards(prevState => [...prevState, {"id": uuid, "fruit": fruit}]);
    }
    // ${allDisabled ? " disabled" : ""}
    return (
        <>
            <div className="card-container">
                <div className={`card ${isFlipped ? " flipped" : ""} `} onClick={onCardClick}>
                    <div className="front"></div>
                    <div className="back">
                        <img src={`src/assets/${fruit}.png`} alt="apple"/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;

Card.propTypes = {
    uuid: PropTypes.string,
    fruit: PropTypes.string,
}
