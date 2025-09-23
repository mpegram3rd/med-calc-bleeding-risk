import './BleedingRiskCalc.css'
import Calculator from "./Calculator.tsx";
import {useState} from 'react';
import ResultsContainer from "../results/ResultsContainer.tsx";
import {SimpleGrid} from "@mantine/core";

export default function BleedingRiskCalc() {
    const [score, setScore] = useState<number>(0);

    return (
        <SimpleGrid cols={({ base: 1, md: 2 })}>
            <Calculator setScore={setScore}/>
            <ResultsContainer score={score}/>
        </SimpleGrid>
    );
}