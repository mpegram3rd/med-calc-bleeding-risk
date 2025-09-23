import './CalculatorContainer.css'
import Calculator from "./Calculator.tsx";
import {useState} from 'react';
import ResultsContainer from "../results/ResultsContainer.tsx";

export default function CalculatorContainer() {
    const [score, setScore] = useState<number>(0);

    return (
        <div className="calc-container">
            <Calculator setScore={setScore}/>
            <ResultsContainer score={score}/>
        </div>

    );
}