import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>My Page</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. - Daniel
            </p>
            <p>Hello World</p>
            <ul>
                <li>Nah</li>
                <li>No</li>
                <li>Nope</li>
            </ul>
            <img
                src="https://firefox-settings-attachments.cdn.mozilla.net/main-workspace/newtab-wallpapers-v2/966b18ad-3733-41c4-92f6-c89cdf1381d0.avif"
                alt="An image of purple and ornage clouds, sky and ocean during a sunset"
            />
            <div
                style={{ width: 500, height: 500, backgroundColor: "red" }}
            ></div>
            ;
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
