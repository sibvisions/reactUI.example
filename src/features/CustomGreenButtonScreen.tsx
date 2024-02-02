import React from 'react';
import { ScreenWrapper } from "@sibvisions/reactui/dist";


import './CustomGreenButtonScreen.scss';

const CustomGreenButtonScreen = () => {
    return <ScreenWrapper>
        {screen => <div className="green-button-screen">
            {screen}
        </div>}
    </ScreenWrapper>
};

export default CustomGreenButtonScreen;