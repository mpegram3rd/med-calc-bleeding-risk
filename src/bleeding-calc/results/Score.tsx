import type {ScoreProps} from "./score-props.ts";

const Score: React.FC<ScoreProps> = ({score}) => {

    return (
        <>Score: {score}</>
    )
}

export default Score;
