import React, { useState } from "react";
interface MultipleChoiceQuestionsProps {
    expectedAnswer: string;
    options: string[];
}
export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: MultipleChoiceQuestionsProps): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(e.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {/* Display whether the answer is correct or incorrect */}
                {selectedChoice === expectedAnswer ?
                    <span role="img" aria-label="correct">
                        ✔️
                    </span>
                :   <span role="img" aria-label="incorrect">
                        ❌
                    </span>
                }
            </div>
        </div>
    );
}
