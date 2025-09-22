import {Alert} from "@mantine/core";

export default function Advice() {
    return (
        <div className="advice">
            <Alert
                variant="filled"
                color="green"
                title="Low Risk"
            >
                Intervention will go here.
            </Alert>
        </div>
    );
}