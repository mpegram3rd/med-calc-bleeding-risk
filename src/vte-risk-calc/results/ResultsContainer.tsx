import Advice from "./Advice.tsx";
import type {ScoreProps} from "../../score/score-props.ts";
import Reference from "../../reference/Reference.tsx";


const ResultsContainer: React.FC<ScoreProps> = ({score}) => {

    return (
        <div className="results-container">
            <Advice score={score}/>
            <Reference
                url="https://www.mdcalc.com/calc/10349/improve-risk-score-venous-thromboembolism-vte"
                description="The original version of this calculator was created by by Dr. Alex C. Spyropoulos and can be found at MDCalc"
            />
        </div>
    )
}

export default ResultsContainer;