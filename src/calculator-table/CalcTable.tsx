import type {Dispatch, SetStateAction} from "react";
import {Button, Switch, Table} from "@mantine/core";
import type {CalculatorField} from "../models/fields.ts";
import CustomSegmentedControl from "../bleeding-calc/calculator/CustomSegmentedControl.tsx";
import {useForm} from "@mantine/form";

interface CalculatorProps {
    setScore: Dispatch<SetStateAction<number>>;
    calcFields: CalculatorField[];
}

const CalcTable: React.FC<CalculatorProps> = ({setScore, calcFields}) => {
    const changeScore = (changeAmount: number) => {
        setScore(prevScore => prevScore + changeAmount);
    }

    const form = useForm({
        mode: 'uncontrolled'
    });

    return (
        <div className="calculator">
            <form>
                <Table striped>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Evidence</Table.Th>
                            <Table.Th>Data</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {calcFields.map((calcField: CalculatorField) => (
                            <Table.Tr key={calcField.label}>
                                <Table.Td>
                                    {calcField.label}{calcField.required ? '*' : ''}
                                    {calcField.note && (
                                        <div style={{fontSize: '0.8em', color: '#666'}}>{calcField.note}</div>
                                    )}
                                </Table.Td>
                                <Table.Td>
                                    {calcField.values.length > 1 ? (
                                        <CustomSegmentedControl
                                            options={calcField.values}
                                            setScore={setScore}
                                            key={form.key(calcField.label)}
                                        />
                                    ) : (
                                        <Switch size="lg"
                                                color="green"
                                                onLabel="Yes"
                                                offLabel="No"
                                                key={form.key(calcField.label)}
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
                <Button onClick={() => {
                    form.reset();
                    setScore(0);
                }}>Clear Values</Button>
            </form>
        </div>
    );
}

export default CalcTable;
