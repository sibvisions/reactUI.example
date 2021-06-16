import React from 'react';
import { CustomOverlayWrapper } from "reactui/dist/moduleIndex";


import './CustomGreenButtonScreen.scss';

const CustomGreenButtonScreen = () => {
    return <CustomOverlayWrapper>
        {screen => <div className="green-button-screen">
            {screen}
        </div>}
    </CustomOverlayWrapper>
};

export default CustomGreenButtonScreen;