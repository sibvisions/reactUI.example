import { ICustomDefaultLogin } from "@sibvisions/reactui";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeParams } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import React, { FC, FormEvent, useState } from "react";
import vienna from '../assets/vienna.jpg'
import './CustomLoginView.scss';

/**
 * A custom login mask which replaces the default one
 * @param props - the properties received by the reactui
 */
const CustomLoginView: FC<ICustomDefaultLogin> = (props) => {
    /** The value of the username field */
    const [username, setUsername] = useState<string>(props.username);

    /** The value of the password field */
    const [password, setPassword] = useState<string>(props.password);

    /** The value of the remember me checkbox */
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    /** Model of departments for the dropdown */
    const departments = [
        { name: "IT", code: "IT" },
        { name: "Human Resources", code: "HR" },
        { name: "Logistics", code: "LO" },
        { name: "Marketing", code: "MA" },
        { name: "", code: "" }
    ]

    /** The currently selected department */
    const [selectedDepartment, setSelectedDepartment] = useState<{ name: string, code: string } | undefined>(undefined);

    /**
     * The submit event of the login form
     * @param e - the form event
     */
    const loginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.sendLoginRequest(username, password, rememberMe, { department: selectedDepartment });
    }

    /** Handles the department-selection */
    const handleDepartments = (e: DropdownChangeParams) => {
        if (!e.value.name) {
            setSelectedDepartment(undefined)
        }
        else {
            setSelectedDepartment(e.value)
        }
    }

    return (
        <div className="custom-login-wrapper">
            <form onSubmit={loginSubmit} className="custom-login-form">
                <div className="p-fluid">
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-user" />
                        <InputText
                            value={username}
                            id="username"
                            type="text"
                            autoComplete="username"
                            placeholder="Username"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} />
                    </div>
                    <div className="p-field p-input-icon-left">
                        <i className="pi pi-key" />
                        <InputText
                            value={password}
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                    </div>
                    <div className="p-field p-input-icon-left">
                        <i className="department-icon pi pi-briefcase" />
                        <Dropdown value={selectedDepartment} options={departments} onChange={(e) => handleDepartments(e)} optionLabel="name" placeholder="Department" />
                    </div>
                    <div className="login-button-row">
                        <div className="login-checkbox-wrapper" style={{}}>
                            <Checkbox inputId="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.checked)} />
                            <label htmlFor="rememberMe" className="p-checkbox-label">Remember me</label>
                        </div>
                        <Button
                            type="submit"
                            className="custom-login-button"
                            style={undefined}
                            label="Login"
                            icon="pi pi-lock-open" />
                    </div>
                    <div className="login-reset-row" >
                        <Button className="p-button-link" label="Reset Password" onClick={() => props.setLoginMode("reset")} />
                    </div>
                </div>
            </form>
            <div className="login-image">
                <img src={vienna} alt="vienna" />
            </div>
        </div>
    )
}
export default CustomLoginView