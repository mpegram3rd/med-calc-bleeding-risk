import Advice from "./Advice.tsx";
import type {ScoreProps} from "./score-props.ts";
import Reference from "../reference/Reference.tsx";


const ResultsContainer: React.FC<ScoreProps> = ({score}) => {

    return (
        <div className="results-container">
            <Advice score={score}/>
            <Reference/>
        </div>
    )
}

export default ResultsContainer;