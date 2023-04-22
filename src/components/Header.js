import Input from "./Input";
import Score from "./Score";
import Button from "./Button";

const Header = ({ onInputChange, onUserSubmit, country, score, onStartClick }) => {
    return (
        <>
            <Input country={country} onInputChange={onInputChange} onUserSubmit={onUserSubmit} />
            <Score score={score} />
            <Button onClickFunc={onStartClick} />
        </>
    )
}

export default Header;