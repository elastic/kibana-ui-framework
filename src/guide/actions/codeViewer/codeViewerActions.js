
import ActionTypes from '../ActionTypes';

export default {

  openCodeViewer: code => ({
    type: ActionTypes.OPEN_CODE_VIEWER,
    code,
  }),

  closeCodeViewer: () => ({
    type: ActionTypes.CLOSE_CODE_VIEWER,
  }),

};
