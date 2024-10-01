import React, { useState } from "react";
// eslint-disable-next-line no-sparse-arrays
interface colorsOpts {
    label: string;
    value: string;
}
const colors: colorsOpts[] = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Orange", value: "orange" },
    { label: "Purple", value: "purple" },
    { label: "Cyan", value: "cyan" },
    { label: "Magenta", value: "magenta" },
    { label: "White", value: "white" },
    { label: "Black", value: "black" },
];
export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0].value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {/* Render radio buttons for each color option */}
            {colors.map((color) => (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <label key={color.value} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        name="color"
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        value={color.value}
                        checked={selectedColor === color.value}
                        onChange={handleChange}
                    />
                    {color.label}
                </label>
            ))}
            {/* Box of text with data-testid attribute */}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: selectedColor,
                    color: "white",
                    border: "1px solid #000",
                }}
            >
                The background color is {selectedColor}.
            </div>
        </div>
    );
}
