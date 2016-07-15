
import { slugifyEach } from '../string/Slug';

import TopNavExample
  from '../../views/topNav/TopNavExample.jsx';

// Component route names should match the component name exactly.
const components = [{
  name: 'TopNav',
  component: TopNavExample,
}];

export default {
  components: slugifyEach(components, 'name', 'path'),
  getAppRoutes: function getAppRoutes() {
    const list = this.components;
    return list.slice(0);
  },
};
