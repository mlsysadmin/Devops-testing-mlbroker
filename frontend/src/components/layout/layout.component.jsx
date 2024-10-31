import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import HeaderContainer from './Navigation/HeaderContainer';
import SideBar from './Navigation/SideBar';

import '../../styles/sidebar.css'

const MainLayout = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [screenSize, setScreenSize] = useState(window.screen.width);

    const showDrawer = () => {
        setOpenDrawer(true)
    }

    const onClose = () => {
        setOpenDrawer(false);
    };

    const handleShowNav = () => {
        const screen_width = window.screen.width;

        setScreenSize(screen_width);
    }

    useEffect(() => {
        window.addEventListener("resize", handleShowNav);

        // return () => window.addEventListener("resize", handleShowNav);
    }, [handleShowNav])

    return (
        <>
            <HeaderContainer showDrawer={showDrawer} screenSize={screenSize}/>
            <Layout className='side'>
                <SideBar openDrawer={openDrawer} onClose={onClose} setOpenDrawer={setOpenDrawer}/>
            </Layout>
        </>
    )
}

export default MainLayout