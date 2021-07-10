import React, { useState } from "react";

import vowels from "../../../config/vowels";
import LetterStatus from "../../../types/LetterStatus";
import "./index.css";

interface ILetterProps {
    word: string;
    letterIndex: number;
    letter: string;
}

const Letter: React.FC<ILetterProps> = ({ word, letterIndex, letter }) => {
    const [status, setStatus] = useState(LetterStatus.Initial);

    const handleClick = () => {
        if (!vowels.includes(letter.toLowerCase())) {
            return;
        }

        if (status !== LetterStatus.Initial) {
            setStatus(LetterStatus.Initial);
            return;
        }

        if (word[letterIndex] === word[letterIndex].toUpperCase()) {
            setStatus(LetterStatus.Successful);
        } else {
            setStatus(LetterStatus.Wrong);
        }
    };

    let className = "letter";
    if (status === LetterStatus.Successful) {
        className += " letter--successful";
    } else if (status === LetterStatus.Wrong) {
        className += " letter--wrong";
    }

    return (
        <span className={className} onClick={handleClick}>
            {letter}
        </span>
    );
};

export default Letter;
