import { ADD_NEW_CATEGORY, UPDATE_CATEGORY, ADD_NEW_FIELD } from '../actionTypes';
import { generateID } from '../../utils';

const categoryReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_NEW_CATEGORY:
        const id = generateID();
        state.push({
          id, name: '', fields: [{ 
            name: '',
            id: generateID(),
            typeIndex: 0
          }], saved: false
        });
        break;
      case UPDATE_CATEGORY: {
        const categoryIndex = state.findIndex(({ id }) => id === action.id);
        state[categoryIndex] = action.category;
        action.category.saved = true;
        break;
      }
      case ADD_NEW_FIELD: {
        const categoryIndex = state.findIndex(({ id }) => id === action.id);
        state[categoryIndex] = action.category;
        break;
      }
      default:
        break;
    }
    return [...state];
}

export default categoryReducer