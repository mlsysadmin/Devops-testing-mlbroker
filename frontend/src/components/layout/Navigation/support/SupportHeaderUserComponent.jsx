import React, { useEffect, useState } from 'react';

import TextBtn from '../../../custom/buttons/TextBtn.custom';
import { Button, Dropdown, Menu, Space } from 'antd';
import { CaretDownFilled, DownCircleFilled, DownOutlined } from '@ant-design/icons';
import { useAuth } from '../../../../Context/AuthContext';
import { Logout } from '../../../../api/Public/User.api';
import { useNavigate } from 'react-router-dom';

const SupportHeaderUserComponent = () => {
    const { userDetails, logout } = useAuth();
    const [userName, setUserName] = useState(null);

    const Navigate = useNavigate();

    useEffect(() => {
        if (userDetails) {
            const user = userDetails;
            const user_name = `${user.last_name}, ${user.first_name} ${user.middle_name}`;

            setUserName(user_name);
        }
    }, [])

    const handleLogoutClick = async (e) => {
        try {
            
            await Logout();

            logout();

            Navigate('/support/signin', {
                replace: true
            })

        } catch (error) {
            logout();
            Navigate('/support/signin', {
                replace: true
            })
        }

    };

    const MenuItems = [
        {
            label: "Logout",
            key: "logout",
        },
    ]

    const MenuProps = {
        items: MenuItems,
        onClick: handleLogoutClick,
    }

    return (
        <>
            <Dropdown
                menu={MenuProps}
                trigger={['click']}
                className='header-user--profile'
            >
                <Space>
                    {userName}
                    <CaretDownFilled />
                </Space>
            </Dropdown>
        </>
    )
}

export default SupportHeaderUserComponent;