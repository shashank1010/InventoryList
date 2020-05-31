import React from 'react';
import { Navbar } from 'react-bootstrap';
import MenuComponent from '../Menu/Menu.component';

function HeaderComponent () {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                Inventory Wiz
            </Navbar.Brand>
            <MenuComponent />
        </Navbar>
    )
}

export default HeaderComponent;