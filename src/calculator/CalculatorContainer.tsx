import './CalculatorContainer.css'
import Advice from './Advice.tsx'
import Calculator from "./Calculator.tsx";

export default function CalculatorContainer() {
    return (
        <div className="calc-container">
            <Calculator/>
            <Advice/>
        </div>
    );
}