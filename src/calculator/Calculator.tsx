import './Calculator.css'

import type {Dispatch, SetStateAction} from "react";
import type {CalculatorField} from "./fields.ts"
import {SegmentedControl, Switch, Table} from "@mantine/core";

interface CalculatorProps {
    setScore: Dispatch<SetStateAction<number>>;
}

const Calculator: React.FC<CalculatorProps> = ({setScore}) => {

    const changeScore = (changeAmount: number) => {
        setScore(prevScore => prevScore + changeAmount);
    }

    return (
        <div className="calculator">
            <Table stickyHeader stickyHeaderOffset={60}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Clinical Finding</Table.Th>
                        <Table.Th>Determination</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {calcFields.map((calcField: CalculatorField) => (
                        <Table.Tr key={calcField.label}>
                            <Table.Td>
                                {calcField.label}
                            </Table.Td>
                            <Table.Td>
                                {calcField.values.length > 1 ? (
                                    <SegmentedControl
                                        defaultValue="none"
                                        autoContrast={true}
                                        color="green"
                                        fullWidth={true}
                                        data={calcField.values.map((calcValue) => {
                                            return {label: calcValue.label, value: calcValue.value.toString()}
                                        })}
                                    />
                                ) : (
                                    <Switch size="lg"
                                            color="green"
                                            onLabel="Yes"
                                            offLabel="No"
                                            onChange={(event) => {
                                                if (event.currentTarget.checked)
                                                    changeScore(calcField.values[0].value)
                                                else
                                                    changeScore(-calcField.values[0].value)
                                            }}
                                    />
                                )}
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
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