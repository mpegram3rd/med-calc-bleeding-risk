import {useState} from "react";
import {SimpleGrid} from "@mantine/core";
import ResultsContainer from "../../bleeding-calc/results/ResultsContainer.tsx";
import VteRiskCalc from "./VteRiskCalc.tsx";

export default function VteRiskContainer() {
    const [score, setScore] = useState<number>(0);

    return (
        <SimpleGrid cols={({ base: 1, md: 2 })}>
            <VteRiskCalc setScore={setScore}/>
            <ResultsContainer score={score}/>
        </SimpleGrid>
    );
}