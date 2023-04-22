const Input = ({ onInputChange, onUserSubmit, country }) => {
    return (<>
        {!country ? <h4>Enter a starting country</h4> : <h4>name a bordering country</h4>}
        <input type="text"
            placeholder="Enter Country Name"
            onChange={onInputChange} />
        <button onClick={onUserSubmit}>GO!</button>

    </>

    );
}

export default Input;