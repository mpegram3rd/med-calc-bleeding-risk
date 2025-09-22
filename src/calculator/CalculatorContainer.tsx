import './CalculatorContainer.css'
import Advice from './Advice.tsx'
import Calculator from "./Calculator.tsx";
import {useState} from 'react';

export default function CalculatorContainer() {
    const [score, setScore] = useState<number>(0);

    return (
        <div className="calc-container">
            <Calculator setScore={setScore}/>
            <Advice/>
        </div>

    );
}