import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import MenuComponent from '../Menu/Menu.component';

function HeaderComponent () {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand  as={ Link } to="/">
                Inventory Wiz
            </Navbar.Brand >
            <MenuComponent />
        </Navbar>
    )
}

export default HeaderComponent;