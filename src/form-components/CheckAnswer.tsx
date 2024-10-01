import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };
    const isCorr = userAnswer === expectedAnswer;
    return (
        <div>
            <h2>Enter your answer:</h2>
            <input
                type="text"
                value={userAnswer}
                onChange={inputChange}
                placeholder="Type your answer"
            />
            <div>{isCorr ? "✔️" : "❌"}</div>
        </div>
    );
}
