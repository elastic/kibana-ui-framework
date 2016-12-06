
import React from 'react';

import {
  createExample,
} from '../../services';

export default createExample([{
  title: 'ToolBar',
  description: (
    <p>Use the ToolBar to surface controls for manipulating and filtering content, e.g. in a list, table, or menu.</p>
  ),
  html: require('./tool_bar.html'),
  hasDarkTheme: false,
}]);
