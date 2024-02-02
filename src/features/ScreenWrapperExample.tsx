import { createSetValuesRequest, REQUEST_KEYWORDS, ScreenWrapper, useAPI, useDataProviders, useRowSelect } from "@sibvisions/reactui/dist";
import React, { FC, useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext'
import { Button } from "primereact/button";
import { Rating } from 'primereact/rating';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';

const CustomTextField:FC<any> = (props) => {
    const api = useAPI();

    const [selectedRow] = useRowSelect(props.screenName, props.dataProvider);

    const [text, setText] = useState<string>(selectedRow ? selectedRow.data[props.columnName] : "");

    useEffect(() => {
        setText(selectedRow ? selectedRow.data[props.columnName] : "")
    }, [selectedRow])

    return (
        <InputText 
            value={text} 
            onChange={(event) => setText(event.currentTarget.value)}
            onBlur={() => {
                const setValuesReq = createSetValuesRequest();
                setValuesReq.columnNames = [props.columnName];
                setValuesReq.dataProvider = props.dataProvider;
                setValuesReq.values = [text];
                api.sendRequest(setValuesReq, REQUEST_KEYWORDS.SET_VALUES);
            }}
            style={{ background: "#7ab8f5" }} />
    )
}

const CustomButton:FC<any> = (props) => {
    return (
        <Button 
            label={props.buttonLabel} 
            onClick={props.onClick} 
            style={{ background: "red", borderColor: "red", color: "#00ff00" }} />
    )
}

const ScreenWrapperExample:FC<any> = (props) => {
    const api = useAPI();

    const dataProviders = useDataProviders(props.screenName);

    const [selectedRow] = useRowSelect(props.screenName, dataProviders[4]);

    const [rating, setRating] = useState<number|undefined>(selectedRow ? selectedRow.data["RATING"] : undefined);

    const [iban, setIban] = useState<string>(selectedRow ? selectedRow.data["IBAN"] : undefined);

    const [salary, setSalary] = useState<number|null>(selectedRow ? selectedRow.data["SALARY"] : undefined);

    const onOpen = () => {
        api.addCustomComponent("SimCon-QQ_B_DOINSERTEMPTY", <CustomTextField screenName={props.screenName} dataProvider={dataProviders[4]} columnName={"FIRSTNAME"} />);
        api.addCustomComponent("SimCon-QQ_B_DOINSERTRANDOM", <CustomTextField screenName={props.screenName} dataProvider={dataProviders[4]} columnName={"LASTNAME"} />);
        api.addCustomComponent("SimCon-QQ_B_DELETE", <CustomButton buttonLabel="Custom Insert" onClick={ () => api.insertRecord(props.screenName, dataProviders[4]) } />);
        api.addCustomComponent("SimCon-QQ_B_RESTORESELECTEDROW", <CustomButton buttonLabel="Custom Delete" onClick={ () => api.deleteRecord(props.screenName, dataProviders[4]) } />);
    }

    useEffect(() => {
        setRating(selectedRow ? selectedRow.data["RATING"] : undefined);
        setIban(selectedRow ? selectedRow.data["IBAN"] : undefined)
        setSalary(selectedRow ? selectedRow.data["SALARY"] : undefined)
    }, [selectedRow])

    return (
        <ScreenWrapper onOpen={onOpen}>
            {screen => 
                <>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Rating 
                            value={rating}
                            onChange={(e) => {
                                setRating(e.value as number);
                                const setValuesReq = createSetValuesRequest();
                                setValuesReq.columnNames = ["RATING"];
                                setValuesReq.dataProvider = dataProviders[4];
                                setValuesReq.values = [e.value];
                                api.sendRequest(setValuesReq, REQUEST_KEYWORDS.SET_VALUES);
                            }}
                            cancel={false} 
                            style={{ marginRight: "0.5rem" }} />
                        <InputMask 
                            value={iban}
                            onChange={(e) => setIban(e.value !== undefined && e.value !== null ? e.value : "")}
                            onBlur={() => {
                                const setValuesReq = createSetValuesRequest();
                                setValuesReq.columnNames = ["IBAN"];
                                setValuesReq.dataProvider = dataProviders[4];
                                setValuesReq.values = [iban];
                                api.sendRequest(setValuesReq, REQUEST_KEYWORDS.SET_VALUES);
                            }}
                            mask="aa99-9999-9999-9999-9999" 
                            placeholder="AT12-3456-7890-1234-5678" 
                            style={{ marginRight: "0.5rem" }} />
                        <InputNumber
                            value={salary}
                            onChange={(e) => setSalary(e.value)}
                            onBlur={() => {
                                const setValuesReq = createSetValuesRequest();
                                setValuesReq.columnNames = ["SALARY"];
                                setValuesReq.dataProvider = dataProviders[4];
                                setValuesReq.values = [salary];
                                api.sendRequest(setValuesReq, REQUEST_KEYWORDS.SET_VALUES);
                            }}
                            showButtons 
                            buttonLayout="horizontal" 
                            step={50}
                            decrementButtonClassName="p-button-danger" 
                            incrementButtonClassName="p-button-success" />
                    </div>
                    {screen}
                </>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperExample