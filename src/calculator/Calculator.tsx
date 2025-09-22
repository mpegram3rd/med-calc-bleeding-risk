import './Calculator.css'

import type {Dispatch, SetStateAction} from "react";
import type {CalculatorField} from "./fields.ts"
import {Switch, ToggleButton, ToggleButtonGroup} from "@mui/material";

interface CalculatorProps {
    setScore: Dispatch<SetStateAction<number>>;
}

const Calculator: React.FC<CalculatorProps> = ({setScore}) => {

    const changeScore = (changeAmount: number) => {
        setScore(prevScore => prevScore + changeAmount);
    }

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean, value: number) => {
        console.log('Switch changed:', event.target.name, checked);
        if (checked) {
            changeScore(value);
        } else {
            changeScore(-value);
        }
    }
    return (
        <div className="calculator">
            <table border={1}>
                <thead>
                <tr className="calc-row">
                    <th>Clinical Finding</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {calcFields.map((calcField: CalculatorField) => (
                    <tr key={calcField.label} className="calc-row">
                        <td className="field-label">
                            {calcField.label}
                        </td>
                        <td className="field-value">
                            {calcField.values.length > 1 ? (
                                <ToggleButtonGroup
                                    color="primary"
                                    exclusive
                                    required={true}
                                    /*                                            onChange={handleChange} */
                                    aria-label={calcField.label}
                                >
                                    {calcField.values.map((option: FieldValues) => (
                                            <ToggleButton value={option.value} sx={{
                                                color: 'white',
                                                backgroundColor: '#444',
                                                borderColor: '#777'
                                            }}>
                                                {option.label}
                                            </ToggleButton>
                                        )
                                    )}
                                </ToggleButtonGroup>
                            ) : (
                                <span>
                                            <Switch
                                                onChange={(event, checked) => handleSwitchChange(event, checked, calcField.values[0].value)}
                                            />
                                            <span>{calcField.values[0].value}</span>
                                        </span>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
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


export default Calculator;