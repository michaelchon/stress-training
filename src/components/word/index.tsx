import React from "react";

import Letter from "./letter";
import "./index.css";

interface IWordProps {
    word: string;
}

const Word: React.FC<IWordProps> = ({ word }) => {
    const additionalPartMatches = word.match(/\(.+\)/);
    let additionalPart = null;
    if (additionalPartMatches) {
        additionalPart = additionalPartMatches[0];
        word = word.replace(additionalPart, "").trim();
    }

    const lowerCaseWord = word.toLowerCase();
    const letters = lowerCaseWord
        .split("")
        .map((letter, i) => (
            <Letter
                word={word}
                letterIndex={i}
                letter={letter}
                key={word + i.toString()}
            />
        ));

    return (
        <div className="word-container">
            <div className="word">{letters}</div>
            <div className="additional-part">{additionalPart}</div>
        </div>
    );
};

export default Word;
