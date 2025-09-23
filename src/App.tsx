import '@mantine/core/styles.css';

import './App.css'
import BleedingRiskContainer from "./bleeding-calc/calculator/BleedingRiskContainer.tsx";
import {MantineProvider, Tabs} from "@mantine/core";

function App() {
    return (
        <MantineProvider>
            <Tabs defaultValue="vterisk">
                <Tabs.List>
                    <Tabs.Tab value="vterisk">
                        Venous Thromboembolism (VTE)  Risk Calculator
                    </Tabs.Tab>
                    <Tabs.Tab value="bleedingrisk">
                        Bleeding Risk Calculator
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="vterisk">
                    <h3>IMPROVE Risk Score for Venous Thromboembolism (VTE)</h3>
                </Tabs.Panel>

                <Tabs.Panel value="bleedingrisk">
                    <h3>IMPROVE Bleeding Risk Score</h3>
                    <BleedingRiskContainer/>
                </Tabs.Panel>

            </Tabs>
        </MantineProvider>
    )
}

export default App
