import { combineReducers } from 'redux'
import typesReducer from './types.reducer'
import inventoryReducer from './inventory.reducer'

export default combineReducers({
    typesReducer,
    inventoryReducer
});