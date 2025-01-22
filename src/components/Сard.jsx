import "../styles/Card.css";
import PropTypes from "prop-types";

const Card = ({ fruit, onClick, disabled }) => {


    const handleClick = () => {
        onClick(fruit);
    };

    return (
        <div className="card-container">
            <div className={`card ${fruit.isFlipped ? "flipped" : ""} ${fruit.isMatched ? "matched" : ""} ${disabled ? "disabled" : ""}`} onClick={handleClick}>
                <div className="front"></div>
                <div className="back">
                    <img src={`../assets/${fruit.fruit}.png`} alt={fruit.fruit} />
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    fruit: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        fruit: PropTypes.string.isRequired,
        isFlipped: PropTypes.bool.isRequired,
        isMatched: PropTypes.bool.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default Card;
