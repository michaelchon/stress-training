import React, { useCallback, useEffect, useState } from "react";

import words from "../../config/words";
import Word from "../word";
import getRandom from "../../utils/get-random";
import "normalize.css";
import "./index.css";
import NextWordBtn from "../next-word-btn";

const wordChoices = words.slice();

const App: React.FC = () => {
    const [chosenWord, setChosenWord] = useState(() => getRandom(wordChoices));
    const [noWordsLeft, setNoWordsLeft] = useState(false);

    const changeWord = useCallback(() => {
        wordChoices.splice(wordChoices.indexOf(chosenWord), 1);

        if (!wordChoices.length) {
            setNoWordsLeft(true);
            return;
        }

        setChosenWord(() => getRandom(wordChoices));
    }, [chosenWord]);

    useEffect(() => {
        const handleSpaceDown = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                changeWord();
            }
        };

        window.addEventListener("keydown", handleSpaceDown);

        return () => window.removeEventListener("keydown", handleSpaceDown);
    }, [chosenWord, changeWord]);

    if (noWordsLeft) {
        return (
            <div className="container">
                <div className="no-words-left">Больше слов нет.</div>
            </div>
        );
    }

    return (
        <div className="container">
            <Word word={chosenWord} />
            <NextWordBtn changeWord={changeWord} />
        </div>
    );
};

export default App;
