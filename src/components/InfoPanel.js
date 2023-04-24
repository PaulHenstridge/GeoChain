import styled from 'styled-components'

const InfoPanel = ({ message }) => {
    if (!message.length) return

    return (<>
        <Message>
            <h3>{message}</h3>

        </Message>

    </>);
}

export default InfoPanel;

const Message = styled.div`
    border: 2px solid white;
    width: max-content;
    margin: 2rem auto;
    padding:1rem 3rem;
`