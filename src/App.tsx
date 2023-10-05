import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CarbonFootprintCalculator} from './components/CarbonFootprintCalculator.tsx';

function App() {

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Carbon Footprint Calculator</h1>
            <div className="card">
                <CarbonFootprintCalculator/>
            </div>
        </>
    )
}

export default App
