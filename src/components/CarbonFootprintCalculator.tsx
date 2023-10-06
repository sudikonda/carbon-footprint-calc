import {useState} from 'react';
import {Button, TextField} from '@mui/material';

export const CarbonFootprintCalculator = () => {
    const [distance, setDistance] = useState<number>();
    const [mpg, setMpg] = useState<number>();
    const [carbonFootprint, setCarbonFootprint] = useState(0);

    const calculateCarbonFootprint = () => {
        const carbonPerMile = 19.6; // Example value, adjust based on your calculations
        const totalCarbon = (distance / mpg) * carbonPerMile;
        setCarbonFootprint(totalCarbon);
    };

    return (
        <div>

            <div>
                <TextField id="distance-miles" label="Distance (miles)" variant="outlined"
                           type="number"
                           value={distance}
                           onChange={(e) => setDistance(parseInt(e.target.value))}
                />
            </div>
            <div>
                <TextField id="distance-miles" label="Vehicle MPG" variant="outlined"
                           type="number"
                           value={mpg}
                           onChange={(e) => setMpg(parseInt(e.target.value))}
                />
            </div>
            <Button variant="contained" onClick={calculateCarbonFootprint}>Calculate</Button>
            <div>
                <h3>Carbon Footprint: {carbonFootprint} lbs CO2</h3>
            </div>
        </div>
    );
};