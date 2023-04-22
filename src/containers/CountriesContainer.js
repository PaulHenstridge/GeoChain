import React, { useState, useEffect } from 'react';

import Header from "../components/Header";
import GameDisplay from "../components/GameDisplay";
import VisitedCountries from "../components/VisitedCountries";
import InfoPanel from '../components/InfoPanel';


const CountriesContainer = () => {

    const [allCountries, setAllCountries] = useState([])

    const [inputValue, setInputValue] = useState('')
    const [currentLocation, setCurrentLocation] = useState('')
    const [country, setCountry] = useState(null)
    const [visitedCountries, setVisitedCountries] = useState([])

    const [borders, setBorders] = useState([])
    const [targetCountry, setTargetCountry] = useState(null)

    const [infoMessage, setInfoMessage] = useState('Welcome to CountryChain!  Select a starting point, then try to create a chain of connecting countries, without revisiting any')
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetchAll()
    }, [])

    const fetchAll = async () => {
        let response = await fetch(`https://restcountries.com/v3.1/all`)
        let data = await response.json()
        setAllCountries(data)
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleOnUserSubmit = () => {
        setCurrentLocation(inputValue)
        setInfoMessage('')
    }

    const handleOnStartClick = () => {
        // choose random country, set at country.  keep input hidden until country
        let idx = Math.floor(Math.random() * allCountries.length)
        setCountry(allCountries[idx])
        setBorders(allCountries[idx].borders)
    }

    useEffect(() => {
        fetchCountry(currentLocation)
    }, [currentLocation])

    // TODO - catch errors in fetch  - how with async?

    /* what to do with fetch data?
 
     if no country currently displyed, get one and swt it to state.
     if ther eis a country already, compare the code of ne new country
     to the borders of the current one.  if they match, set as new current country.
     otherwise, do something else.
 
    */



    const fetchCountry = async (currLoc) => {
        let response = await fetch(`https://restcountries.com/v3.1/name/${currLoc}`)
        let data = await response.json()
        // console.log(data[0].cca3, country.borders)
        // if(data[0].cca3) is in the current loc array, set obj below, else handle error
        // if (country && country.borders.indexOf(data[0].cca3) > 0) {
        let countryObj = {
            name: data[0].name.common,
            flag: data[0].flag,
            flagUrl: data[0].flags.png,
            borders: data[0].borders,
            code: data[0].cca3
        }
        console.log(countryObj)
        if (country !== null) {
            setTargetCountry(countryObj)
        } else {
            setCountry(countryObj)
            setBorders(data[0].borders)
            setVisitedCountries([...visitedCountries, countryObj])
        }
    }

    useEffect(() => {
        if (borders !== null && targetCountry !== null) { compare() }
    }, [targetCountry])

    const compare = () => {
        if (borders.includes(targetCountry.code)) {
            console.log()
            if (visitedCountries.some(country => country.code === targetCountry.code)) {
                setInfoMessage(`You already visited ${targetCountry.name}`)
            } else {
                setCountry(targetCountry)
                setBorders(targetCountry.borders)
                setVisitedCountries([...visitedCountries, targetCountry])
                setScore(score + 1)
            }
        } else {
            setInfoMessage(`Sorry, ${targetCountry.name} does not border ${country.name}`)
        }
    }

    return (<>
        <Header country={country}
            onInputChange={handleInputChange}
            onUserSubmit={handleOnUserSubmit}
            score={score}
            onStartClick={handleOnStartClick} />
        <GameDisplay country={country} message={infoMessage} />
        <InfoPanel message={infoMessage} />

        <VisitedCountries countries={visitedCountries} />
    </>);
}

export default CountriesContainer;