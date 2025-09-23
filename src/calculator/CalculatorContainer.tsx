import './CalculatorContainer.css'
import Calculator from "./Calculator.tsx";
import {useState} from 'react';
import ResultsContainer from "../results/ResultsContainer.tsx";
import {SimpleGrid} from "@mantine/core";

export default function CalculatorContainer() {
    const [score, setScore] = useState<number>(0);

    return (
        <SimpleGrid cols={({ base: 1, md: 2 })}>
            <Calculator setScore={setScore}/>
            <ResultsContainer score={score}/>
        </SimpleGrid>
    );
}