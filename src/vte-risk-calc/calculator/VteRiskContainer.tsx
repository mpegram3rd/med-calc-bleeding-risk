import {useState} from "react";
import {SimpleGrid} from "@mantine/core";
import VteRiskCalc from "./VteRiskCalc.tsx";
import ResultsContainer from "../results/ResultsContainer.tsx";

export default function VteRiskContainer() {
    const [score, setScore] = useState<number>(0);

    return (
        <SimpleGrid cols={({ base: 1, md: 2 })}>
            <VteRiskCalc setScore={setScore}/>
            <ResultsContainer score={score}/>
        </SimpleGrid>
    );
}