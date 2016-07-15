
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from './AppView.jsx';

import {
  CodeViewerActions,
} from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    routes: ownProps.routes,
    isCodeViewerOpen: state.codeViewer.isOpen,
    code: state.codeViewer.code,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    openCodeViewer: CodeViewerActions.openCodeViewer,
    closeCodeViewer: CodeViewerActions.closeCodeViewer,
  };

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
