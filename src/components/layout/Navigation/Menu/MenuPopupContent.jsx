import { Col, Row } from 'antd'
import React from 'react';

const MenuPopupContent = ({ submenu }) => {

    const SubmenuContent = () => {
        return submenu?.map((menu, key) => {
            return (
                    <Col className={`gutter-row submenu`} span={6} key={key}>
                        <div className='menu-submenu--header'>
                            {menu.header} 
                        </div>
                        <div className='menu-submenu--child'>
                            {/* <div> */}
                                {
                                    SubMenu(menu.submenu)
                                }
                            {/* </div> */}
                        </div>
                    </Col>
                )
            }
        )
    }

    const SubMenu = (subChild) => {
        return (
            subChild.map((submenu, key) => {
                return (
                    <div key={key}>
                        {
                            submenu.sub_info ? (
                                submenu.sub_info
                            ) 
                            :
                            submenu.sub_info_insurance?(
                                submenu.sub_info_insurance
                            )
                            : <a href={submenu.link}>{submenu.sub}</a>
                        }
                        
                        {
                            !Object.keys(submenu).includes("childSubMenu") ? 
                                (<></>) 
                            : 
                            <div>
                                {
                                    ChildSubMenu(submenu.childSubMenu)
                                }
                            </div>
                        }
                    </div>
                )
            })
        )
    }

    const ChildSubMenu = (childSubMenu) => {
        // console.log(childSubMenu);
        return (
            <Col className="gutter-row submenu-child">
                <div className='menu-submenu--header'>{childSubMenu.header}</div>
                <div className='menu-submenu--child'>
                    <div>
                        {
                            SubMenu(childSubMenu.submenu)
                        }
                    </div>
                </div>
            </Col>
        )
    }

    return (
        <Row
            // gutter={{
            //     xs: 8,
            //     sm: 16,
            //     md: 24,
            //     lg: 32,
            // }}
            className='menu-popup-content'
        >
            <SubmenuContent/>
        </Row>
    )
}

export default MenuPopupContent