import type {Dispatch, SetStateAction} from "react";
import type {CalculatorField} from "../../models/fields.ts";
import CalcTable from "../../calculator-table/CalcTable.tsx";

interface CalculatorProps {
    setScore: Dispatch<SetStateAction<number>>;
}

const VteRiskCalc: React.FC<CalculatorProps> = ({setScore}) => {

    return (
        <CalcTable setScore={setScore} calcFields={calcFields} />
    );
}

const calcFields: CalculatorField[] = [
    {
        label: 'Previous VTE',
        values: [ { label: 'Yes', value: 3 } ],
        required: false
    },
    {
        label: 'Known thrombophilia',
        values: [ { label: 'Yes', value: 2 } ],
        required: false
    },
    {
        label: 'Current lower-limb paralysis',
        values: [ { label: 'Yes', value: 2 } ],
        required: false
    },
    {
        label: 'Current cancer',
        values: [ { label: 'Yes', value: 2 } ],
        required: false
    },
    {
        label: 'Immobilized ≥7 days *',
        note: '* Immediately prior to and during hospital admission.',
        values: [ { label: 'Yes', value: 1 } ],
        required: false
    },
    {
        label: 'ICU/CCU stay',
        values: [ { label: 'Yes', value: 1 } ],
        required: false
    },
    {
        label: 'Age >60 years',
        values: [ { label: 'Yes', value: 1 } ],
        required: false
    },
    {
        label: 'Current cancer',
        values: [ { label: 'Yes', value: 1 } ],
        required: false
    }
];

export default VteRiskCalc;