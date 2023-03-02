/** React imports */
import React, {FC, useMemo} from "react";

/** scss import */
import "./CustomChartScreen.scss"

/** 3rd Party imports */
import { Chart } from 'primereact/chart';
import { createSetValuesRequest, createSelectRowRequest, getClientId, useAPI, useDataProviderData, useDataProviders } from "@sibvisions/reactui";
import { Button } from "primereact/button";

/**
 * This component is an example for replace-screens. It replaces an existing screen sent by the server with your own custom-screen,
 * while you are still able to use the replaced screens properties and data.
 * A replace-screen receives props: screenName - the name of the screen to receive dataProviders and data
 */
const CustomChartScreen: FC<any> = (props) => {
    /** Gets all dataproviders of a screen */
    const dataProviders = useDataProviders(props.screenName);

    const api = useAPI()

    /** Gets all data of a dataprovider  */
    const [data]: [{
        BRUTTO: string;
        NETTO: number;
    }[]] = useDataProviderData(props.screenName, dataProviders[0]);

    /** Gets a custom statup property */
    const customProp1 = api.getApplicationParameter('privkey');

    /** Building the chart based on dataprovider data */
    const chartData = useMemo(() => {
        const labels = data.map(point => point.BRUTTO);
        const chartData = data.map(point => point.NETTO);
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

    const handleUpdate = () => {
        const req = createSetValuesRequest();
        req.clientId = getClientId();
        req.columnNames = ["YEAR", "BRUTTO", "NETTO"];
        req.dataProvider = dataProviders[0];
        req.componentId = "Cha-OL_C_Chart";
        req.values = [99, 5000.32, 3123.12];
        api.sendRequest(req, "set_values");
    }

    /** Write your own custom JSX for the replace-screen here */
    return(
        <div style={{width: "100%", height:"100%"}}>
            <Chart type="pie" data={chartData} options={options} />
            <Button label="Update data" onClick={handleUpdate} />
            <Button label="Delete data" onClick={() => {
                const deleteReq = createSelectRowRequest();
                deleteReq.dataProvider = dataProviders[0];
                api.sendRequest(deleteReq, "delete_record");
            }} />
        </div>
    )
}
export default CustomChartScreen