
import ActionTypes from '../../actions/ActionTypes';

const defaultState = {
  isOpen: false,
  code: undefined,
};

export default function codeViewerReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.OPEN_CODE_VIEWER: {
      return Object.assign({}, state, {
        isOpen: true,
        code: action.code,
      });
    }

    case ActionTypes.CLOSE_CODE_VIEWER: {
      return Object.assign({}, state, {
        isOpen: false,
      });
    }

    default:
      break;
  }

  return state;
}
