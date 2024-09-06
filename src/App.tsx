import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Leah Marcelli UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Panda </h1>; This is{" "}
            <span style={{ color: "red" }}> my favorite animal</span>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. <code> Hello World!</code>
            </p>
            <p>Pandas love to eat bamboo.</p>
            <div>
                <h1>Hello World</h1>
                <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.careanimal.com%2Fblog%2Fgiant-pandas&psig=AOvVaw1o8GsiJulhXdRyMBY-kmz4&ust=1725748499424000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDigKSwr4gDFQAAAAAdAAAAABAE"
                    alt="A picture of my my favorite animal"
                />
            </div>
            ;
            <div>
                <h1>Hello World</h1>
                <p>How are you doing today?</p>
            </div>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
            </div>
            <div>
                Unordered List:
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
                Ordered List:
                <ol>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ol>
            </div>
            <div>
                <Button>Click Me</Button>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Click Me
                </Button>
            </div>
            ; ;
        </div>
    );
}

export default App;
