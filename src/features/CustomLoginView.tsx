import { ICustomLogin } from "@sibvisions/reactui";
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
const CustomLoginView: FC<ICustomLogin> = (props) => {
    /** The value of the username field */
    const [username, setUsername] = useState<string>(props.username);

    /** The value of the password field */
    const [password, setPassword] = useState<string>(props.password);
    
    /** The value of the remember me checkbox */
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    /** The value of the email field in the reset mask */
    const [email, setEmail] = useState<string>("");

    /** Model of departments for the dropdown */
    const departments = [
        { name: "IT", code: "IT"},
        { name: "Human Resources", code: "HR" },
        { name: "Logistics", code: "LO" },
        { name: "Marketing", code: "MA" },
        { name: "", code: "" }
    ]

    /** The currently selected department */
    const [selectedDepartment, setSelectedDepartment] = useState<{ name: string, code: string }|undefined>(undefined);

    /**
     * The submit event of the login form
     * @param e - the form event
     */
    const loginSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.sendLoginRequest(username, password, rememberMe, { department: selectedDepartment });
    }

    /**
     * The submit event of the reset form
     * @param e - the form event
     */
    const resetSubmit= (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.sendResetRequest(email, { department: selectedDepartment });
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

    /** Returns the correct mask based on the login-mode */
    const getLoginMask = () => {
        if (props.loginMode === "reset") {
            return (
                <div className="custom-reset-wrapper">
                    <div className="custom-reset-header">
                        <i className="pi pi-lock custom-reset-lock" />
                        <span className="custom-reset-header-text">Reset your Password!</span>
                    </div>
                    <form onSubmit={resetSubmit} className="custom-reset-form">
                        <div className="p-fluid">
                            <div className="p-field p-input-icon-left">
                                <i className="pi pi-user" />
                                <InputText
                                    value={email}
                                    id="email"
                                    type="text"
                                    autoComplete="email"
                                    placeholder="Email"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                            </div>
                            <div className="p-field p-input-icon-left">
                                <i className="department-icon pi pi-briefcase" />
                                <Dropdown value={selectedDepartment} options={departments} onChange={(e) => handleDepartments(e)} optionLabel="name" placeholder="Department" />
                            </div>
                            <div className="reset-password-button-wrapper">
                                <Button className="custom-login-button" label="Cancel" icon="pi pi-times" onClick={() => props.setToDefaultLoginMode()} />
                                <Button className="custom-login-button" type="submit" label="Send" icon="pi pi-send" />
                            </div>
                        </div>
                    </form>                    
                </div>
            )
        }
        else {
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
                                <Button className="p-button-link" label="Reset Password" onClick={() => props.setToResetLoginMode()} />
                            </div>
                        </div>
                    </form>
                    <div className="login-image">
                        <img src={vienna} alt="vienna" />
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {getLoginMask()}
        </>

    )
}
export default CustomLoginView