import React from "react"
import Button from "./Button";

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Hello World!!!</h1>

            <Button title="Play Store" />
            <Button title="App Store" />

            {/* <center>
                <button className="button">Play Store</button>
                <button className="button">App Store</button>
            </center> */}
        </div>
    );
}

export default App;