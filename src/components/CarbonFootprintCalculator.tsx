import {useState} from 'react';

export const CarbonFootprintCalculator = () => {
    const [distance, setDistance] = useState<number>(0);
    const [mpg, setMpg] = useState<number>(0);
    const [carbonFootprint, setCarbonFootprint] = useState(0);

    const calculateCarbonFootprint = () => {
        const carbonPerMile = 19.6; // Example value, adjust based on your calculations
        const totalCarbon = (distance / mpg) * carbonPerMile;
        setCarbonFootprint(totalCarbon);
    };

    return (
        <div>

            <div>
                <label>Distance (miles):</label>
                <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
            </div>
            <div>
                <label>Vehicle MPG:</label>
                <input
                    type="number"
                    value={mpg}
                    onChange={(e) => setMpg(e.target.value)}
                />
            </div>
            <button onClick={calculateCarbonFootprint}>Calculate</button>
            <div>
                <h3>Carbon Footprint: {carbonFootprint} lbs CO2</h3>
            </div>
        </div>
    );
};