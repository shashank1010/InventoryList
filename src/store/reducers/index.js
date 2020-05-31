import { combineReducers } from 'redux'
import categoryReducer from './category.reducer'
import inventoryReducer from './inventory.reducer'

export default combineReducers({
    categoryReducer,
    inventoryReducer
});