import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isQuizInProgress, setQuizInProgress] = useState<boolean>(false);
    const startQuiz = (): void => {
        if (attempts > 0) {
            setQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    };
    const mulligan = (): void => {
        setAttempts(attempts + 1);
    };
    const stopQuiz = (): void => {
        setQuizInProgress(false);
    };
    return (
        <div>
            <h2>Quiz Attempts: {attempts}</h2>
            <Button
                onClick={startQuiz}
                disabled={isQuizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isQuizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isQuizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
