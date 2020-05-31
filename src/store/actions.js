import { ADD_NEW_CATEGORY, UPDATE_CATEGORY, ADD_NEW_FIELD } from './actionTypes';
import { ADD_ITEM, UPDATE_ITEM } from './actionTypes';

export const addNewCategory = () => ({
    type: ADD_NEW_CATEGORY
})

export const updateCategory = (id, category) => ({
    type: UPDATE_CATEGORY, id, category
})

export const addNewField = (id, category) => ({
    type: ADD_NEW_FIELD, id, category
})

export const addItem = () => ({
    type: ADD_ITEM
})

export const updateItem = () => ({
    type: UPDATE_ITEM
})