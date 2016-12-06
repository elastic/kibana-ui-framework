
import React from 'react';

import {
  createExample,
} from '../../services';

export default createExample([{
  title: 'Default button',
  description: (
    <p>Use the default button in most situations.</p>
  ),
  html: require('./button/button_default.html'),
  hasDarkTheme: false,
}, {
  title: 'Primary button',
  description: (
    <p>Use the primary button to represent the most common action. Generally, there won't be a need to present more than one of these at a time.</p>
  ),
  html: require('./button/button_primary.html'),
  hasDarkTheme: false,
}, {
  title: 'Danger button',
  description: (
    <p>Danger buttons represent irreversible, potentially regrettable actions.</p>
  ),
  html: require('./button/button_danger.html'),
  hasDarkTheme: false,
}, {
  title: 'Button with icon',
  description: (
    <p>You can toss an icon into a button, with or without text.</p>
  ),
  html: require('./button/button_with_icon.html'),
  hasDarkTheme: false,
}, {
  title: 'Button group',
  html: require('./button/button_group.html'),
  hasDarkTheme: false,
}, {
  title: 'In tool bar',
  html: require('./button/buttons_in_tool_bar.html'),
  hasDarkTheme: false,
}, {
  title: 'Element variations',
  description: (
    <p>You can create a button using a button element, link, div, span, or input[type="submit"].</p>
  ),
  html: require('./button/button_elements.html'),
  hasDarkTheme: false,
}]);
