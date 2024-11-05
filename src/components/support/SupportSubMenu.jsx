
import React, { useState } from 'react';

import SecondNavigationComponent from '../layout/support/SecondNavigationComponent';


const SupportSubMenu = ({ title, listingId, isShowDetails }) => {

    return (
        <>
            <SecondNavigationComponent
                title={title}
                text="These is Dashboard!"
                listingId={listingId}
                isShowDetails={isShowDetails}
            />
        </>
    )
}

export default SupportSubMenu;