import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerVisible, setAnswerVisible] = useState<boolean>(false);
    const changeAnswerVisibility = (): void => {
        setAnswerVisible((prevState) => !prevState);
    };
    return (
        <div>
            <Button onClick={changeAnswerVisibility}>Reveal Answer</Button>
            {answerVisible && <h2>42</h2>}
        </div>
    );
}
