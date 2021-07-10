import React from "react";

import "./index.css";

interface INextWordBtnProps {
    changeWord: () => void;
}

const NextWordBtn: React.FC<INextWordBtnProps> = ({ changeWord }) => {
    return (
        <div className="next-word-btn" onClick={changeWord}>
            {">"}
        </div>
    );
};

export default NextWordBtn;
