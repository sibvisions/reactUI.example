import { ICustomResetLogin } from "@sibvisions/reactui";
import { Button } from "primereact/button";
import { Dropdown, DropdownChangeParams } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import React, { FC, FormEvent, useState } from "react"

/**
 * A custom login mask which replaces the reset one
 * @param props - the properties received by the reactui
 */
const CustomResetView: FC<ICustomResetLogin> = (props) => {
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

    /** Handles the department-selection */
    const handleDepartments = (e: DropdownChangeParams) => {
        if (!e.value.name) {
            setSelectedDepartment(undefined)
        }
        else {
            setSelectedDepartment(e.value)
        }
    }

    /**
     * The submit event of the reset form
     * @param e - the form event
     */
     const resetSubmit= (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.sendResetRequest(email, { department: selectedDepartment });
    }

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
                        <Button className="custom-login-button" label="Cancel" icon="pi pi-times" onClick={() => props.setLoginMode("default")} />
                        <Button className="custom-login-button" type="submit" label="Send" icon="pi pi-send" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CustomResetView