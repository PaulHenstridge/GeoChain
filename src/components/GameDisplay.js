
const GameDisplay = ({ country }) => {
    if (!country) return
    return (
        <>
            <h2>You are in {country.name}</h2>
            <img src={country.flagUrl} alt="" srcset="" />
        </>

    );
}

export default GameDisplay;