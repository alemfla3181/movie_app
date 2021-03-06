import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './Sections/Navbar.css';

function NavBar() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    return (
        <nav className="menu">
            <div className="menu__logo">
                <Link to="/">MOVIE</Link>
            </div>
            <div className="menu__container">
                <div className="leftMenu">
                    <LeftMenu />
                </div>
                <div className="rightMenu" >
                    <RightMenu />
                </div>
                <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                    <Icon type="align-right" />
                </Button>
                <Drawer
                    title="Menu"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <LeftMenu />
                    <RightMenu />
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar