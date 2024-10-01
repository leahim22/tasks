import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };
    const handleGainAttempts = () => {
        const requested = parseInt(requestedAttempts, 10);
        if (!isNaN(requested) && requested > 0) {
            setAttemptsLeft(attemptsLeft + requested);
            setRequestedAttempts(""); // Clear the input after gaining attempts
        }
    };
    const handleRequestedAttemptsChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRequestedAttempts(e.target.value);
    };
    return (
        <div>
            <h2>Quiz Attempts</h2>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedAttemptsChange}
                placeholder="Enter number of attempts"
            />
            <div>
                <button onClick={handleUseAttempt} disabled={attemptsLeft <= 0}>
                    Use
                </button>
                <button onClick={handleGainAttempts}>Gain</button>
            </div>
        </div>
    );
}
