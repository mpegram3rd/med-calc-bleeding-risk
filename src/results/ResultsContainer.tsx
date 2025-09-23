import Advice from "./Advice.tsx";
import type {ScoreProps} from "./score-props.ts";


const ResultsContainer: React.FC<ScoreProps> = ({score}) => {

    return (
        <div className="results-container">
            <Advice score={score}/>
        </div>
    )
}

export default ResultsContainer;