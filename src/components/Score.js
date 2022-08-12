import React from 'react'
import { useSelector } from 'react-redux';

const Score = () => {
    const {score} = useSelector(store => store.game)
    return (
        <div className="header-score">
            <h4 className="header-score__title">SCORE</h4>
            <p className="header-score__number">{score}</p>
        </div>
    );
}

export default Score