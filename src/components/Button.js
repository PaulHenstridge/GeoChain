const Button = ({ onClickFunc, buttonText }) => {
    return (<>
        <button onClick={onClickFunc}>{buttonText}</button>
    </>);
}

export default Button;