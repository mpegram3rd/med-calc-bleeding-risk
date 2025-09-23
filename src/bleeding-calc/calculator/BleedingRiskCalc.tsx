import './BleedingRiskCalc.css'

import type {Dispatch, SetStateAction} from "react";
import type {CalculatorField} from "../../models/fields.ts"
import CalcTable from "../../calculator-table/CalcTable.tsx";

interface CalculatorProps {
    setScore: Dispatch<SetStateAction<number>>;
}

const BleedingRiskCalc: React.FC<CalculatorProps> = ({setScore}) => {

    return (
        <CalcTable setScore={setScore} calcFields={calcFields} />
    );
}

const calcFields: CalculatorField[] = [
    {
        label: "Age in Years",
        values: [
            { label: '<40', value: 0 },
            { label: '40-48', value: 1.5 },
            { label: '≥85', value: 3.5 }
        ],
        required: true
    },
    {
        label: "Gender",
        values: [
            { label: 'Female', value: 0 },
            { label: 'Male', value: 1 }
        ],
        required: true
    },
    {
        label: 'Renal Function (GFR), mL/min/m^2',
        values: [
            { label: '≥85', value: 0 },
            { label: '30-59', value: 1 },
            {label: '<30', value: 2.5}
        ],
        required: false
    },
    {
        label: 'Current cancer',
        note: 'Evidence of active malignancy within the last 6 months',
        values: [ { label: 'Yes', value: 2 } ],
        required: false
    },
    {
        label: 'Rheumatic disease',
        values: [ { label: 'Yes', value: 2 } ],
        required: false
    },
    {
        label: 'Central venous catheter',
        values: [ { label: 'Yes', value: 2 } ],
        required: false
    },
    {
        label: 'ICU/CCU',
        values: [ { label: 'Yes', value: 2.5 } ],
        required: false
    },
    {
        label: 'Evidence of hepatic failure (INR >1.5)',
        values: [ { label: 'Yes', value: 2.5 } ],
        required: false
    },
    {
        label: 'Platelet count, (cells/L <50 x 10^9)',
        values: [{label: '<50 x 10^9', value: 4}],
        required: false
    },
    {
        label: 'Bleeding in 3 months before admission',
        values: [ { label: 'Yes', value: 4 } ],
        required: false
    },
    {
        label: 'Active gastroduodenal ulcer',
        values: [ { label: 'Yes', value: 4.5 } ],
        required: false
    }
]


export default BleedingRiskCalc;