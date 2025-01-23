import "./../styles/Card.css";
import PropTypes from "prop-types";
import apple from "./../assets/apple.png";
import broccoli from "./../assets/broccoli.png";
import carrot from "./../assets/carrot.png";
import cherries from "./../assets/cherries.png";
import grape from "./../assets/grape.png";
import orange from "./../assets/orange.png";
import raspberry from "./../assets/raspberry.png";
import strawberry from "./../assets/strawberry.png";


const Card = ({ fruit, onClick, disabled }) => {
    const images = {
        "apple": apple,
        "broccoli": broccoli,
        "carrot": carrot,
        "cherries": cherries,
        "grape": grape,
        "orange": orange,
        "raspberry": raspberry,
        "strawberry": strawberry,
    }

    const handleClick = () => {
        onClick(fruit);
    };

    // ${disabled ? "disabled" : ""}

    return (
        <div className="card-container">

            <div className={`card ${fruit.isFlipped ? "flipped" : ""} ${fruit.isMatched ? "matched" : ""} ${disabled ? "disabled" : ""}`} onClick={handleClick}>
                <div className="front"></div>
                <div className="back">
                    <img src={images[fruit.fruit]} alt={fruit.fruit}/>
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
