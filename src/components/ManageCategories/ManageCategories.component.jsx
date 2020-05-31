import React from "react";
import { Button, Navbar, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import CategoryComponent from './Category/Category.component';
import { addNewCategory } from '../../store/actions.js';

const ManageCategories = ({ categories = [], addNewCategory }) => {
    const categoryDom = categories.map((category, i) => <CategoryComponent editMode={true} key={ category.id } category={category} />);
    return <Row>
        { categoryDom }
        <Navbar fixed="bottom" className="border-top footer-nav">
            <Button className="ml-auto" variant="success" onClick={ () => {
                addNewCategory({});
            } }>Add New Category</Button>
        </Navbar>
    </Row>
}

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewCategory: () => { dispatch(addNewCategory()) }
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategories)