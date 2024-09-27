import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { Counter } from "./components/Counter";
import { CycleHoliday } from "./components/CycleHoliday";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button } from "react-bootstrap";
import { TwoDice } from "./components/TwoDice";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Leah Marcelli UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Pedro the Panda </h1>; This is{" "}
            <span style={{ color: "red" }}> my favorite animal</span>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. <code> Hello World!</code>
            </p>
            <div style={{ backgroundColor: "red" }}>Pandas love Sky Blue.</div>
            <p>Pandas love to eat bamboo.</p>
            <div>
                <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.careanimal.com%2Fblog%2Fgiant-pandas&psig=AOvVaw1o8GsiJulhXdRyMBY-kmz4&ust=1725748499424000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDigKSwr4gDFQAAAAAdAAAAABAE"
                    alt="A picture of my my favorite animal"
                />
            </div>
            ;
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
            </div>
            <div>
                Pandas favorite things:
                <ol>
                    <li>Food</li>
                    <li>Playing</li>
                    <li>Other Pandas</li>
                </ol>
            </div>
            <div>
                <Button>Click Me</Button>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <hr></hr>
            <ChangeType></ChangeType>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr />
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr />
            ;;
        </div>
    );
}

export default App;
