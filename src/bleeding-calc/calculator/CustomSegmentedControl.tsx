import {SegmentedControl} from "@mantine/core";
import type {FieldValue} from "./fields.ts";
import {type Dispatch, type SetStateAction, useState} from "react";

interface CustomSegmentedControlProps {
    options: FieldValue[];
    setScore: Dispatch<SetStateAction<number>>;
}

const CustomSegmentedControl: React.FC<CustomSegmentedControlProps> = ({options, setScore}) => {
    const [previousValue, setPreviousValue] = useState<number>(-1.0);

    return (
        <SegmentedControl
            defaultValue={previousValue.toString()}
            autoContrast={true}
            color="green"
            fullWidth={true}
            data={options.map((calcValue) => {
                return {label: calcValue.label, value: calcValue.value.toString()}
            })}
            onChange={(value) => {
                const newValue = parseFloat(value);
                const updateValue = previousValue >= 0 ? newValue - previousValue : newValue;
                setScore(prevScore => prevScore + updateValue);
                setPreviousValue(newValue);
            }}

        />
    );
}

export default CustomSegmentedControl;