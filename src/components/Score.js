const Score = ({ score }) => {
    return (<>
        {score > 0 && <h4>{score} {score > 1 && <span> in a row</span>}</h4>}
    </>);
}

export default Score;