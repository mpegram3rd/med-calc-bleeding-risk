import './BleedingRiskContainer.css'
import BleedingRiskCalc from "./BleedingRiskCalc.tsx";
import {useState} from 'react';
import ResultsContainer from "../results/ResultsContainer.tsx";
import {SimpleGrid} from "@mantine/core";

export default function BleedingRiskContainer() {
    const [score, setScore] = useState<number>(0);

    return (
        <SimpleGrid cols={({ base: 1, md: 2 })}>
            <BleedingRiskCalc setScore={setScore}/>
            <ResultsContainer score={score}/>
        </SimpleGrid>
    );
}