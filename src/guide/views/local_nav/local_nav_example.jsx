
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
  title: 'Search, with error',
  html: require('./local_nav_search_error/local_nav_search_error.html'),
}, {
  title: 'Selected and disabled menu item states',
  description: (
    <div>
      <p>When the user selects a menu item, additional content can be displayed inside of a dropdown.</p>
      <p>Menu items can also be disabled, in which case they become non-interactive.</p>
    </div>
  ),
  html: require('./local_nav_menu_item_states/local_nav_menu_item_states.html'),
}, {
  title: 'Dropdown',
  description: (
    <p>Selecting a menu item will commonly result in an open dropdown.</p>
  ),
  html: require('./local_nav_dropdown/local_nav_dropdown.html'),
}, {
  title: 'Tabs',
  description: (
    <p>You can display tabs for navigating local content.</p>
  ),
  html: require('./local_nav_tabs/local_nav_tabs.html'),
}]);
