import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        { name: "Birthday", emoji: "🎂", timeofYear: 1 },
        { name: "Christmans", emoji: "🎄", timeofYear: 12 },
        { name: "Easter", emoji: "🐰", timeofYear: 4 },
        { name: "Halloween", emoji: "🎃", timeofYear: 10 },
        { name: "Thanksgiving", emoji: "🦃", timeofYear: 11 },
    ];
    const alphabetized = [...holidays].sort((a, b) =>
        a.name.localeCompare(b.name),
    );
    const byTime = [...holidays].sort((a, b) => a.timeofYear - b.timeofYear);
    const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0);
    const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
    const [isAlphabetOrder, setIsAlphabetOrder] = useState(true);
    //const [currentHoliday, setCurrentHoliday] = useState(0);

    const nextAlphHoliday = () => {
        setCurrentAlphabetIndex(
            (current) => (current + 1) % alphabetized.length,
        );
        setIsAlphabetOrder(true);
    };
    const nextTimeHoliday = () => {
        setCurrentTimeIndex((current) => (current + 1) % byTime.length);
        setIsAlphabetOrder(false); // Indicate we are displaying time-based cycling
    };
    const currentHoliday =
        isAlphabetOrder ?
            alphabetized[currentAlphabetIndex]
        :   byTime[currentTimeIndex];

    return (
        <div>
            <h3>Cycle Holiday</h3>
            <p>Holiday: {currentHoliday.emoji}</p>
            <Button onClick={nextAlphHoliday}>Advance by Alphabet</Button>
            <Button onClick={nextTimeHoliday}>Advance by Year</Button>
        </div>
    );
}
