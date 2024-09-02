import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    // function for add
    const plus = (e) => {
        e.preventDefault();
        const num = parseFloat(inputRef.current.value);
        setResult((prevResult) => prevResult + num);
    };

    // function for minus
    const minus = (e) => {
        e.preventDefault();
        const num = parseFloat(inputRef.current.value);
        setResult((prevResult) => prevResult - num);
    };

    // function for times
    const times = (e) => {
        e.preventDefault();
        const num = parseFloat(inputRef.current.value);
        setResult((prevResult) => prevResult * num);
    };

    // function for divide
    const divide = (e) => {
        e.preventDefault();
        const num = parseFloat(inputRef.current.value);
        if (num !== 0) {
            setResult((prevResult) => prevResult / num);
        } else {
            console.error("Cannot divide by zero.");
        }
    };

    // reset input field
    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    };

    // reset result 
    const resetResult = (e) => {
        e.preventDefault();
        setResult(0);
        inputRef.current.value = 0;
    };

    return (
        <div>
            <h2>Build a Calculator using React</h2>
            <form>
                <p ref={resultRef}>{result}</p>
                <input
                    type="number"
                    ref={inputRef}
                    name="number"
                    id="number"
                    placeholder="Type a number"
                />
                <br />
                <button onClick={plus}>Add</button>
                <button onClick={minus}>Subtract</button>
                <button onClick={times}>Multiply</button>
                <button onClick={divide}>Divide</button>
                <button onClick={resetInput} className="btn1">Reset Input</button>
                <button onClick={resetResult} className="btn2">Reset Result</button>
            </form>
        </div>
    );
};

export default App;
