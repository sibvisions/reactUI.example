import React from 'react';
import { ScreenWrapper } from "reactUI";


import './CustomGreenButtonScreen.scss';

const CustomGreenButtonScreen = () => {
    return <ScreenWrapper>
        {screen => <div className="green-button-screen">
            {screen}
        </div>}
    </ScreenWrapper>
};

export default CustomGreenButtonScreen;