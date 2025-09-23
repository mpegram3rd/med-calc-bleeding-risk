import {Alert} from "@mantine/core";
import type {ScoreProps} from "../../score/score-props.ts";

const Advice: React.FC<ScoreProps> = ({score}) => {
    return (
        <div className="advice">
            <Alert
                variant="filled"
                color={ score < 7 ? "green" : "red" }
                title={(score < 7 ? "No increased risk of bleeding" : "Increased risk of bleeding") + " Score: " + score}
            >
                <span>
                    <b>Management:</b><br/>
                    { score < 7 ?
                        "Proceed with anticoagulation therapy, if indicated, and routine monitoring." :
                        (
                            <ul>
                                <li>Avoid anticoagulants where possible.</li>
                                <li>Consider non-pharmacologic interventions.</li>
                                <li>If anticoagulation therapy remains necessary, address any modifiable bleeding risk factors and closely monitor for bleeding events.</li>
                            </ul>
                        )
                    }
                </span>
            </Alert>
        </div>
    );
}

export default Advice;