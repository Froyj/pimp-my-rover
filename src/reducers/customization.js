import {
  CHANGE_SELECTED_COLOR,
  CHANGE_SELECTED_TEXTURE,
  CHANGE_SELECTED_BACKGROUND,
} from '../actions/customizationActions';

const customizationReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_COLOR:
      return {
        ...state,
        selectedColor: action.payload,
      };
    case CHANGE_SELECTED_TEXTURE:
      return {
        ...state,
         selectedTexture: action.payload,
      };
    case CHANGE_SELECTED_BACKGROUND:
      return {
        ...state,
        selectedBackground: action.payload,
      };
    default:
      return state;
  }
};

export default customizationReducer;

