import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = ({ categories = [] }) => (
    <Nav
        activeKey={ '/' + (categories[0] || {}).id || '' }
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        {
            categories.map((category) => (
                <Nav.Item>
                    <Nav.Link as="Link" to={`/${category.id}`}>{ category.name }</Nav.Link>
                </Nav.Item>
            ))
        }
        <Nav.Item>
            <Link to="manage-categories">Manage Categories</Link>
        </Nav.Item>
    </Nav>
);

export default Menu;