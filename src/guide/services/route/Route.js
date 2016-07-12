
import { slugifyEach } from '../string/Slug';

// Component route names should match the component name exactly.
const components = [];

export default {
  components: slugifyEach(components, 'name', 'path'),
  getAppRoutes: function getAppRoutes() {
    const list = this.components;
    return list;
  },
};
