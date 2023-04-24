const Input = ({ onInputChange, onUserSubmit, country }) => {
    if (!country) return

    return (<>
        {<h4>Choose your next destination, which borders {country.name}</h4>}
        <input type="text"
            placeholder="Enter Country Name"
            onChange={onInputChange} />
        <button onClick={onUserSubmit}>GO!</button>

    </>

    );
}
//  ******* change above back to a button event to work again.  done for the day.  pfft.👍
export default Input;