import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewCategory } from '../../store/actions.js'

const ManageCategories = ({ categories = {}, addNewCategory, }) => {
    const [showButton, setShowButton] = useState(!categories['']);
    console.log(showButton, categories)
    const categoryDom = Object.keys(categories).map((id, i) => <div key={id}>{id}</div>);
    return <>
        { categoryDom }
        {
            showButton
                ? <Button onClick={ () => {
                    addNewCategory({});
                    setShowButton(false);
                } }>Add New</Button>
                : null 
        }
    </>
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewCategory: () => { dispatch(addNewCategory()) }
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategories)