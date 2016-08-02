
import React from 'react';

import {
  createExample,
} from '../../services';

export default createExample([{
  title: 'Simple',
  description: (
    <p>Here's a simple LocalNav with breadcrumbs in the top left corner and Menu in the top right.</p>
  ),
  html: require('./local_nav_simple/local_nav_simple.html'),
}, {
  title: 'Search',
  description: (
    <p>You can add a Search component for filtering results.</p>
  ),
  html: require('./local_nav_search/local_nav_search.html'),
}, {
  title: 'Selected menu item',
  description: (
    <p>When the user selects a menu item, additional content can be displayed inside of a dropdown.</p>
  ),
  html: require('./local_nav_selected_menu_item/local_nav_selected_menu_item.html'),
}, {
  title: 'Tabs',
  description: (
    <p>You can display tabs for navigating local content.</p>
  ),
  html: require('./local_nav_tabs/local_nav_tabs.html'),
}]);
