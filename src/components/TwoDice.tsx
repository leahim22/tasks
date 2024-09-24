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
    const leftRoll = (): void => {
        setLeftDice(d6());
    };
    const rightRoll = (): void => {
        setRightDice(d6());
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDice}</span>
                <span data-testid="right-die">{rightDice}</span>
            </div>
            <Button onClick={leftRoll}>Roll Left</Button>
            <Button onClick={rightRoll}>Roll Right</Button>
            {(() => {
                if (leftDice === rightDice) {
                    return leftDice === 1 ? <div>Lose</div> : <div>Win</div>;
                }
                return null;
            })()}
        </div>
    );
}
