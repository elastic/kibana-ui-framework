
import Slugify from '../string/slugify';

import ButtonExample
  from '../../views/button/button_example.jsx';

import LocalNavExample
  from '../../views/local_nav/local_nav_example.jsx';

import ToolBarExample
  from '../../views/tool_bar/tool_bar_example.jsx';

// Component route names should match the component name exactly.
const components = [{
  name: 'Button',
  component: ButtonExample,
}, {
  name: 'LocalNav',
  component: LocalNavExample,
}, {
  name: 'ToolBar',
  component: ToolBarExample,
}];

export default {
  components: Slugify.each(components, 'name', 'path'),
  getAppRoutes: function getAppRoutes() {
    const list = this.components;
    return list.slice(0);
  },
};
