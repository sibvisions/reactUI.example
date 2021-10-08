/** React imports */
import React, {FC, useMemo} from "react";

/** scss import */
import "./CustomChartScreen.scss"

/** 3rd Party imports */
import { Chart } from 'primereact/chart';
import { useDataProviderData, useDataProviders, useGetCustomProperty } from "reactUI";

/**
 * This component is an example for replace-screens. It replaces an existing screen sent by the server with your own custom-screen,
 * while you are still able to use the replaced screens properties and data.
 * A replace-screen receives props: screenName - the name of the screen to receive dataProviders and data
 */
const CustomChartScreen: FC<any> = (props) => {
    console.log(props)
    /** Gets all dataproviders of a screen */
    const dataProviders = useDataProviders(props.screenName);
    /** Gets all data of a dataprovider  */
    const [data]: [{
        COUNTRY: string;
        LITRES: number;
    }[]] = useDataProviderData(props.screenName, dataProviders[0]);
    /** Gets a custom statup property */
    const customProp1 = useGetCustomProperty('privkey');

    /** Building the chart based on dataprovider data */
    const chartData = useMemo(() => {
        const labels = data.map(point => point.COUNTRY);
        const chartData = data.map(point => point.LITRES);
        const chartColors = ['#142459', '#1AC9E6', '#6DFDD2', '#7D3AC1', '#DB4CB2', 
                             '#C02323', '#EF7E32', '#FFD246', '#78D237']
        const primeChart = {
            labels: labels,
            datasets: [
                {
                    data: chartData,
                    backgroundColor: data.map((val, index) => chartColors[index])
                }
            ]
        }
        return primeChart;
    }, [data]);

    /** Chart options */
    const options = {
        legend: {
            position: 'bottom'
        }
    };

    /** Write your own custom JSX for the replace-screen here */
    return(
        <div style={{width: "100%", height:"100%"}}>
            <Chart type="pie" data={chartData} options={options} />
        </div>
    )
}
export default CustomChartScreen