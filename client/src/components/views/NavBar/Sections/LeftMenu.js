import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
    return (
        <div mode={props.mode}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/favorite">Favorite</Link>
            </li>
        </div>
    )
}

export default LeftMenu