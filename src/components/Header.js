import styled from "styled-components";

import Input from "./Input";
import Score from "./Score";
import Button from "./Button";

const Header = ({ onInputChange, onUserSubmit, country, score, onStartClick, onReturn }) => {
    let btnTxt = country ? 'Start Again?' : 'Start your Journey'

    return (
        <>
            <Title>⛓GeoChain⛓</Title>
            <Nav>
                <Button onClickFunc={onStartClick} buttonText={btnTxt} />

                <Input country={country}
                    onInputChange={onInputChange}
                    onUserSubmit={onUserSubmit}
                    onReturn={onReturn} />
                <Score score={score} />

            </Nav>
        </>
    )
}

export default Header;

const Title = styled.h1`
    padding:2rem;
    font-size:3.6rem;
`
const Nav = styled.nav`
display: block;

Button{
    padding:0.4rem 1.6rem;
    border-radius: 8%;
    border: none;
    box-shadow:-2px 1px 3px 1px grey;
}
Button:active {
    box-shadow: none;
    transform: translateY(1px)
}

input {
    height: 31.78px;
    background-color: darkslategray;
    border:none;
}
`

