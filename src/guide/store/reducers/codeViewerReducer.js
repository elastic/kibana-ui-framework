
import ActionTypes from '../../actions/ActionTypes';

const defaultState = {
  isOpen: false,
  codesBySlug: {},
  code: undefined,
};

export default function codeViewerReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.OPEN_CODE_VIEWER: {
      return Object.assign({}, state, {
        isOpen: true,
        code: state.codesBySlug[action.slug],
      });
    }

    case ActionTypes.UPDATE_CODE_VIEWER: {
      if (state.isOpen) {
        return Object.assign({}, state, {
          code: state.codesBySlug[action.slug],
        });
      }
      return state;
    }

    case ActionTypes.CLOSE_CODE_VIEWER: {
      return Object.assign({}, state, {
        isOpen: false,
        code: undefined,
      });
    }

    case ActionTypes.REGISTER_CODE: {
      const codesBySlug = Object.assign({}, state.codesBySlug, {
        [action.code.slug]: action.code,
      });

      return Object.assign({}, state, {
        codesBySlug
      });
    }

    case ActionTypes.UNREGISTER_CODE: {
      const codesBySlug = Object.assign({}, state.codesBySlug);
      delete codesBySlug[action.code.slug];

      return Object.assign({}, state, {
        codesBySlug
      });
    }

    default:
      break;
  }

  return state;
}
