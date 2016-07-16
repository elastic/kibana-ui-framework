
import Slugify from '../string/slugify';

import TopNavExample
  from '../../views/top_nav/top_nav_example.jsx';

// Component route names should match the component name exactly.
const components = [{
  name: 'TopNav',
  component: TopNavExample,
}];

export default {
  components: Slugify.each(components, 'name', 'path'),
  getAppRoutes: function getAppRoutes() {
    const list = this.components;
    return list.slice(0);
  },
};
