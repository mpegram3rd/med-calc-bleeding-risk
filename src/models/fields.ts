export interface FieldValue {
    label: string;
    value: number;
}

export interface CalculatorField {
    label: string;
    note?: string;
    values: FieldValue[];
    required : boolean;
}

