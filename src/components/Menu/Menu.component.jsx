import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

const Menu = ({ categories }) => {
    const { categoryId } = useParams();
    return (
        <Nav
            activeKey={ `/${categoryId}` }
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            {
                categories.map((category) => (
                    !category.saved ? null :
                    <Nav.Item key={category.id}>
                        <Nav.Link as={ Link } to={`/${category.id}`}>{ category.name }</Nav.Link>
                    </Nav.Item>
                ))
            }
            <Nav.Item>
                <Nav.Link as={ Link }  to="manage-categories">Manage Categories</Nav.Link>
            </Nav.Item>
        </Nav>
    )
};

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer
    }
}

export default connect(mapStateToProps)(Menu);