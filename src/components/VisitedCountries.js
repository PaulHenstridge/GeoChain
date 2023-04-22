const VisitedCountries = ({ countries }) => {
    return (
        <>
            {countries.length > 0 && <h3>Visited Countries list</h3>}
            {countries.map(country => {
                return <li>{country.name} {country.flag}</li>
            })}
        </>

    );
}

export default VisitedCountries;