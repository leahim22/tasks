import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(d6());
    const [rightDice, setRightDice] = useState<number>(d6());
    const [gameStatus, setGameStatus] = useState<string | null>(null);

    const checkGameStatus = (left: number, right: number): void => {
        if (left === right) {
            setGameStatus(left === 1 ? "Lose" : "Win");
        } else {
            setGameStatus(null); // Reset status if not matched
        }
    };
    const leftRoll = (): void => {
        const newValue = d6();
        setLeftDice(newValue);
        checkGameStatus(newValue, rightDice);
    };

    const rightRoll = (): void => {
        const newValue = d6();
        setRightDice(newValue);
        checkGameStatus(leftDice, newValue);
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDice}</span>
                <span data-testid="right-die">{rightDice}</span>
            </div>
            <Button onClick={leftRoll}>Roll Left</Button>
            <Button onClick={rightRoll}>Roll Right</Button>
            {gameStatus && <div>{gameStatus}</div>}
        </div>
    );
}
