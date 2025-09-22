export interface FieldValues {
    label: string;
    value: number;
}

export interface CalculatorField {
    label: string;
    note?: string;
    values: FieldValues[];
    required : boolean ;
}

