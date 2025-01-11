import "../styles/ModalWindow.css"
import PropTypes from "prop-types";

const ModalWindow = ({isModalWindowShown, onClickRestart}) => {

    const onClick = () => {
        onClickRestart();
    }
    return (
        <>
            <div className={`modal-window-container ${isModalWindowShown ? "" : "hidden-window"}`}>
                <p>Play again ?</p>
                <button onClick={onClick}>Yes</button>
            </div>
        </>
    )
}

export default ModalWindow;

ModalWindow.propTypes = {
    isModalWindowShown: PropTypes.bool.isRequired,
    onClickRestart: PropTypes.func.isRequired,
}