import {Alert} from "@mantine/core";
import type {ScoreProps} from "../../score/score-props.ts";
import {IconCheckbox, IconUrgent} from "@tabler/icons-react";

const Advice: React.FC<ScoreProps> = ({score}) => {
    const vteRisk = (value: number): string => {
        if (value === 0) return '0.4%';
        if (value === 1) return '0.6%';
        if (value === 2) return '1.0%';
        if (value === 3) return '1.7%';
        if (value === 4) return '2.9%';
        if (value >= 5 && value <= 10) return '7.2%';
        if (value > 10) return '>7.2%';
        return '-';
    };

    const alertIcon = <IconUrgent />;
    const okIcon = <IconCheckbox />

    return (
        <div className="advice">
            <Alert
                variant="filled"
                color={ score < 2 ? "green" : "red" }
                icon={ score < 2 ? okIcon : alertIcon }
            >
                <b>Score: {score}</b><br/>
                <b>3-month risk of VTE: {vteRisk(score)}</b><br/>
                <p><b>Management:</b></p>
                { score < 2 ?
                    "Pharmacologic thromboprophylaxis is not warranted. Instead, early ambulation with or without mechanical prophylaxis may be appropriate." :
                    "Start appropriate pharmacologic (e.g., low molecular weight heparin) or mechanical (e.g., compression stockings, intermittent pneumatic compression) prophylaxis."
                }
            </Alert>
        </div>
    );
}

export default Advice;