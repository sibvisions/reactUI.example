/** React imports */
import React, { FC, useState } from "react"

/** scss import */
import "./CustomProjectScreen.scss"

/** 3rd Party imports */
import { ListBox } from 'primereact/listbox';
import { Galleria } from 'primereact/galleria';

/** Other imports */
import mer1 from "../assets/mer1.jpg";
import mer2 from "../assets/mer2.jpg";
import mer3 from "../assets/mer3.jpg";
import mer4 from "../assets/mer4.jpg";
import mer1th from "../assets/mer1th.jpg";
import mer2th from "../assets/mer2th.jpg";
import mer3th from "../assets/mer3th.jpg";
import mer4th from "../assets/mer4th.jpg";

const CustomProjectScreen:FC<{}> = () => {

    const [selectedProject, setSelectedProject] = useState<string>("Mercury");

    const groupedProjects = [
        {
            label: "Peter's projects", code: 'DE',
            items: [
                { label: 'Mercury', value: 'Mercury' },
                { label: 'Stratos', value: 'Stratos' },
                { label: 'Venus', value: 'Venus' },
                { label: 'Mars', value: 'Mars' }
            ]
        },
        {
            label: "Jeff's projects", code: 'US',
            items: [
                { label: 'Bigfoot', value: 'Bigfoot' },
                { label: 'Aliens', value: 'Aliens' },
                { label: 'Loch Ness', value: 'Loch Ness' },
                { label: 'Dragons', value: 'Dragons' }
            ]
        },
        {
            label: "Samantha's projects", code: 'JP',
            items: [
                { label: 'Kyoto Bridge', value: 'Kyoto Bridge' },
                { label: 'Osaka Highway', value: 'Osaka Highway' },
                { label: 'Tokyo Subway', value: 'Tokyo Subway' },
                { label: 'Yokohama Railway', value: 'Yokohama Railway' }
            ]
        }
    ];

    const images:Array<any> = [
        {id: '1', image: mer1, alt: 'display mer1', thumbnail: mer1th}, 
        {id: '2', image: mer2, alt: 'display mer2', thumbnail: mer2th}, 
        {id: '3', image: mer3, alt: 'display mer3', thumbnail: mer3th}, 
        {id: '4', image: mer4, alt: 'display mer4', thumbnail: mer4th}, 
    ];

    const itemTemplate = (item:any) => {
        return <img src={item.image} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item:any) => {
        return <img src={item.thumbnail} alt={item.alt} />
    }

    return (
        <div className="projects-screen-wrap">
            <ListBox 
                value={selectedProject} 
                options={groupedProjects} 
                onChange={(e) => setSelectedProject(e.value)} 
                optionLabel="label" 
                optionGroupLabel="label" 
                optionGroupChildren="items" />
            <Galleria value={images} numVisible={4} item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: "1200px", margin: "auto" }} /> 
            img source NASA
        </div>
        
    )
}
export default CustomProjectScreen