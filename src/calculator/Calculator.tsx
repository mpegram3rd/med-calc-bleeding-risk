import type {Dispatch, SetStateAction} from "react";

interface CalculatorProps {
    setScore: Dispatch<SetStateAction<number>>;
}

const Calculator: React.FC<CalculatorProps> = ({setScore}) => {

    const changeScore = (changeAmount: number) => {
        setScore(prevScore => prevScore + changeAmount);
    }

    return (
        <div className="calculator">
            <h2>Calculator will go here just need to build a table</h2>
        </div>
    );
}

export default Calculator;