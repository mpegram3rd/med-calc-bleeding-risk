import '@mantine/core/styles.css';

import Title from './Title'
import './App.css'
import CalculatorContainer from "./calculator/CalculatorContainer.tsx";
import {MantineProvider} from "@mantine/core";

function App() {
    return (
        <MantineProvider>
            <Title/>
            <CalculatorContainer/>
        </MantineProvider>
    )
}

export default App
